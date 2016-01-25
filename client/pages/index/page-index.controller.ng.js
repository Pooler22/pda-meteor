'use strict'

angular.module('pdaApp')
  .controller('PageIndexCtrl', function($scope, $reactive) {
    $reactive(this).attach($scope);

    $scope.site = 1;
    $scope.perPage = 10;
    $scope.sort = {
      name_sort: 1
    };
    $scope.orderProperty = '1';

    $scope.helpers({
      pages: () => {
        return Pages.find({}, {
          sort: $scope.getReactively('sort')
        });
      },
      pagesCount: () => {
        return Counts.get('numberOfPages');
      }
    });

    $scope.subscribe('pages', () => {
      return [{
        sort: $scope.getReactively('sort'),
        limit: parseInt($scope.getReactively('perPage')),
        skip: ((parseInt($scope.getReactively('site'))) - 1) * (
          parseInt($scope.getReactively('perPage')))
      }, $scope.getReactively('search')];
    });



    $scope.siteChanged = function(newPage) {
      $scope.site = newPage;
    };

    $scope.startPage = function(page) {
      location.href = '/pages/details/' + page._id;
    };

    $scope.startPage = function(page) {
      location.href = '/pages/edit/' + page._id;
    };

    $scope.removePage = function(page) {
      Pages.remove({
        _id: page._id
      });
    };

    return $scope.$watch('orderProperty', function() {
      if ($scope.orderProperty) {
        $scope.sort = {
          name_sort: parseInt($scope.orderProperty)
        };
      }
    });
  });
