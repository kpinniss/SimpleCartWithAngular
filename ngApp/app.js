//main module
var app = angular.module("MyApp",["ui.router", "ngMaterial", "ngResource"]);

//controllers
app.controller("Index", Index);
app.controller("About", About);
app.controller("Shopping", Shopping);

//services
app.service("$main",MainService);

//config
app.config(function ($stateProvider, $httpProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: '/ngApp/templates/home.html',
            controller: Index,
            controllerAs: 'ctrl'  
        })
        .state('about', {
            url: '/about',
            templateUrl: '/ngApp/templates/about.html',
            controller: About,
            controllerAs: 'ctrl'  
        })
        .state('shop', {
            url: '/shop',
            templateUrl: '/ngApp/templates/shop.html',
            controller: Shopping,
            controllerAs: 'ctrl'  
        })
        .state('notFound', {
            url: '/notFound',
            templateUrl: '/ngApp/views/notFound.html'
        });
    $urlRouterProvider.otherwise('/notFound');
    $locationProvider.html5Mode(true);
});
