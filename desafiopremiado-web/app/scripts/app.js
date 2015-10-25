'use strict';

/**
 * @ngdoc overview
 * @name financialControlApp
 * @description
 * # financialControlApp
 *
 * Main module of the application.
 */
var app = angular
  .module('desafioPremiosApp', [
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    "ui.router"
  ]);
  app.config(function ($stateProvider) {

        $stateProvider
          .state('login', {
            url: '/login',
            views: {
                'body': {
                    templateUrl: 'partials/public/login.tlp.html',
                    controller: 'LoginController'
                }
            }
            })
            .state('home', {
                url: '/home',
                views: {
                    'body': {
                        templateUrl: 'partials/public/home.tlp.html',
                        controller: 'HomeController'
                    }
                }
            })
           .state('produto', {
                url: '/produto',
                views: {
                    'header': {
                        templateUrl: 'partials/private/admin.tlp.html'
                    },
                    'body': {
                        templateUrl: 'partials/private/produto.tlp.html',
                        controller: 'LoginController'
                    },
                    'footer': {
                        templateUrl: 'partials/private/footer.tlp.html'

                    }
                }
            })



  });
