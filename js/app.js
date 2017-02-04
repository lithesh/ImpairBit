var app = angular.module("myApp", ["ngRoute","ngAnimate"]);
app.  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
        });
        $locationProvider.hashPrefix('!');
        $routeProvider
        .when("/", {
            templateUrl: "views/home.html",
            controller: 'HomeCtrl'
        })
        .when("/home", {
            templateUrl: "views/home.html",
            controller: 'HomeCtrl'
        })
        .when("/aboutus", {
            templateUrl: "views/aboutus.html",
            controller: 'AboutCtrl'
        })
        .when("/contactus", {
            templateUrl : "views/contact.html",
            controller: 'contactCtrl'
        })
        .when("/services", {
            templateUrl: "views/services.html",
            controller: 'ServiceCtrl'
        })
        // .otherwise({ redirectTo: '/home' });
        .otherwise({  template: "Page Not found" });
        }
  ]);

app.controller('MainCtrl', function($scope,$location,$anchorScroll) {
    $scope.pageClass = 'page-home';

        $scope.onMenuClick=function(){
                $location.hash('menu');
                $anchorScroll();
        }
});
app.controller('HomeCtrl', function($scope) {
    $scope.pageClass = 'page-home';
});
app.controller('AboutCtrl', function($scope) {
    $scope.pageClass = 'page-about';
});

app.controller('contactCtrl', function($scope) {
    $scope.pageClass = 'page-contact';
});
app.controller('ServiceCtrl', function($scope) {
    $scope.pageClass = 'page-contact';
});