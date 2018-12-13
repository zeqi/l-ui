/**
 * Created by zeqi
 * @description Main file for data service
 * @module App
 * @version 1.0.0
 * @author Xijun Zhu <zhuzeqi2010@163.com>
 * @File app
 * @Date 18-2-26
 * @Wechat zhuzeqi2010
 * @QQ 304566647
 * @Office-email zhuxj4@lenovo.com
 */

const Koa = require('koa');
const app = new Koa();
let debug = require('debug')('l-ui:app');
let error = require('debug')('l-ui:app:error');
debug.log = console.log.bind(console);
error.log = console.error.bind(console);
const http = require('http');
const bodyparser = require('koa-bodyparser');
const config = require('config');

require('koa-qs')(app);

app.use(bodyparser({ enableTypes: ['json'] }));
app.use(require('koa-static')(__dirname + '/docs'))

//catch app error
app.use(async (ctx, next) => {
  try {
    await next()
  }
  catch (err) {
    ctx.status = err.errorCode || err.status || 500
    ctx.body = { errorCode: ctx.status, message: err.message || 'Server internal error' }
    if (ctx.status == 401) {
      ctx.body = { errorCode: 401, message: "Unauthenticated user" }
    }
    ctx.app.emit('error', err, ctx)
  }
})

const appSession = require("./routes/session");
app.use(appSession.createSession());

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
const routes = require('./routes')(app);

// error-handling
app.on('error', (err, ctx) => {
  error('App error', err)
});
let host = config.get('Server').host;
let port = config.get('Server').port;
http.createServer(app.callback()).listen(port, host, () => {
  debug('Data service is started on host:port --> [' + host + ']:[' + port + '] with server-mode "' + process.env.NODE_ENV + '"');
});

module.exports = app;