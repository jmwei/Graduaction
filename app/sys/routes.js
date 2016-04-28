'use strict'
angular
  .module('sys.routes',['ui.router'])
  .config(config);

  function config($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
      .state('home', {
        url: '/home',
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
      .state('home.register', {
        url: '/register',
        views: {
          '@home': {
            templateUrl: 'sys/login-register/views/register.html',
            controller: 'registerCtrl',
            controllerAs: 'vm'
          }
        }
      })
      .state('sys', {
        url: '/index',
        views: {
          '': {
            templateUrl: 'sys/managers/views/index.html'
          },
          'topbar@sys': {
            templateUrl: 'sys/managers/views/topbar.html'
          },
          'main@sys': {
            templateUrl: 'sys/managers/views/main.html'
          }
        }
      })
      /*.state('sys.main',{
        url:'/main',
        views: {
          'main@sys': {
            templateUrl: 'sys/managers/views/main.html',
          }
        }
      })*/
      .state('sys.customerList', {
        url: '/customerList',
        templateUrl: 'sys/main/views/customer-list.html',
        controller: 'customerListCtrl',
        controllerAs: 'vm'
      })
      .state('sys.customerForm', {
        url: '/customerForm',
        templateUrl: 'sys/main/views/customer-form.html',
        controller: 'customerFormCtrl',
        controllerAs: 'vm'
      })
      .state('sys.roomList', {
        url: '/roomList',
        templateUrl: 'sys/main/views/room-list.html',
        controller: 'roomListCtrl',
        controllerAs: 'vm'
      })
      .state('sys.roomForm', {
        url: '/roomForm',
        templateUrl: 'sys/main/views/room-form.html',
        controller: 'roomFormCtrl',
        controllerAs: 'vm'
      })
      .state('sys.orderList',{
        url:'/orderList',
        templateUrl: 'sys/main/views/order-list.html',
        controller: 'orderListCtrl',
        controllerAs: 'vm'
      })
  }