angular
	.module('sysApp')
	.controller('mainCtrl',mainCtrl)

function mainCtrl(){
	$('ul li a').click(function(){
		$('ul li').css('background','#f7f7f7')
		$(this).parent().parent().css('background','rgba(0,255,90,0.05)')
	})

}