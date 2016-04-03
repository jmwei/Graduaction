'use strict'
angular
  .module('sys.routes',['ui.router'])
  .config(config);

  function config($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.otherwise('/index');
    $stateProvider
      .state('sys',{
        url:'/index',
        views: {
          '': {
            templateUrl: 'sys/views/index.html'
          },
          'topbar@sys': {
            templateUrl: 'sys/views/topbar.html'
          },
          'main@sys': {
            templateUrl: 'sys/views/home.html'
          }
        }
      })
  }