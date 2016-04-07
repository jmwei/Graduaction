angular
  .module('sysApp')
  .controller('loginCtrl',loginCtrl);

function loginCtrl($scope){
  var vm = this;
  vm.user = {};
  vm.login = login;

  function login(){
    if(vm.user.userName === '1' && vm.user.userPwd === '1'){
      alert(111);
    }
  }
}