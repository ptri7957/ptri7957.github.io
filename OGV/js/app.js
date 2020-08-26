// Inject ngAnimate for page animations
var module = angular.module('interludes', ['ngRoute', 'uiGmapgoogle-maps','nemLogging']);

module.config(function($routeProvider, $locationProvider){
    $routeProvider.when('/', {
        controller: 'mainCtrl',
        templateUrl: 'pages/home.html'
    })
    
    .when('/villas', {
        controller: 'mainCtrl',
        templateUrl: 'pages/villas.html'
    })
    /*
    .when('/villas/onebedroom', {
        controller: 'mainCtrl',
        templateUrl: 'pages/onebed.html'
    })
    
    .when('/villas/onebedroomspa', {
        controller: 'mainCtrl',
        templateUrl: 'pages/onebedspa.html'
    })
    
    .when('/villas/twobedroom', {
        controller: 'mainCtrl',
        templateUrl: 'pages/twobed.html'
    })
    
    .when('/villas/twobedroomocean', {
        controller: 'mainCtrl',
        templateUrl: 'pages/twobedocean.html'
    })
    */
    .when('/contact', {
        controller: 'contactCtrl',
        templateUrl: 'pages/contact.html'
    })
    
    .when('/rates', {
        controller: 'mainCtrl',
        templateUrl: 'pages/rates.html'
    })
    
    .when('/booking', {
        controller: 'mainCtrl',
        templateUrl: 'pages/booking.html'
    })
    
    .when('/gallery',{
        controller: 'mainCtrl',
        templateUrl: 'pages/gallery.html'
    })
    
    .when('/gallery/villas', {
        controller: 'mainCtrl',
        templateUrl: 'pages/villa.html'
    })
    
    .when('/gallery/property', {
        controller: 'mainCtrl',
        templateUrl: 'pages/property.html'
    })
    
    .when('/gallery/beaches', {
        controller: 'mainCtrl',
        templateUrl: 'pages/beaches.html'
    })
    
    .otherwise({
        redirectTo: '/'
    });
    
});

module.run(function ($rootScope, $location) {
  $rootScope.$on("$locationChangeStart", function (event, next, current) {
    if (!$location.path().match(/^\/?$/) && !$rootScope.mainVisitedOnce) {
      $rootScope.mainVisitedOnce = true;
    }
      
  });
    
    $rootScope.$on("$routeChangeSuccess", function(event, currentRoute, previousRoute){
        window.scrollTo(0, 0);
    })
});

module.controller('mainCtrl', function($scope, $location){
    $scope.isActive = function(path){
        return path === $location.path();
    }
    
});

module.controller('contactCtrl', function($scope, $location){
    $scope.isActive = function(path){
        return path === $location.path();
    }
    
    $scope.initialize = function() {
        var latlng = new google.maps.LatLng(-35.520822, 150.38158);
        var myOptions = {
            center: latlng,
            zoom: 10
        };
        var map = new google.maps.Map(document.getElementById("map"),
                        myOptions);

        var marker = new google.maps.Marker({
            position: latlng,
            map: map
        });
        
        map.setCenter(latlng);
        
        // Resize stuff...
        google.maps.event.addDomListener(window, "resize", function() {
        var center = map.getCenter();
        google.maps.event.trigger(map, "resize");
        map.setCenter(center); 
});
    }
});