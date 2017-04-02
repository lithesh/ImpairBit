var app = angular.module("myApp", ["ngRoute","ngAnimate","ngScrollbar"]);
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
        .when("/products", {
            templateUrl: "views/products.html",
            controller: 'productCtrl'
        })
        // .otherwise({ redirectTo: '/home' });
        .otherwise({  template: "Page Not found" });
        }
  ]);

app.controller('MainCtrl', function($scope,$rootScope,$location,$anchorScroll) {
    $scope.pageClass = 'page-home';
    $scope.isActive=1;
    $scope.isOpen=false;
    $scope.pageTitle="Home"
    
    $rootScope.setactive=function(page){
        $scope.isActive=page;
    }

    $rootScope.setPageTitle=function(title){
        $scope.pageTitle=title;
    }

});
app.controller('HomeCtrl', function($scope,$rootScope) {
    $rootScope.setactive(1);
    $rootScope.setPageTitle("Home");
});
app.controller('AboutCtrl', function($scope,$rootScope) {
    $rootScope.setactive(2);
    $rootScope.setPageTitle("About us");
});


app.controller('ServiceCtrl', function($scope,$rootScope) {
    $rootScope.setactive(3);
    $rootScope.setPageTitle("Services");
});
app.controller('productCtrl', function($scope,$rootScope) {
    $rootScope.setactive(4);
    $rootScope.setPageTitle("Products");
});
app.controller('contactCtrl', function($scope,$rootScope, $window) {
    $rootScope.setactive(5);
    $rootScope.setPageTitle("Contact us");

     $scope.initMap=function() {
        var office = {lat: 13.0906444, lng: 80.2685029};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 20,
          center: office
        });
        var marker = new google.maps.Marker({
          position: office,
          map: map,
          title: 'ImpairBit Software Solutions'
        });

        marker.addListener('click', function() {
            infowindow.open(map, marker);
        });

        var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<div><strong>ImpairBit Software Solutions</strong></div>'+
            '<div id="bodyContent">'+
            '<p>144, Choolai High Road, Choolai, Chennai - 600012</p>'+
            '<p>Website: <a href="http://www.impairbit.com">www.impairbit.com</a></p>'+
            '</div>'+
            '</div>';

        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });

        infowindow.open(map, marker);

        var currCenter = map.getCenter();
        google.maps.event.addDomListener(window, 'resize', function() {
            //Set Center
            map.setCenter(office);
        });
      }
     $scope.initMap();
});

