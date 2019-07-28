app.controller('mainCtrl', function($scope, pageRenderServices) {
  //Declear Variables
  $scope.pageExercise = {};
  
  //Initialize main menu from assets/data.json
  (function() {
    pageRenderServices.getMenu().then(function(response) {
      $scope.pageExercise = response.data;
    });
  })();

});