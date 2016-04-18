angular
  .module('sysApp')
  .controller('registerCtrl',registerCtrl);

function registerCtrl($scope, $state){
  var vm = this;
  vm.user = {};
  vm.register = register;
  vm.confirm = confirm;

  //监听两次密码输入是否一致
  $scope.$watch('vm.user.confirmPwd', function (n){
    if(!vm.user.userPwd){
      return
    }
    if(n && n !== vm.user.userPwd){
      vm.errMsg = '两次密码输入不一致';
      vm.user.confirmPwd = '';
    } else if(n && n === vm.user.userPwd){
      vm.errMsg = '';
    }
  })

  function register(){
    //初始化，使用Application ID和REST API Key
  	Bmob.initialize('7e492cbe197a97cecf3c0ad72120dd04', 'a7d52f0f857157f328fc36600b5b0034');
    //创建Bmob.Object子类  	
    var User = Bmob.Object.extend('user');
    //创建该类的一个实例
    var User = new User();

    //表单验证
    $scope.rtForm.$setSubmitted();
    var $valid = $scope.rtForm.$valid;
    if (!$valid){
      return;
    }

    var userName = vm.user.userName;
    var password = vm.user.userPwd;

    User.set('userName', userName);
    User.set('password', password);
    User.save(null, {
      success: function(object) {
        $state.go('home.login');
      },
      error: function(model, error) {
        alert("注册失败");
      }
    });
  }
}