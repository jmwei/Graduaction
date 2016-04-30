angular
  .module('sysApp')
  .controller('customerListCtrl',customerListCtrl);

function customerListCtrl ($scope){
  //初始化，使用Application ID和REST API Key
  Bmob.initialize('7e492cbe197a97cecf3c0ad72120dd04', 'a7d52f0f857157f328fc36600b5b0034');
  //创建Bmob.Object子类
  var Info = Bmob.Object.extend('customer');
  //创建该类的一个实例  
  var query = new Bmob.Query(Info);

  var vm = this;
  vm.remove = remove;

  //数据列表展示
  vm.itemsByPage = 10;

  function initData(){
    query.select('name','sex','phone','idc','address');
    vm.customerInfo = [];
    query.find().then(function (results){
      vm.data = results;
      _.forEach(results,function (t){
        vm.customerInfo.push(t.attributes);
      });
      $scope.$apply();
    })
  }
  initData();


  //删除数据
  function remove(t) {
    var index = vm.customerInfo.indexOf(t);
    //console.log(vm.data[index].id)
    query.get(vm.data[index].id, {
      success: function(customer) {
        // 查询成功，删除数据
        var customerData = customer;
        customerData.destroy({
          success: function(customer){
            window.location.reload();
          },
          error: function(customer,error){
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