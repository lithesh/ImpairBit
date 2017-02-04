var app = angular.module("myApp", ["ngRoute","ngAnimate"]);
app.  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('!');
        $routeProvider
        .when("/", {
            templateUrl: "../views/home.html",
            controller: 'mainController'
        })
        .when("/aboutus", {
            templateUrl: "../views/aboutus.html",
            controller: 'mainController'
        })
        .when("/contactus", {
            templateUrl : "../views/contact.html",
            controller: 'mainController'
        })
        .when("/services", {
            templateUrl: "../views/services.html",
            controller: 'mainController'
        })
        // .otherwise({ redirectTo: '/home' });
        .otherwise({  template: "Page Not found" });
        }
  ]);

app.controller('mainController', function($scope) {
    $scope.pageClass = 'page-home';
});

app.controller('aboutController', function($scope) {
    $scope.pageClass = 'page-about';
});

app.controller('contactController', function($scope) {
    $scope.pageClass = 'page-contact';
});