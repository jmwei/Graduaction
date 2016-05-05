angular
  .module('sysApp')
  .controller('orderListCtrl',orderListCtrl);

function orderListCtrl ($scope,$cookieStore){
  //初始化，使用Application ID和REST API Key
  Bmob.initialize('7e492cbe197a97cecf3c0ad72120dd04', 'a7d52f0f857157f328fc36600b5b0034');
  //创建Bmob.Object子类
  var Order = Bmob.Object.extend('order');
  //创建该类的一个实例  
  var query = new Bmob.Query(Order);

  var vm = this;
  vm.remove = remove;
  vm.itemsByPage = 10;

  //获取登陆用户
  vm.userName = $cookieStore.get('userName');

  //展示数据
  query.select('checkInName','checkInDays','roomNo','roomPrice','roomFloor','roomType','roomDescription');
  vm.orderInfo = [];
  query.find().then(function (results){
    vm.info = results;
    _.forEach(vm.info,function (t){
      vm.orderInfo.push(t.attributes);
    });
    //console.log(vm.info)
    $scope.$apply();
  })


  //删除数据
  function remove(t) {
    var index = vm.orderInfo.indexOf(t);
    //console.log(vm.info[index].id)
    query.get(vm.info[index].id, {
      success: function(order) {
        // 查询成功，删除数据
        var orderData = order;
        orderData.destroy({
          success: function(order){
            window.location.reload();
          },
          error: function(order,error){
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