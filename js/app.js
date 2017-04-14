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
        .when("/events/:eventId", {
            templateUrl: "views/events.html",
            controller: 'EventsCtrl'
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

       $scope.Events=[
            {
                Title:'Decode Future',
                subTitile:'A career guidance initiative from ImpairBit.',
                TitleStyle:{
                        "width": "90%",
                        "color": "rgb(255, 255, 255)",
                        "text-shadow": "rgb(0, 0, 0) 2px 2px 1px",
                        "background": "rgba(0,0,0,0.5)",
                        "margin": "auto",
                        "margin-top": "70px"
                },
                Description:'Want to become an IT professionl before landing on your first job, then this opportunity is for you. Get Enrolled before its too late!!',
                DescStyle:{
                    "color": "#ffffff",
                    "text-shadow": "#000000 2px 2px 1px"
                },
                buttonTxt:'Know More',
                ButtonStyle:{
                    "margin-top": "10px",
                    "background": "#ffffff",
                    "width": "100px",
                    "height": "35px",
                    "border": "#ffffff",
                    "border-radius": "10px",
                    "cursor":"pointer"
                },
                Image:'assets/img/decode_future.jpg',
                href:'decode_future',
                tab:'_blank'
            },
            {
                Title:'ABC',
                subTitile:'way to learn coding',
                TitleStyle:{
                    "color": "#ffffff",
                    "text-shadow": "#000000 2px 2px 1px"
                },
                Description:'ABCD EFG HIJK LMNOP LMNOPQRST UVWXYZ',
                TitleStyle:{
                    "color": "#ffffff",
                    "text-shadow": "#000000 2px 2px 1px"
                },
                buttonTxt:'Explore',
                Image:'',
                href:'events',
                tab:'_blank'
            }
    ];

    $rootScope.getEvents=function(index){
        return $scope.Events[index];
    }

});
app.controller('HomeCtrl', function($scope,$rootScope,$interval,$location) {
    $rootScope.setactive(1);
    $rootScope.setPageTitle("Home");
    
    $scope.currEvent=0;
    $scope.currentEvent=$rootScope.getEvents($scope.currEvent);

    // $interval(function(){
    //     $scope.currEvent++;
    //     $scope.currEvent=($scope.currEvent>=$scope.Events.length)?0:$scope.currEvent;
    //     $scope.currentEvent=$scope.Events[$scope.currEvent];
    // },5000);

    $scope.onEventClicked=function(path){
        // $location.path(path)
        console.log($location.absUrl());
        // window.open($location.absUrl()+path+$scope.currEvent);
        window.open('/'+path+'.html');
    }

});
app.controller('AboutCtrl', function($scope,$rootScope) {
    $rootScope.setactive(2);
    $rootScope.setPageTitle("About us");
});

app.controller('EventsCtrl', function($scope,$rootScope,$routeParams) {

    console.log('param',$routeParams);
    $scope.Event=$rootScope.getEvents($routeParams.eventId);
    console.log('Event',$scope.Event);
    $rootScope.setPageTitle("");
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

