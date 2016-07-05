'use strict';

(function (app) {
  app.AppComponent = ng.core.Component({
    selector: 'my-app',
    template: '<h1>A cool Angular 2 App</h1>'
  }).Class({
    constructor: function constructor() {}
  });
})(window.app || (window.app = {}));