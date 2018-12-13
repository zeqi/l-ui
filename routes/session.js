/**
 * Created by zeqi
 * @description Router for data service
 * @module Session
 * @version 1.0.0
 * @author Xijun Zhu <zhuzeqi2010@163.com>
 * @File index
 * @Date 18-2-26
 * @Wechat zhuzeqi2010
 * @QQ 304566647
 * @Office-email zhuxj4@lenovo.com
 */

const Redis = require('ioredis');
const { Store } = require('koa-session2');
const session = require('koa-session2');
const config = require('config');
const serverConfig = config.get('Server');

class RedisStore extends Store {
    constructor(conf) {
        super();
        this.redis = new Redis(conf);
    }

    static get SESSION_ID_PREFIX() {
        return serverConfig.platform + '.sid';
    }

    static sessionKey(sid) {
        return `${RedisStore.SESSION_ID_PREFIX}:${sid}`;
    }

    sessionKey(sid) {
        return RedisStore.sessionKey(sid);
    }

    async get(sid, ctx) {
        let data = await this.redis.get(this.sessionKey(sid));
        return JSON.parse(data);
    }

    async set(session, { sid = this.getID(24), maxAge = serverConfig.SESSION_TIMEOUT } = {}, ctx) {
        try {
            await this.redis.set(this.sessionKey(sid), JSON.stringify(session), 'EX', serverConfig.SESSION_TIMEOUT / 1000);
        } catch (e) {}
        return sid;
    }

    async destroy(sid, ctx) {
        return await this.redis.del(this.sessionKey(sid));
    }
}

class APPSession {
    constructor() {}

    static get SESSION_ID_PREFIX() {
        return serverConfig.platform + '.sid';
    }

    static get SESSION_COOKIE_DOMAIN() {
        switch (process.env.NODE_ENV) {
            case 'default':
            case 'development':
            case 'stage':
                return null;
            default:
                return serverConfig.SESSION_COOKIE_DOMAIN;
        }
    }

    getSessionStore() {
        return new RedisStore(config.get('Server').sessionStore);
    }

    createSession() {
        return session({
            key: APPSession.SESSION_ID_PREFIX,
            domain: APPSession.SESSION_COOKIE_DOMAIN,
            maxAge: serverConfig.SESSION_TIMEOUT,
            store: this.getSessionStore()
        });
    }
}

module.exports = new APPSession();