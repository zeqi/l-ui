/**
 * Created by zeqi
 * @description Router for data service
 * @module HttpMethod
 * @version 1.0.0
 * @author Xijun Zhu <zhuzeqi2010@163.com>
 * @File index
 * @Date 18-2-26
 * @Wechat zhuzeqi2010
 * @QQ 304566647
 * @Office-email zhuxj4@lenovo.com
 */

class HttpMethod {
  constructor() { }

  /**
   * 
   * 
   * @readonly
   * @static
   * 
   * @memberOf HttpMethod
   */
  static get ALL() {
    return 'ALL';
  }

  /**
   * 
   * 
   * @readonly
   * @static
   * 
   * @memberOf HttpMethod
   */
  static get GET() {
    return 'GET';
  }

  /**
   * 
   * 
   * @readonly
   * @static
   * 
   * @memberOf HttpMethod
   */
  static get POST() {
    return 'POST';
  }

  /**
   * 
   * 
   * @readonly
   * @static
   * 
   * @memberOf HttpMethod
   */
  static get PUT() {
    return 'PUT';
  }

  /**
   * 
   * 
   * @readonly
   * @static
   * 
   * @memberOf HttpMethod
   */
  static get PATCH() {
    return 'PATCH';
  }

  /**
   * 
   * 
   * @readonly
   * @static
   * 
   * @memberOf HttpMethod
   */
  static get DELETE() {
    return 'DELETE';
  }

  /**
   * 
   * 
   * @readonly
   * @static
   * 
   * @memberOf HttpMethod
   */
  static get SEARCH() {
    return 'SEARCH';
  }

  /**
   * 
   * 
   * @readonly
   * @static
   * 
   * @memberOf HttpMethod
   */
  static get HEAD() {
    return 'HEAD';
  }

  /**
   * 
   * 
   * @readonly
   * @static
   * 
   * @memberOf HttpMethod
   */
  static get OPTIONS() {
    return 'OPTIONS';
  }
}

module.exports = HttpMethod;