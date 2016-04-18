'use strict'
angular
  .module('sys.routes',['ui.router'])
  .config(config);

  function config($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
      .state('home',{
        url:'/home',
        views: {
          '': {
            templateUrl: 'sys/login-register/views/home.html'
          },
          '@home': {
            templateUrl: 'sys/login-register/views/login.html',
            controller: 'loginCtrl',
            controllerAs: 'vm'            
          }
        }
      })
      .state('home.register',{
        url:'/register',
        views: {
          '@home': {
            templateUrl: 'sys/login-register/views/register.html',
            controller: 'registerCtrl',
            controllerAs: 'vm'
          }
        }
      })
      .state('sys',{
        url:'/index',
        views: {
          '': {
            templateUrl: 'sys/managers/views/index.html'
          },
          'topbar@sys': {
            templateUrl: 'sys/managers/views/topbar.html'
          }/*,
          'main@sys': {
            templateUrl: 'sys/views/home.html'
          }*/
        }
      })
      .state('sys.main',{
        url:'/main',
        views: {
          'main@sys': {
            templateUrl: 'sys/managers/views/main.html',
          }
        }
      })
      .state('sys.main.information',{
        url:'/information',
        templateUrl: 'sys/managers/views/information.html',
        controller: 'informationCtrl',
        controllerAs: 'vm'
      })
  }