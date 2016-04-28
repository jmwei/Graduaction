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
  vm.itemsByPage = 10;
  query.select('name','sex','phone','idc','address');
  vm.customerInfo = [];
  query.find().then(function (results){
    _.forEach(results,function (t){
      vm.customerInfo.push(t.attributes);
    });
    $scope.$apply();
  })

}