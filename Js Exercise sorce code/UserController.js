app.controller('UserController', function($scope, $http, API_URL) {
  // retrieve user listing from API
  $scope.loadData =function() {
    $http.get(API_URL + "users").
    success(function(allUsers) {
        $scope.users = allUsers;
    });
  }

  // show modal Form
  $scope.show = function(id) {
      $scope.form_title = "User Detail";
      $scope.id = id;
      //$scope.user = $scope.users[$scope.id];
      for(var i=0; i < $scope.users.length; i++) {
          if($scope.users[i].id == id )
          {
              $scope.singleUser = $scope.users[i];
          }
      }

      $('#myModal').modal('show');
  }

  // add new user to Array
  $scope.save = function(id) {

    if($("#_name").val() == "" || $("#_name").val() == ""){
      alert("ID and Name is requird!");
      return;
    }
   
    $scope.users.push({
        'id': $("#_userid").val(),
        'name':  $("#_name").val(),
        'username': $("#_username").val(),
        'email': $("#_email").val(),
      });
      $("#_userid").val("");
      $("#_name").val("");
      $("#_username").val("");
      $("#_email").val("");
  }

 // remove user from Array recode
 $scope.confirmDelete = function(id) {
   var isConfirmDelete = confirm('Are you sure you want this record?');
   if (isConfirmDelete) {
      for(var i=0; i < $scope.users.length; i++) {
          if($scope.users[i].id == id )
          {
              $scope.users.splice(i,1);
          }
        }
   } else {
      return false;
   }
  }
});