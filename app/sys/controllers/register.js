angular
  .module('sysApp')
  .controller('registerCtrl',registerCtrl);

function registerCtrl($scope){
  var vm = this;
  vm.user = {};
  vm.register = register;

  function register(){
  	Bmob.initialize('7e492cbe197a97cecf3c0ad72120dd04', 'a7d52f0f857157f328fc36600b5b0034');
  	var User = Bmob.Object.extend('user');
    var User = new User();

    //监听两次密码输入是否一致
    /*$scope.$watch('vm.user.confirmPwd',function (){
    	if('vm.user.confirmPwd !== vm.user.userPwd'){
    		alert('11111');
    	}
    })*/

    var userName = vm.user.userName;
    var password = vm.user.userPwd;

    User.set('userName', userName);
    User.set('password', password);
    User.save(null, {
      success: function(object) {
        alert('注册成功');
      },
      error: function(model, error) {
        alert("注册失败");
      }
    });
  }
}