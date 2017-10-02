

(function(angular) {
    'use strict';

    angular.module('ngRouteExample', ['ngRoute'])

    .controller('MainController', function($scope, $route, $routeParams, $location) {
        $scope.$route = $route;
        $scope.$location = $location;
        $scope.$routeParams = $routeParams;
    })

    // First level
    // .controller('MainCtrl', ['$scope', '$route', '$location', function($scope, $route, $location) {

    .controller('firstCtrl', ['$scope', '$routeParams', '$location', function($scope, $routeParams, $location) {

        // items
        $scope.items = {
            item1: {
                name: 'Brazil Nuts',
                description: 'Edible nut from Amazon region',
                address: '123 4th Street'
            },
            item2: {
                name: 'Wallnuts',
                description: 'The best nut',
                address: '234 Walnut Street'
            }
        };

        // Delicato.ca CONTENT
        $scope.siteInfo = {
            name: 'Delicato.ca'
        };

        // $scope.names = ["Emil", "Tobias", "Linus"];

        // KEYWORDS
        // lunch special hamburgers pizza salads sushi american italian pasta mexican
        // mediterranean turkish greek asian chineese thai indian japanese soups subs
        // seafood grill diner breakfast deli bagels coffee tea smoothies juices dessert
        // healthy vegetarian vegan gluten free
        $scope.keywords = 'lunch special,hamburgers,pizza,salads,sushi,american,italian,pasta,mexican,mediterranean,turkish,greek,asian,chineese,thai,indian,japanese,soups,subs,seafood,grill,diner,breakfast,deli,bagels,coffee,tea,smoothies,juices,dessert,healthy,vegetarian,vegan,gluten-free';

        $scope.food = [{
            name: 'Pizza Pazza',
            imageSM: 'pizza_pazza.png',
            imageLG: 'pizza_pazza.png',
            phone:'718-555-1276',
            minimum: '$10.00',
            fee: '$2.00',
            priceRance: '$$$',
            address: {
                address1: '30-30 30 Street',
                address2: '',
                city: 'Astoria',
                zipcode: '11106'},
            hours: [
                { day: "sun", dayHours: "11am to 12pm" },
                { day: "mon", dayHours: "11am to 12pm" },
                { day: "tue", dayHours: "11am to 12pm" },
                { day: "wed", dayHours: "11am to 12pm" },
                { day: "thu", dayHours: "11am to 12pm" },
                { day: "fri", dayHours: "11am to 12pm" },
                { day: "sat", dayHours: "11am to 12pm" }],
            keywords: 'all dessert soups coffee tea gluten-free salads pasta',
            menu: {}
        },
        {
            name: 'Linos Pizza & Pasta',
            imageSM: 'pizza_selvagem.jpg',
            imageLG: 'pizza_selvagem.jpg',
            phone:'718-555-5643',
            minimum: '$15.00',
            fee: 'free',
            priceRance: '$',
            address: {
                address1: '1234 55 Street',
                address2:', Queens Mall',
                city: 'Flushing',
                zipcode: '13375'},
            hours: [
                { day: "sun", dayHours: "9am to 6pm" },
                { day: "mon", dayHours: "8am to 10pm" },
                { day: "tue", dayHours: "8am to 10pm" },
                { day: "wed", dayHours: "8am to 10pm" },
                { day: "thu", dayHours: "8am to 10pm" },
                { day: "fri", dayHours: "8am to 12pm" },
                { day: "sat", dayHours: "8am to 12pm" }],
            keywords: 'all dessert soups coffee tea salads pasta'
        },
        {
            name:'Soup and Salad',
            imageSM: 'Salad_Cabrera.jpg',
            imageLG: 'Salad_Cabrera.jpg',
            phone:'800-SUPSALAD',
            minimum: '$10.00',
            fee: 'free',
            priceRance: '$$$',
            address: {
                address1: '110-30 48 Street',
                address2: '',
                city: 'Woodside',
                zipcode: '11309'},
            hours: [
                { day: "sun", dayHours: "11am to 12pm" },
                { day: "mon", dayHours: "11am to 12pm" },
                { day: "tue", dayHours: "11am to 12pm" },
                { day: "wed", dayHours: "11am to 12pm" },
                { day: "thu", dayHours: "11am to 12pm" },
                { day: "fri", dayHours: "11am to 12pm" },
                { day: "sat", dayHours: "11am to 12pm" }],
            keywords: 'all salad'
        },
        {
            name:'Mike Burger',
            imageSM: 'Mike_Burger.jpg',
            imageLG: 'Mike_Burger.jpg',
            phone:'718-555-4321',
            minimum: '$8.00',
            fee: 'free',
            priceRance: '$$$',
            address: {
                address1: '110-30 48 Street',
                address2: '',
                city: 'Woodside',
                zipcode: '11309'},
            hours: [
                { day: "sun", dayHours: "10am to 12pm" },
                { day: "mon", dayHours: "6am to 12pm" },
                { day: "tue", dayHours: "6am to 12pm" },
                { day: "wed", dayHours: "6am to 12pm" },
                { day: "thu", dayHours: "6am to 12pm" },
                { day: "fri", dayHours: "6am to 12pm" },
                { day: "sat", dayHours: "10am to 12pm" }],
            keywords: 'all hamburgers lunch special smoothies juices dessert soups'
        },
        {
            name:'Adam Soups',
            imageSM: 'Adam_Soups.jpg',
            imageLG: 'Adam_Soups.jpg',
            phone:'718-555-5678',
            minimum: '$10.00',
            fee: 'free',
            priceRance: '$$',
            address: {
                address1: '110-30 48 Street',
                address2: '',
                city: 'Woodside',
                zipcode: '11309'},
            hours: [
                { day: "sun", dayHours: "Closed" },
                { day: "mon", dayHours: "11am to 12pm" },
                { day: "tue", dayHours: "11am to 12pm" },
                { day: "wed", dayHours: "11am to 12pm" },
                { day: "thu", dayHours: "11am to 12pm" },
                { day: "fri", dayHours: "11am to 12pm" },
                { day: "sat", dayHours: "Closed" }],
            keywords: 'all soups bagels coffee tea vegetarian vegan'
        },
        {
            name:'Julie Deli',
            imageSM: 'Julie_Deli.jpg',
            imageLG: 'Julie_Deli.jpg',
            phone:'718-555-8765',
            minimum: '$10.00',
            fee: '$2.00',
            priceRance: '$$$',
            address: {
                address1: '110-30 48 Street',
                address2: '1C',
                city: 'Flushing',
                zipcode: '11300'},
            hours: [
                { day: "sun", dayHours: "8am to 12pm" },
                { day: "mon", dayHours: "8am to 12pm" },
                { day: "tue", dayHours: "8am to 12pm" },
                { day: "wed", dayHours: "8am to 12pm" },
                { day: "thu", dayHours: "8am to 12pm" },
                { day: "fri", dayHours: "8am to 12pm" },
                { day: "sat", dayHours: "8am to 12pm" }],
            keywords: 'all deli soups subs pizza juices dessert coffee tea bagels'
        },
        {
            name:'Dont-Skip Dinner',
            imageSM: 'Juliette_Breakfast.jpg',
            imageLG: 'Juliette_Breakfast.jpg',
            phone:'718-555-5678',
            minimum: '$10.00',
            fee: 'free',
            priceRance: '$$$$',
            address: {
                address1: '15-30 48 Street',
                address2: '5th Fl',
                city: 'Jamaica',
                zipcode: '13076'
            },
            hours: [
                { day: "sun", dayHours: "10am to 10pm" },
                { day: "mon", dayHours: "Sorry we are closed" },
                { day: "tue", dayHours: "10am to 10pm" },
                { day: "wed", dayHours: "10am to 10pm" },
                { day: "thu", dayHours: "10am to 10pm" },
                { day: "fri", dayHours: "10am to 10pm" },
                { day: "sat", dayHours: "10am to 10pm" }],
            keywords: 'all lunch special hamburgers salads american italian pasta mexican mediterranean turkish greek asian chineese thai soups subs seafood grill diner breakfast deli bagels coffee tea smoothies juices dessert healthy vegetarian vegan gluten-free'
        }];

        // TODAY
        $scope.CurrentDate = new Date();

        $scope.params = $routeParams;
        $scope.currentItem = $routeParams.itemID;
    }])

        // URL Related Classes

        // $scope.mainClass = function () {
        //      var active = $route.current.templateUrl;
        //      return active;
        // };

        // NAV HIGHLIGHT

        // $scope.isActive = function (viewLocation) {
        //      var active = (viewLocation === $location.path());
        //      return active;
        // };

        // ------------------------------------------------------

        // var currentItemVar = $scope.currentItem;
        // alert (currentItemVar);


        // $scope.test = $routeParams.test;
        // console.log(currentItem);

        // $scope.slug = $routeParams.slug;


        // var log = [];
        // angular.forEach(values, function(value, key) {
        //   this.push(key + ': ' + value);
        // }, log);


    // DIRECTIVES
    .directive('myDirective', function($timeout) {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                scope.promoHeight = element.prop('offsetHeight');
                console.log($scope.promoHeight);
            }
        };
    })
    // .directive('weekDayDirective', function($timeout) {
    //     return {
    //         restrict: 'A',
    //         link: console.log("weekDay");
    //             var d = new Date();
    //             var n = d.getDay();
    //                 // if (x == 0){
    //                 //    return "mark";
    //                 // }
    //     };
    // })



    // SECOND LEVEL
    .controller('secondCtrl', function($scope, $routeParams) {
        $scope.params = $routeParams;
    })

    // RUN ROOT
    .run(['$rootScope', function ($rootScope) {
        $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
            // window.scrollTo(0, 0);
            // $rootScope.title = current.$$route.title;
            // $rootScope.teamTitle = current.$$route.action;
            // $rootScope.description = current.$$route.description.currentProfile;
            // $rootScope.keywords = current.$$route.keywords;
            // $rootScope.canonical = current.$$route.canonical;
            // $rootScope.robots = current.$$route.robots;
        });
    }])

    // ROUTER CONFIG
    .config(function($routeProvider, $locationProvider) {
        $routeProvider
        .when('/', {
            templateUrl: 'home.html',
            controller: 'firstCtrl'
        })
        .when('/home/:itemID', {
            templateUrl: 'home.html',
            controller: 'firstCtrl',
        })
        .when('/menu/:itemID', {
            templateUrl: 'menu.html',
            controller: 'firstCtrl',
            resolve: {
                // delay: function($q, $timeout) {
                //     var delay = $q.defer();
                //     $timeout(delay.resolve, 100);
                //     return delay.promise;
                // }
            }
        })
        .when('/itemsPage/:itemID/ch/:chapterId', {
            templateUrl: 'chapter.html',
            controller: 'secondCtrl'
        });

        $locationProvider.html5Mode(true).hashPrefix('!');
    });
})(window.angular);




/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license

Original code source: https://docs.angularjs.org/api/ngRoute/service/$route
hashPrefix added
*/















