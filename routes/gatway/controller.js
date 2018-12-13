/**
 * Created by zeqi
 * @description Router for data service
 * @module Router.Gatway.Controller
 * @version 1.0.0
 * @author Xijun Zhu <zhuzeqi2010@163.com>
 * @File index
 * @Date 18-2-26
 * @Wechat zhuzeqi2010
 * @QQ 304566647
 * @Office-email zhuxj4@lenovo.com
 */

const fs = require('fs');

class Controller {
    constructor() {

    }

    async main(ctx, next) {
        ctx.type = 'html';
        ctx.body = fs.createReadStream('docs/index.html');
        return;
    }

    async whoami(ctx, next) {
        if (!ctx.session.user) {
            return ctx.status = 204;
        }
        return ctx.body = ctx.session.user;
    }
}

module.exports = new Controller();