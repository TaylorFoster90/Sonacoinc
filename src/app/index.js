'use strict';

angular.module('sonacoinc', ['ui.router', 'ui.bootstrap'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('contact',{
        url: 'contact',
        templateUrl: '../../components/contact.html',
        controller: 'MainCtrl'
      })
      .state('calculator',{
        url:'/calculator',
        templateUrl: '../../components/calculator/calc.html',
        controller: 'CalculatorCtrl'
      })
      .state('listings',{
        url: '/listings',
        templateUrl: '../../components/listings/listings.html',
        controller: 'ListingsCtrl'
      })
      ;
    $urlRouterProvider.otherwise('/');
  })
;
