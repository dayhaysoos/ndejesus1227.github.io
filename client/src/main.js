'use strict';

// Load component modules

import './components/home';
import './components/about';
import './components/contact';
import './components/table';
import './shared/service';

import angular from 'angular';

const m = angular.module('demoProject', [
    'ui.router', // I'm serving this from a CDN
    'mgcrea.ngStrap',
    'demoProject.table',
    'firebase',
    'mgcrea.ngStrap',
    'ngAnimate'
]);

m.config(['$stateProvider', '$locationProvider', '$urlRouterProvider', ($stateProvider, $locationProvider, $urlRouterProvider) => {

    $locationProvider.html5Mode(true).hashPrefix('!');
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            views: {
                'main@': {
                    templateUrl: 'components/home/home.html'
                }
            }
        })
        .state('about', {
            url: '/about',
            views: {
                'main@': {
                    templateUrl: 'components/about/about.html'
                }
            }
        })
        .state('contact', {
            url: '/contact',
            views: {
                'main@': {
                    templateUrl: 'components/contact/contact.html'
                }
            }
        })
        .state('table', {
            url: '/table',
            controller: 'TableCtrl',
            views: {
                'main@': {
                    templateUrl: 'components/table/table.html'
                }
            }
        })
        .state('modal', {
            url: '/modal',
            views: {
                'main@': {
                    templateUrl: 'components/modal/modal.html'
                }
            }
        });
}]);