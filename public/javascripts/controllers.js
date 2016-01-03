/**
 * Created by DELL on 23/08/2015.
 */
function ListCtrl($scope, svc) {
    $scope.polls = svc.query();
}

function NewCtrl($scope, $location, svc) {


    $scope.poll={

        name:'',
        project:''

    }

    $scope.createNew = function () {
       var poll=$scope.poll;

        var newPoll = new svc(poll);

        newPoll.$save(function(p, resp) {
            if(!p.error) {
                alert('has  been  added');
                $location.path('/');

            } else {
                alert('Could not create ');
            }
        });


    }
}

function ItemCtrl($scope, svc, $routeParams){

    $scope.svc = svc.get({pollId: $routeParams.pollId});

}