angular
  .module('sysApp')
  .controller('customerListCtrl',customerListCtrl);

function customerListCtrl ($scope,$cookieStore,$state){
  //初始化，使用Application ID和REST API Key
  Bmob.initialize('7e492cbe197a97cecf3c0ad72120dd04', 'a7d52f0f857157f328fc36600b5b0034');
  //创建Bmob.Object子类
  var Info = Bmob.Object.extend('customer');
  //创建该类的一个实例  
  var query = new Bmob.Query(Info);

  var vm = this;
  vm.remove = remove;
  vm.edit = edit;

  //数据列表展示
  vm.itemsByPage = 10;

  //获取登陆用户
  vm.userName = $cookieStore.get('userName');

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

  //修改数据
  function edit(t) {
    //模态框展示和隐藏
    $('#myModal').fadeIn();
    $('.close').click(function(){
      $('#myModal').fadeOut();
    })

    var index = vm.customerInfo.indexOf(t);
    //console.log(vm.data[index].id)
    query.get(vm.data[index].id, {
      success: function(customer) {
        // 查询成功
        var customerData = customer.attributes;
        vm.editCustomer = customerData;
        console.log(customerData.name);

        vm.book = book;
        //初始化，使用Application ID和REST API Key
        Bmob.initialize('7e492cbe197a97cecf3c0ad72120dd04', 'a7d52f0f857157f328fc36600b5b0034');
        //创建Bmob.Object子类
        var Info = Bmob.Object.extend('customer');
        //创建该类的一个实例  
        var query = new Info();
        function book(){
          var name = vm.editCustomer.name;
          var sex = vm.editCustomer.sex;
          var phone = vm.editCustomer.phone;
          var idc = vm.editCustomer.idc;
          var address = vm.editCustomer.address;
          query.set('name', name);
          query.set('sex', sex);
          query.set('phone', phone);
          query.set('idc', idc);
          query.set('address', address);
          query.save(null, {
            success: function(object) {
              window.location.reload();
            },
            error: function(model, error) {
              alert('保存失败');
            }
          });
        }
      },
      error: function(object, error) {
        // 查询失败
        alert('查询失败');
      }
    });
  }

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