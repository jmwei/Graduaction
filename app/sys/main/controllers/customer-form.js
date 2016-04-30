angular
  .module('sysApp')
  .controller('customerFormCtrl',customerFormCtrl);

function customerFormCtrl($scope,$state){
  var vm = this;
  vm.customer = {};
  vm.save = save;

  function save(){
    //初始化，使用Application ID和REST API Key
    Bmob.initialize('7e492cbe197a97cecf3c0ad72120dd04', 'a7d52f0f857157f328fc36600b5b0034');
    //创建Bmob.Object子类   
    var Customer = Bmob.Object.extend('customer');
    //创建该类的一个实例
    var Customer = new Customer();

    //表单验证
    $scope.customerForm.$setSubmitted();
    var $valid = $scope.customerForm.$valid;
    if (!$valid){
      return;
    }

    var name = vm.customer.name;
    var sex = vm.customer.sex;
    var phone = vm.customer.phone;
    var idc = vm.customer.idc;
    var address = vm.customer.address;

    Customer.set('name', name);
    Customer.set('sex', sex);
    Customer.set('phone', phone);
    Customer.set('idc', idc);
    Customer.set('address', address);
    Customer.save(null, {
      success: function(object) {
        $state.go('sys.customerList')
      },
      error: function(model, error) {
        alert('保存失败');
      }
    });
  }
}