(function (angular) {
  'use strict';

  angular.module('720kb', [
    'ngRoute',
    '720kb.controllers'
  ])
  .config(['$routeProvider', '$locationProvider', '$httpProvider', function ($routeProvider, $locationProvider, $httpProvider) {

    $routeProvider
      .when('/',{
        templateUrl:'views/home/index.html',
        controller:'Home'
      })
      .otherwise({
        redirectTo:'/'
      });

    //$locationProvider.html5Mode(true); //github pages won't

    $httpProvider.defaults.withCredentials = true;//XHR Credentials
  }])
  .run(['$location', '$rootScope', function ($location, $rootScope) {
    var rootScopit = function () {
    $rootScope.config = {};

    $rootScope.config.appName = '720kb';
    $rootScope.config.appUrl = $location.protocol()+'://'+$location.host();
    $rootScope.config.appPath = $location.path();
    $rootScope.config.appFullPath = $location.url();
    $rootScope.config.appCurrentUrl = $rootScope.config.appUrl+$rootScope.config.appFullPath;
    $rootScope.config.appGithubUrl = 'https://github.com/720kb';
    $rootScope.layout = {
      responsiveMenu : {
        show: false
        }
      };
    };

    $rootScope.$on('$routeChangeStart', function () {
        rootScopit();
    });
  }]);

})(window.angular);
