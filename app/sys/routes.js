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
      .state('sys.main',{
        url:'/main',
        views: {
          'main@sys': {
            templateUrl: 'sys/views/main.html',
          }
        }
      })
      .state('sys.main.login',{
        url:'/login',
        templateUrl: 'sys/views/login.html',
        controller: 'loginCtrl',
        controllerAs: 'vm'
      })
      /*.state('sys.main.login',{
        url:'/login',
        views: {
          'main@sys': {
            templateUrl: 'sys/views/login.html',
            controller: 'loginCtrl',
            controllerAs: 'vm'
          }
        }
      })*/
      .state('sys.register',{
        url:'/register',
        views: {
          'main@sys': {
            templateUrl: 'sys/views/register.html',
            controller: 'registerCtrl',
            controllerAs: 'vm'
          }
        }
      })
  }