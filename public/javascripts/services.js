/**
 * Created by DELL on 23/08/2015.
 */
angular.module('Services', ['ngResource']).
    factory('svc', function($resource) {
        return $resource('polls/:pollId', {}, {

            query: { method: 'GET', params: { pollId: 'polls' }, isArray: true }
        })
    })