angular
  .module('sysApp')
  .controller('loginCtrl',loginCtrl);

function loginCtrl($scope,$state,$cookieStore){
  var vm = this;
  vm.user = {};
  vm.login = login;

  function login(){
    //初始化，使用Application ID和REST API Key
  	Bmob.initialize('7e492cbe197a97cecf3c0ad72120dd04', 'a7d52f0f857157f328fc36600b5b0034');
  	//创建Bmob.Object子类
    var User = Bmob.Object.extend('user');
    //创建该类的一个实例
  	var query = new Bmob.Query(User);

    $scope.loginForm.$setSubmitted();

    var userName = vm.user.userName;
    var password = vm.user.userPwd;
    //用户名存储在cookie中
    $cookieStore.put('userName', userName);

  	//查询数据
  	query.select('userName','password');
  	query.find().then(function (results){

      //判断用户名和密码是否存在
  		var userNameData = [],passwordData = [];
  		_.forEach(results, function (t){
  			userNameData.push(t.attributes.userName);
        passwordData.push(t.attributes.password)
  		})
      vm.userNameIndex = _.indexOf(userNameData,userName);
      vm.passwordIndex = _.indexOf(passwordData,password);

  		//登录时验证用户名、密码
			if(vm.userNameIndex !== -1 && vm.passwordIndex !== -1) {
				$state.go('sys')
			}
  	})
  }
}