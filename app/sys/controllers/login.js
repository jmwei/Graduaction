angular
  .module('sysApp')
  .controller('loginCtrl',loginCtrl);

function loginCtrl($scope,$state){
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

    $scope.myForm.$setSubmitted();  

  	//查询数据
  	query.select('userName','password');
  	query.find().then(function (results){
  		var userName = vm.user.userName;
  		var password = vm.user.userPwd;

  		var user = [];
  		_.forEach(results, function (t){
  			user.push(t.attributes)
  		})

  		//登录时验证用户名、密码
  		_.find(user, function (t){
				if(userName === t.userName && password === t.password) {
  				$state.go('sys')
  			}
  		})  		
  	})
  }
}