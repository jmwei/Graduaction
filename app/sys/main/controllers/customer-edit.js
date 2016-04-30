angular
  .module('sysApp')
  .controller('customerEditCtrl',customerEditCtrl);

function customerEditCtrl($scope,$state){
  var vm = this;
  vm.customer = {};

  //初始化，使用Application ID和REST API Key
  Bmob.initialize('7e492cbe197a97cecf3c0ad72120dd04', 'a7d52f0f857157f328fc36600b5b0034');
  //创建Bmob.Object子类   
  var Info = Bmob.Object.extend('customer');
  //创建该类的一个实例  
  var query = new Bmob.Query(Info);


  query.find().then(function (results){
    vm.data = results;
    $scope.$apply();
    console.log(vm.data)
  })


  
  /*query.get(vm.data.id,{
    success: function(Info){
      var name = Info.get('name');
      var sex = Info.get('sex');
      var phone = Info.get('phone');
      var idc = Info.get('idc');
      var address = Info.get('address');
      console.log(name)
    },
    error: function(object,error){
      alert('查询失败');
    }
  })*/

}
