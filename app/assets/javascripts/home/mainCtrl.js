KnoWhere.controller('MainCtrl', [
  '$scope',
  'jobs',
  function($scope, jobs){

    $scope.jobs = jobs.jobs;

    $scope.incrementPriority = function(job) {
      jobs.upPriority(job);
    };

    $scope.addJob = function(){
      if($scope.title === '' || $scope.company === '' || $scope.location === '' || $scope.found === '') {
         return;
      }
      jobs.create({
        title: $scope.title,
        company: $scope.company,
        location: $scope.location,
        found: $scope.found
      });
      $scope.title = '';
      $scope.company = '';
      $scope.location = '';
      $scope.found = '';
    };
  }
]);
