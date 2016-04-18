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
            templateUrl: 'sys/views/home.html'
          },
          '@home': {
            templateUrl: 'sys/views/login.html',
            controller: 'loginCtrl',
            controllerAs: 'vm'            
          }
        }
      })
      .state('home.register',{
        url:'/register',
        views: {
          '@home': {
            templateUrl: 'sys/views/register.html',
            controller: 'registerCtrl',
            controllerAs: 'vm'
          }
        }
      })
      .state('sys',{
        url:'/index',
        views: {
          '': {
            templateUrl: 'sys/views/index.html'
          },
          'topbar@sys': {
            templateUrl: 'sys/views/topbar.html'
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
            templateUrl: 'sys/views/main.html',
          }
        }
      })
      .state('sys.main.information',{
        url:'/information',
        templateUrl: 'sys/views/information.html',
        controller: 'informationCtrl',
        controllerAs: 'vm'
      })
  }