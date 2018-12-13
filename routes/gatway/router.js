/**
 * Created by zeqi
 * @description Router for data service
 * @module Router.Gatway.Router
 * @version 1.0.0
 * @author Xijun Zhu <zhuzeqi2010@163.com>
 * @File index
 * @Date 18-2-26
 * @Wechat zhuzeqi2010
 * @QQ 304566647
 * @Office-email zhuxj4@lenovo.com
 */

const HttpMethod = require('../httpMethod');
const controller = require('./controller');
const Permission = require('../permission');

module.exports = {
    baseUrl: null,
    routes: [{
        method: HttpMethod.GET,
        route: '/',
        handlers: [controller.main],
        options: {
            role: Permission.EVERYONE
        }
    }, {
        method: HttpMethod.ALL,
        route: '/whoami',
        handlers: [controller.whoami]
    }]
};