angular
  .module('sysApp')
  .controller('roomFormCtrl',roomFormCtrl);

function roomFormCtrl($scope, $state, RoomType, RoomState) {
  var vm = this;
  vm.room = {
    roomType: '1',
    roomState: '0'
  };
  vm.save = save;

  //获取静态数据
  vm.roomType = RoomType;
  vm.roomState = RoomState;

  function save(){
    //初始化，使用Application ID和REST API Key
    Bmob.initialize('7e492cbe197a97cecf3c0ad72120dd04', 'a7d52f0f857157f328fc36600b5b0034');
    //创建Bmob.Object子类   
    var Room = Bmob.Object.extend('room');
    //创建该类的一个实例
    var Room = new Room();

    //表单验证
    $scope.roomForm.$setSubmitted();
    var $valid = $scope.roomForm.$valid;
    if (!$valid){
      return;
    }

    var roomNo = vm.room.roomNo;
    var roomPrice = vm.room.roomPrice;
    var roomFloor = vm.room.roomFloor;
    var roomArea = vm.room.roomArea;
    var roomType = vm.room.roomType;
    var roomState = vm.room.roomState;
    var roomDescription = vm.room.roomDescription;

    Room.set('roomNo', roomNo);
    Room.set('roomPrice', roomPrice);
    Room.set('roomFloor', roomFloor);
    Room.set('roomArea', roomArea);
    Room.set('roomType', roomType);
    Room.set('roomState', roomState);
    Room.set('roomDescription', roomDescription);

    Room.save(null, {
      success: function(object) {
        $state.go('sys.roomList')
      },
      error: function(model, error) {
        alert('保存失败');
      }
    });
  }
}