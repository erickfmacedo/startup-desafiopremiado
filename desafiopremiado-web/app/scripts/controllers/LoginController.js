'use strict';

/**
 * @ngdoc function
 * @name financialControlApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the financialControlApp
 */
app.controller('LoginController', function ($scope, $rootScope, $location ) {
    $scope.login = function() {
        $rootScope.usuario = "{'name':'usuario'}";
        $location.path("/");
    }
  });
