'use strict';


app.controller('HomeController', function ($scope, $rootScope, $location ) {
    $scope.login = function() {
        $rootScope.usuario = "{'name':'usuario'}";
        $location.path("/");
    }
  });
