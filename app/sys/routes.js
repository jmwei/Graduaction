'use strict'
angular
  .module('sys.routes',['ui.router'])
  .config(config);

  function config($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('sys',{
        url:'/',
        templateUrl: 'sys/views/login.html'
      })
  }