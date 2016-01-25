'use strict'

angular.module('pdaApp')
  .controller('PageCreateCtrl', function($scope) {
    $scope.subscribe('pages');

    $scope.save = function() {
      if ($scope.form.$valid) {
        Pages.insert($scope.newPage);
        $scope.newPage = undefined;
        // TO DO redirect to view edit
      }
    };
  });
