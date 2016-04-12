angular
  .module('sysApp')
  .controller('informationCtrl',informationCtrl);

function informationCtrl ($scope){
  var vm = this;
  vm.itemsByPage = 5;

   Bmob.initialize('7e492cbe197a97cecf3c0ad72120dd04', 'a7d52f0f857157f328fc36600b5b0034');

    /* var Info = Bmob.Object.extend('information');
    var query = new Bmob.Query(Info);
    query.select('name','no','remark');
    //query.limit(10);
    query.find().then(function (results){
      vm.info = results;
      var info = [];
      _.forEach(vm.info,function (t){
        info.push(t.attributes);
      });
      vm.infos = info;
    })*/


    var viewModel = {};
    viewModel.data = ko.observableArray();
    viewModel.initData = function() {
        var Chat = Bmob.Object.extend('information');
        var chat = new Bmob.Query(Chat);
        chat.select('name','no','remark');
        chat.find().then(function(results){
            viewModel.data(results);
        });
    }();
    ko.applyBindings(viewModel);

    var test = viewModel;

  console.log(test)



/*  var
      nameList = ['Pierre', 'Pol', 'Jacques', 'Robert', 'Elisa'],
      familyName = ['Dupont', 'Germain', 'Delcourt', 'bjip', 'Menez'];

  function createRandomItem() {
      var
          firstName = nameList[Math.floor(Math.random() * 4)],
          lastName = familyName[Math.floor(Math.random() * 4)],
          age = Math.floor(Math.random() * 100),
          email = firstName + lastName + '@whatever.com',
          balance = Math.random() * 3000;

      return{
          firstName: firstName,
          lastName: lastName,
          age: age,
          email: email,
          balance: balance
      };
  }

  $scope.itemsByPage = 7;

  $scope.rowCollection = [];
  for (var j = 0; j < 30; j++) {
      $scope.rowCollection.push(createRandomItem());
  }

  console.log('111',$scope.rowCollection)*/

}