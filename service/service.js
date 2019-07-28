app.factory('firebaseServices', function ($firebaseArray, $q) {

  return {
    //Submit Form
    submitForm: function(data, ref) {
      var baseRef = firebase.database().ref(ref),
          deferred = $q.defer();
      $firebaseArray(baseRef).$add(data);
      deferred.resolve();
      return deferred.promise;
    },
    //Load submitted form data
    getSubmition: function(ref) {
      var baseRef = firebase.database().ref(ref);
      return $firebaseArray(baseRef);
    }
  }

});

app.factory('pageRenderServices', function ($http) {

  return {
    //Load Menu
    getMenu: function() {
      return $http.get('../assets/data.json')
    },
    //Load Form
    getForm: function() {
      return $http.get('../assets/form.json')
    }
  }

});