'use strict';


//Component modules



import angular from 'angular';

const m = angular.module('demoProject.home.controller', []);

m.controller('HomeCtrl', ['$scope', function($scope) {
        $scope.controller1 = 'This text is from a controller!';
    }
]);