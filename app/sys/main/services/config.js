'use strict';
angular
	.module('sysApp')
	.constant('RoomType', [
		{code: '1',name: '单人间'},
		{code: '2',name: '双人间'},
		{code: '3',name: '标准间'},
		{code: '4',name: '套房间'}
	])
	.constant('RoomState', [
		{code: '0',name: '未入住'},
		{code: '1',name: '已入住'}
	])