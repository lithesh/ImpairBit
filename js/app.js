var app = angular.module("myApp", ["ngRoute","ui.bootstrap"]);
app.  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('!');
        $routeProvider
        .when("/", {
            templateUrl: "../views/home.html"
        })
        .when("/aboutus", {
            templateUrl: "../views/aboutus.html"
        })
        .when("/contactus", {
            templateUrl : "../views/contact.html"
        })
        .when("/products", {
            templateUrl: "../views/products.html"
        })
        // .otherwise({ redirectTo: '/home' });
        .otherwise({  template: "Page Not found" });
        }
  ]);