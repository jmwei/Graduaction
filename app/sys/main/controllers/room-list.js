angular
  .module('sysApp')
  .controller('roomListCtrl',roomListCtrl);

function roomListCtrl ($scope,$cookieStore, RoomType){
  //初始化，使用Application ID和REST API Key
  Bmob.initialize('7e492cbe197a97cecf3c0ad72120dd04', 'a7d52f0f857157f328fc36600b5b0034');
  //创建Bmob.Object子类
  var Room = Bmob.Object.extend('room');
  //创建该类的一个实例  
  var query = new Bmob.Query(Room);

  var vm = this;
  vm.remove = remove;
  vm.order = order;

  //获取静态数据
  vm.roomType = RoomType;

  //数据列表展示
  vm.itemsByPage = 10;

  //获取登陆用户
  vm.userName = $cookieStore.get('userName');

  function initData(){
    query.select('roomNo','roomPrice','roomFloor','roomArea','roomType','roomState','roomDescription');
    vm.roomInfo = [];
    query.find().then(function (results){
      vm.data = results;
      //console.log(vm.data)
      _.forEach(results,function (t){
        vm.roomInfo.push(t.attributes);
      });
      $scope.$apply();
    })    
  }
  initData();

  //删除数据
  function remove(t) {
    var index = vm.roomInfo.indexOf(t);
    console.log(vm.data[index].id)
    query.get(vm.data[index].id, {
      success: function(room) {
        // 查询成功，删除数据
        var roomData = room;
        roomData.destroy({
          success: function(room){
            window.location.reload();
          },
          error: function(room,error){
            alert('删除失败');
          }
        })
      },
      error: function(object, error) {
        // 查询失败
        alert('查询失败');
      }
    });
  }

  //预订房间
  function order(t){
    //模态框展示和隐藏
    $('#myModal').fadeIn();
    $('.close').click(function(){
      $('#myModal').fadeOut();
    })
    var index = vm.roomInfo.indexOf(t);
    console.log(vm.data[index].id)
    query.get(vm.data[index].id, {
      success: function(room) {
        // 查询成功
        var roomData = room.attributes;
        vm.room = roomData;
        console.log(roomData.name);
        vm.book = book;

        //初始化，使用Application ID和REST API Key
        Bmob.initialize('7e492cbe197a97cecf3c0ad72120dd04', 'a7d52f0f857157f328fc36600b5b0034');
        //创建Bmob.Object子类   
        var Order = Bmob.Object.extend('order');
        //创建该类的一个实例
        var Order = new Order();
        function book(){
          var checkInName = vm.room.checkInName;
          var checkInDays = vm.room.checkInDays;
          var roomNo = vm.room.roomNo;
          var roomPrice = vm.room.roomPrice;
          var roomFloor = vm.room.roomFloor;
          var roomType = vm.room.roomType;
          var roomDescription = vm.room.roomDescription;

          Order.set('checkInName', checkInName);
          Order.set('checkInDays', checkInDays);
          Order.set('roomNo', roomNo);
          Order.set('roomPrice', roomPrice);
          Order.set('roomFloor', roomFloor);
          Order.set('roomType', roomType);
          Order.set('roomDescription', roomDescription);

          Order.save(null, {
            success: function(object) {
              $state.go('sys.orderList')
            },
            error: function(model, error) {
              alert('保存失败');
            }
          });
        }

      },
      error: function(object, error) {
        // 查询失败
        alert('预订失败');
      }
    });    
  }

}