angular
  .module('sysApp')
  .controller('roomListCtrl',roomListCtrl);

function roomListCtrl ($scope){
  //初始化，使用Application ID和REST API Key
  Bmob.initialize('7e492cbe197a97cecf3c0ad72120dd04', 'a7d52f0f857157f328fc36600b5b0034');
  //创建Bmob.Object子类
  var Info = Bmob.Object.extend('room');
  //创建该类的一个实例  
  var query = new Bmob.Query(Info);

  var vm = this;
  vm.remove = remove;

  //数据列表展示
  vm.itemsByPage = 10;

  function initData(){
    query.select('roomNo','roomPrice','roomFloor','roomArea','roomType','roomState','roomDescription');
    vm.roomInfo = [];
    query.find().then(function (results){
      vm.data = results;
      console.log(vm.data)
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

}