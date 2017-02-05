var app = angular.module("myApp", ["ngRoute","ngAnimate"]);
app.  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $locationProvider.html5Mode({
        enabled: false,
        requireBase: false
        });
       // $locationProvider.hashPrefix('!');
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

app.controller('MainCtrl', function($scope,$rootScope,$location,$anchorScroll) {
    $scope.pageClass = 'page-home';
    $scope.isActive=1;
    $scope.isOpen=false;
    $rootScope.setactive=function(page){
        console.log(page);
        $scope.isActive=page;
    }

});
app.controller('HomeCtrl', function($scope,$rootScope) {
    $rootScope.setactive(1);
});
app.controller('AboutCtrl', function($scope,$rootScope) {
    $rootScope.setactive(2);
});


app.controller('ServiceCtrl', function($scope,$rootScope) {
    $rootScope.setactive(3);
});
app.controller('contactCtrl', function($scope,$rootScope) {
    $rootScope.setactive(4);
});