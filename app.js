var app = angular.module('codeExerciseApp', ['ui.bootstrap', 'ngRoute', 'firebase'])
.config(function($routeProvider)  {
  $routeProvider
      .when('/subscribe', {
        templateUrl: 'view/subscribe.html',
        controller: 'subscribeCtrl'
      })
      .otherwise( { redirectTo: '/' })

})
