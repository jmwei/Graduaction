angular
	.module('sysApp')
	.controller('topBarCtrl',topBarCtrl)

function topBarCtrl($scope,$cookieStore){
	var vm = this;
	//获取cookie中用户名
	vm.userName = $cookieStore.get('userName');

}