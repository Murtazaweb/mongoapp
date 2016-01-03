/**
 * Created by DELL on 23/08/2015.
 */
angular.module('appmodule', ['Services']).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/', { templateUrl: 'partials/list.html', controller: ListCtrl }).
            when('/poll/:pollId', { templateUrl: 'partials/item.html', controller: ItemCtrl }).
            when('/new', { templateUrl: 'partials/new.html', controller: NewCtrl }).
            // If invalid route, just redirect to the main list view
            otherwise({ redirectTo: '/' });
    }]);