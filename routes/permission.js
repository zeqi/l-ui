/**
 * Security Authorize Policy Handler
 *
 * @description The App module api
 * @module Permission
 * @version 1.0.0
 * @author Xijun Zhu <zhuzeqi2010@163.com>
 * @File app
 * @Date 18-2-26
 * @Wechat zhuzeqi2010
 * @QQ 304566647
 * @Office-email zhuxj4@lenovo.com
 */

'use strict';

var log = require('debug')('l-ui:permission');
log.log = console.log.bind(console);

class Permission {
    static get EVERYONE() {
        return 'everyone';
    }

    static get AUTHENTICATED_USER() {
        return 'authenticated_users';
    }

    static get ADMINISTRATOR() {
        return 'administrator';
    }

    static async CHECK_EVERYONE(ctx, next) {
        await next();
    }

    static async CHECK_AUTHENTICATED_USER(ctx, next) {
        if (!ctx.session.user) {
            throw { errorCode: 401 };
        }
        await next();
    }

}

module.exports = Permission;