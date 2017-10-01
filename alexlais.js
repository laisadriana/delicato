

(function(angular) {
    'use strict';

    angular.module('ngRouteExample', ['ngRoute', 'ngSanitize'])

    .controller('MainController', function($scope, $route, $routeParams, $location) {
        $scope.$route = $route;
        $scope.$location = $location;
        $scope.$routeParams = $routeParams;
    })

    // First level
    // .controller('MainCtrl', ['$scope', '$route', '$location', function($scope, $route, $location) {

    .controller('firstCtrl', ['$scope', '$routeParams', '$location', function($scope, $routeParams, $location) {

        // alexlais.com CONTENT
        $scope.siteInfo = {
            name: 'portfolio'
        };

        // KEYWORDS
        // lunch special hamburgers pizza salads sushi american italian pasta mexican
        // mediterranean turkish greek asian chineese thai indian japanese soups subs
        // seafood grill diner breakfast deli bagels coffee tea smoothies juices dessert
        // healthy vegetarian vegan gluten free
        $scope.keywords = 'AngularJS,No jQuery,jQuery,HTML5,CSS3,Bootstrap 4,Media Queries,HTML5 Mode,HTML5 Storage,AJAX & JSON,GitHub hosting,Bootstrap 3,Responsive,Google Maps';

        $scope.food = [
        {
            name:'7DayEat.com',
            url: 'http://7DayEat.com',
            employer: 'Freelance Project',
            description: ["<p>Online food delivery project, in progress (menu section is under development).</p>"],
            descriptionList: [
                'AngularJS 1.6 Single Page Application (ngRoute, ngRepeat, ngInclude and own directives)',
                "HTML5 Mode enabled and <a target='_blank' href='https://github.com/7dayeat/dotcom'>Github Hosting<a>",
                'No jQuery, CSS3, HTML5, Bootstrap 4, Google Maps'],
            imageL: ['7DayEat2.png'],
            icon: '7DayEat1.png',
            technologies: ['AngularJS', 'HTML5 Mode', 'GitHub hosting', 'No jQuery', 'Bootstrap 4', 'ngBootstrap', 'ngAnimate', 'ngRepeat', 'HTML5', 'CSS3', 'HTML5 Storage', 'JavaScript', 'Responsive Design', 'Media Queries', 'Photoshop'],
            address: {
                street: '',
                cityState: 'New York, NY'},
            duration: {
                applicable: "notApply",
                date: "Feburary 2017"}
        },
        {
            name: 'LEX International',
            url: 'https://alexlais.github.io/LEX/',
            employer: 'Freelance Project',
            description: [
                '<p>Website design and development for an international law firm.</p>'],
            descriptionList: [
                "AngularJS 1.6 Single Page Application (Ng-route, ng-repeat, ng-include and own directives)",
                "HTML5 Mode enabled and <a target='_blank' href='https://github.com/alexlais/LEX'>Github Hosting<a>",
                "CSS3, HTML5, Bootstrap 3, <a target='_blank' href='https://alexlais.github.io/LEX/contact'>Google Maps</a>"],
            image: ['lex1.png','lex2.png','lex4.png'],
            icon: 'lex1.png',
            technologies: ['AngularJS', 'HTML5 Mode', 'GitHub hosting', 'jQuery', 'Bootstrap 3', 'HTML5', 'CSS3', 'HTML5 Storage', 'JavaScript', 'Responsive Design', 'Media Queries', 'Photoshop'],
            address: {
                street: '',
                cityState: 'Miami, Fl'},
            duration: {
                applicable: "notApply",
                date: "January 2017"}
        },
        {
            name: 'Gurian Law',
            url: 'http://GurianLaw.com',
            employer: 'Freelance Project',
            description: 'Is a South Florida law firm specialized in a wide range of investment issues and property protection matters',
            image: ['gurian2.png', 'gurian3.png'],
            icon: 'gurian1.png',
            technologies: ['jQuery', 'Bootstrap 3', 'HTML5', 'CSS3', 'HTML5 Storage', 'JavaScript', 'Responsive Design', 'Media Queries', 'Photoshop', 'SEO', 'Microdata Schema.org'],
            address: {
                street: '',
                cityState: 'Miami, Fl'},
            duration: {
                applicable: "notApply",
                date: "November 2016"}
        },
        {
            name: 'Medscape.com',
            url: 'http://Medscape.com',
            employer: 'WebMD',
            description: [
                "<p><em>Medscape.com</em> is the top medical resource and reference for physicians today.</p>"],
            descriptionList: [
                "Development of informational and advertisement microsites and popups featured on <em>Medscape.com</em> mobile and desktop versions",
                "Constantly working with designers to arrange requirements for mobile versions of table contents and other issues that can occur with sensitive content in a narrow layout",
                "Working with editors making meticulous content changes and updates",
                "Creating and testing a template to be used for all future projects and improve development time and QA"],
            icon: 'medscape.png',
            image: {
                image: 'notApply'},
            technologies: ['jQuery', 'jQuery Mobile', 'Bootstrap 3', 'HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Media Queries', 'Photoshop'],
            address: {
                street: '825 8th Ave',
                cityState: 'New York, NY'},
            duration: {
                from: '2014',
                to: '2017',
                date: 'notApply'}
        },
        {
            name: 'Daytrana',
            url: 'http://Daytrana.com',
            employer: 'Evoke Health',
            descriptionList: [
                "<p>Evoke Health is a full-service health and wellness digital agency with a heritage of innovation.</p>"],
            descriptionList: [
                "Implementing front-end code CSS3 and HTML5 on .NET MVC framework",
                "Using JQuery.validation for forms and creating highly stylized and mobile ready UI",
                "Making sure legal content updates are done meticulously correct and accessibility is perfect in all required browsers",
                "Converting video files to use HTML5 technology"],
            imageL: ['daytrana.png'],
            icon: 'daytrana.png',
            technologies: ['jQuery', 'HTML5', 'CSS3', 'JavaScript', 'Photoshop'],
            address: {
                street: '101 Avenue of the Americas',
                cityState: 'New York, NY'},
            duration: {                
                applicable: "notApply",
                date: '2013'}
        },
        {
            name: 'Botox Medical',
            url: 'http://hcp.BotoxMedical.com',
            employer: 'Evoke Health',
            descriptionList: [
                "<p>Evoke Health is a full-service health and wellness digital agency with a heritage of innovation.</p>"],
            descriptionList: [
                "Implementing front-end code CSS3 and HTML5 on .NET MVC framework",
                "Using JQuery.validation for forms and creating highly stylized and mobile ready UI",
                "Making sure legal content updates are done meticulously correct and accessibility is perfect in all required browsers",
                "Converting video files to use HTML5 technology"],
            imageL: ['botox.png'],
            icon: 'botox.png',
            technologies: ['jQuery', 'HTML5', 'CSS3', 'JavaScript', 'Photoshop'],
            address: {
                street: '101 Avenue of the Americas',
                cityState: 'New York, NY'},
            duration: {
                from: '2013',
                to: '2013',
                date: 'notApply'}
        },
        {
            name: 'McKinsey & Company',
            url: 'http://www.mckinsey.com/',
            employer: 'McKinsey & Company',
            descriptionList: [
                "<p>Re-factoring codebase of entire domain McKinsey.com</p>"],
            descriptionList: [
                "Re-factoring HTML5, CSS3, JavaScript and JQuery codebase of entire domain (1k + pages)",
                "Created a “CSS & markup style guide” website with live representation of all UI elements used. This also provided excellent support to dev and art teams, ensuring code is kept consistent thruought development. It is a fundamental tool to coordinate testing of mega websites from a development and design stand point",
                "Also launched the microsites for the office locations of <a target='_blank' href='http://www.mckinsey.com/global-locations/asia/japan/en'>Japan</a>, <a target='_blank' href='http://www.mckinsey.com/global-locations/europe-and-middleeast/russia/en'>Russia</a>, <a target='_blank' href='www.mckinsey.com/south-africa/overview'>South Africa</a>, Angola, <a target='_blank' href='http://www.mckinsey.com/nigeria/overview'>Nigeria</a>, Switzerland, <a target='_blank' href='http://www.mckinsey.com/global-locations/europe-and-middleeast/france/en'>France</a> and Spain, and implemented a global solution for foreign languages requirements"],
            image: ['mckinsey2.png','mckinsey1.png'],
            icon: 'mckinsey1.png',
            technologies: ['jQuery', 'HTML5', 'CSS3', 'JavaScript', 'Photoshop'],
            address: {
                street: '825 8th Ave',
                cityState: 'New York, NY'},
            duration: {
                from: '2012',
                to: '2013',
                date: 'notApply'}
        },
        {
            name:'jobs.Boeing.com',
            url: 'https://jobs.boeing.com/',
            employer: 'TMP Worldwide',
            description: [
                "<p>TMP Worldwide is the largest independent firm with focus on recruitment advertising and communications.</p>"],
            descriptionList: [
                "<p><strong>More Work Samples:</strong> <br><a target='_blank' href='https://jobs.nike.com/'>jobs.nike.com</a> <br><a target='_blank' href='https://jobs.citi.com/'>jobs.citi.com</a> <br><a target='_blank' href='https://jobs.scotiabank.com/'>jobs.scotiabank.com</a></p>",
                "<p>At TMP I worked with an integrated product suite called <a target='_blank' href='https://www.tmp.com/talentbrew/'>TalentBrew</a>, a platform that has effectively positioned TMP as pioneers where recruitment strategies and digital media converge.</p>",
                "<p>Semantic and search engine optimized UI development for Job listings websites for large corporate clients</p>",
                "<p>Programming approximatedly 100 projects per year</p>",
                "<p>Utilizing the latest in SEO knowledge for the markup code ensuring maximum ranking on searche result pages</p>",
                "<p>Working with .NET Back-end team for improvements and new implementaions</p>",
                "<p>In conjunction with Back-end team I worked in the implementation of the first JSON feed application, used for the website search</p>"],
            image: ['tmp1.jpg','tmp2.jpg','tmp3.jpg'],
            icon: 'tmp1.jpg',
            technologies: ['jQuery', 'HTML5', 'CSS3', 'JavaScript', 'Photoshop', 'SEO', 'AJAX & JSON'],
            address: {
                street: '125 Broad St',
                cityState: 'New York, NY'},
            duration: {
                from: '2009',
                to: '2012',
                date: 'notApply'}
        },
        {
            name:'Walgreen Careers',
            url: 'https://web.archive.org/web/20100207010911/http://careers.walgreens.com/',
            employer: 'TMP Worldwide',
            description: [
                "<p>TMP Worldwide is the largest independent firm with focus on recruitment advertising and communications.</p>"],
            descriptionList: [
                "Semantic and search engine optimized careers website for Walgreens",
                "Implementation of markup and styles (HTML/CSS) on an .NET Backend MVC environment",
                "Using jQuery for implementation of all dinamic functionality"],
            image: ['walgreens1.png', 'walgreens2.png'],
            icon: 'walgreens1.png',
            technologies: ['jQuery', 'HTML5', 'CSS3', 'JavaScript', 'Photoshop', 'SEO'],
            address: {
                street: '125 Broad St',
                cityState: 'New York, NY'},
            duration: {
                from: '2009',
                to: '2012',
                date: 'notApply'}
        },
        {
            name:'SciMed',
            employer: 'Visual Alchemy / SciMed',
            descriptionList: [
                "Front-end implementation for a pharmaceutical agency, worked in the development of informational applications for Boehringer Ingelheim, MEI and Genentech"],
            imageL: ['BreatheX2.jpg'],
            icon: 'BreatheX1.jpg',
            technologies: ['jQuery', 'HTML5', 'CSS3', 'JavaScript', 'AJAX & JSON', 'Photoshop'],
            address: {
                street: '825 8th Ave',
                cityState: 'New York, NY'},
            duration: {
                from: '2009',
                to: '2009',
                date: 'notApply'}
        },
        {
            name:'Golden Living',
            url: 'http://www.goldenliving.com',
            employer: 'Ruder Finn',
            description: [
                "<p><a href='http://www.ruderfinn.com/'>Ruder Finn</a> is a 40 years old privately held public relations agency with a wide range of PR practices and services and offices around the world.</p>"],
            descriptionList: [
                "Worked at the Interactive 3 team with a Project Manager, Art Director, a back-end Developer and Editors/Legal department",
                "Front-end development for the new generation of Golden Living web sites: GoldenLiving.com, GoldenLivingCenters.com, AegisTherapies.com, 360HealthCareStaffing.com and AseraCare.com",
                "Front-end development for the CMS .NET environment"],
            image: ['gl.jpg', 'glcms.jpg'],
            icon: 'glS.jpg',
            technologies: ['jQuery', 'HTML', 'CSS3', 'JavaScript', 'Photoshop'],
            address: {
                cityState: 'New York, NY'},
            duration: {
                from: '2008',
                to: '2009',
                date: 'notApply'}
        },
        {
            name:'BravoTV',
            url: 'http://www.BravoTV.com',
            employer: 'NBC Network',
            description: [
                "<p>As a Front-end developer at <a href='http://www.BravoTV.com/'>Bravo TV</a>, I was responsible for everything under BravoTV.com domain and worked with a team of a senior back-end Developer (PHP), a Project Manager, the Art Director and 4 Editors.</p>"],
            descriptionList: [
                "HTML and CSS re-factoring and implementation of a global style sheet for all sites under BravoTV.com which improved development and consistency",
                "Fix of several Internet Explorer rendering bugs in production",
                "Used PHP and XML for dart tags, photo galleries and many other applications",
                "Development of over 15 micro-sites: Project Runway Season 5, Flipping Out Season 2, Shear Genius Season 2, Kathy Griffin Season 4, Top Design Season 2, The Rachel Zoe Project Season 1, Inside the Actors Studio Season 2, Date My Ex Season 1, Tabatha’s Salon Takeover Season 1, Million Dollar Listing Season 2, Tim Gunn, and other promotional micro sites like Bravo For Foodies, Mamma Mia – The Movie, Olympics, Back to School, and Influential’s"],
            image: ['bravo1.jpg', 'bravo2.jpg'],
            icon: 'bravoS.jpg',
            technologies: ['jQuery', 'HTML', 'CSS', 'JavaScript', 'PHP', 'Photoshop'],
            address: {
                street: '30 Rockefeller Plaza',
                cityState: 'New York, NY'},
            duration: {
                from: '2008',
                to: '2008',
                date: 'notApply'}
        },
        {
            name: 'Stylish Windows',
            url: 'http://www.StylishWindows.com',
            employer: 'Freelance',
            description: [
                "<p>This is a 12 year old web design and development that is still up without changes.</p>"],
            descriptionList: [
                "PHP codebase for structure includes and emailer form",
                "Front-end development using HTML 1.0 Strict, CSS2, SEO and JavaScript libraries like lightbox"],
            imageL: ['stylishwindows.png'],
            icon: 'stylishwindowsS.png',
            technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Photoshop', 'Flash'],
            address: {
                cityState: 'New York, NY'},
            duration: {
                applicable: "notApply",
                date: "2004"}
        },
        {
            name: 'Terry Lyons',
            url: 'http://www.TerryLyons.com',
            employer: 'Freelance',
            description: [
                "<p>This is a 12 year old web design and development that is still up without changes.</p>"],
            descriptionList: [
                "PHP codebase for structure includes and emailer form",
                "Front-end development using HTML 1.0 Strict, CSS2, SEO and JavaScript libraries like lightbox"],
            image: ['terrylyons1.png', 'terrylyons2.png', 'terrylyons3.png'],
            icon: 'terrylyons1.png',
            technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Photoshop'],
            address: {
                cityState: 'New York, NY'},
            duration: {
                applicable: "notApply",
                date: "2004"}
        }];

        // TODAY
        $scope.CurrentDate = new Date();

        $scope.params = $routeParams;
        $scope.currentItem = $routeParams.itemID;



        $scope.triggerTitle = 'Select Event';
        $scope.triggerEvent = 'x';
        $scope.triggerPeriod = 'Select Period';
        $scope.events = [
            {
                action:'compare', 
                name:'Makes a policy comparison'
            }, 
            {
                action:'purchase', 
                name:'Makes a purchase'
            },
            {
                action:'addToCart', 
                name:'Added a product to the cart'
            }
        ]

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
            templateUrl: 'portfolio.html',
            controller: 'firstCtrl'
        })
        .when('/portfolio', {
            templateUrl: 'portfolio.html',
            controller: 'firstCtrl'
        })
        .when('/portfolio/:itemID', {
            templateUrl: 'portfolio.html',
            controller: 'firstCtrl',
        })
        .when('/portfolio/item/:itemID', {
            templateUrl: 'item.html',
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















