'use strict';

angular.module('sonacoinc')
  .controller('MainCtrl', function ($scope,$interval) {
    $interval(function(){
      $scope.date = Date.now()
    },1000);
    });
