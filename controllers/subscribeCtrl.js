app.controller('subscribeCtrl', function($scope, firebaseServices, $location, pageRenderServices) {
  //Declear Variables
  $scope.formFields = {};
  $scope.submitData = {};
  //Form submission status: 0=Ready, 1=Submitting, 2=Success, 3=Falid
  $scope.resSuccess = 0;

  //Initialize form
  (function() {
    pageRenderServices.getForm().then(function(response) {
      //Load Form
      $scope.formFields = response.data;
      //Load submitted data
      $scope.subscribes = firebaseServices.getSubmition($scope.formFields.onSubmit.ref);
    });
  })();

  //Submit Form
  $scope.submitForm = function() {
    //Load spinner
    $scope.resSuccess = 1;
    //Set 1s delay for better user experience & avoid double submit
    setTimeout(function() {
      firebaseServices.submitForm($scope.submitData, $scope.formFields.onSubmit.ref)
      //Success
      .then(function() {
        $scope.resSuccess = 2;
        //Clear form
        $scope.submitData = {};
      })
      //Falid
      .catch(function() {
        $scope.resSuccess = 3;
      })
    }, 1000);
  }

  //Cancel button
  $scope.backToHome = function() {
    $location.path('/');
  }

  //Close message box
  $scope.closeAlert = function() {
    $scope.resSuccess = 0;
  }
});