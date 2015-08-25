'use strict';


const m = angular.module('demoProject.table.controller', []);

m.controller('TableCtrl', ['$scope', '$firebaseArray', '$modal', function ($scope, $firebaseArray, $modal) {
	var movieRef = new Firebase("https://intense-fire-9332.firebaseio.com/movies");
	var movieData = $scope.movieData = $firebaseArray(movieRef);
	
	//add movie to fb array
	$scope.addMovie = function (movie) {
        movieData.$add(movie);
        $scope.movie = {};
    };
	
	//remove movie from fb array
	$scope.removeMovie = function (movie, movieData) {
		$scope.movieData.$remove(movie);

	};

}
]);

m.controller('ShowCtrl', ['$scope', '$firebaseArray', '$modal', function ($scope, $firebaseArray, $modal) {
	var showRef = new Firebase("https://intense-fire-9332.firebaseio.com/shows");
	var showData = $scope.showData = $firebaseArray(showRef);
	
	//add show to fb array
	$scope.addShow = function (show) {
		showData.$add(show);
		$scope.show = {};
		console.log('hi');
	};

	$scope.removeShow = function (show, showData) {
		$scope.showData.$remove(show);
	};
}
]);



  
