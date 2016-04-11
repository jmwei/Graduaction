angular
  .module('sysApp')
  .controller('informationCtrl',informationCtrl);

function informationCtrl ($scope){
  var vm = this;
  vm.itemsByPage = 5;

  function getInfo (){
    Bmob.initialize('7e492cbe197a97cecf3c0ad72120dd04', 'a7d52f0f857157f328fc36600b5b0034');

    var Info = Bmob.Object.extend('information');
    var query = new Bmob.Query(Info);
    query.select('name','no','remark');
    query.limit(10);
    query.find().then(function (results){
      vm.info = results;
    })
  }
  getInfo();
}