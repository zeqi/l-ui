/**
 * Created by zeqi
 * @description Router for data service
 * @module Router
 * @version 1.0.0
 * @author Xijun Zhu <zhuzeqi2010@163.com>
 * @File index
 * @Date 18-2-26
 * @Wechat zhuzeqi2010
 * @QQ 304566647
 * @Office-email zhuxj4@lenovo.com
 */

var log = require('debug')('l-ui:routes');
log.log = console.log.bind(console);

const Router = require('koa-router');
const glob = require('glob');
const Permission = require('./permission');

var initApi = (app) => {
    var method = 'initApi';
    glob(`${__dirname}/*`, { ignore: ['**/index.js', '**/session.js', '**/permission.js', '**/httpMethod.js'] }, (err, matches) => {
        if (err) {
            throw err;
        }

        matches.forEach((mod) => {
            const router = require(`${mod}/router`);

            const routes = router.routes;
            const baseUrl = router.baseUrl;

            const instance = new Router({ prefix: baseUrl });

            routes.forEach((config) => {
                const { method = '', route = '', handlers = [], options = {} } = config;
                log(`method:${method}, route:${instance.opts.prefix + route}, role:${options.role ? options.role : Permission.EVERYONE}`);
                if (options.role === Permission.AUTHENTICATED_USER) {
                    handlers.unshift(Permission.CHECK_AUTHENTICATED_USER);
                }
                const lastHandler = handlers.pop();
                instance[method.toLowerCase()](route, ...handlers, async function(ctx) {
                    return await lastHandler(ctx);
                });
                app.use(instance.routes()).use(instance.allowedMethods());
            });
        });
    });
};

module.exports = initApi;