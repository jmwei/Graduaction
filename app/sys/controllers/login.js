angular
  .module('sysApp')
  .controller('loginCtrl',loginCtrl);

function loginCtrl($scope,$state){
  var vm = this;
  vm.user = {};
  vm.login = login;

  function login(){
  	Bmob.initialize('7e492cbe197a97cecf3c0ad72120dd04', 'a7d52f0f857157f328fc36600b5b0034');
  	var User = Bmob.Object.extend('user');
  	var query = new Bmob.Query(User);
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
          alert(111)
  				$state.go('sys')
  			} 
  		})
  		
  	})
  }
}