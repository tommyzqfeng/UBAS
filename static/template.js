/**
 * @file
 * @author tommyzqfeng
 * @date 2016/11/17
 */
'use strict';

;(function () {
  var s = document.createElement('script');
  s.id = 'feDataReport';
  s.type= 'text/javascript';
  s.src= 'http://192.168.88.8:3000/static/reportData.js?appId=811756202';
  document.body.appendChild(s);
  s = null;
})();