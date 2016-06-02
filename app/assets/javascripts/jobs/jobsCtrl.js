KnoWhere.controller('jobsCtrl', [
  '$scope',
  '$stateParams',
  'jobs',
  'job',
  function($scope, $stateParams, jobs, job){
    $scope.job = job;

    $scope.addAppointment = function(){
      if($scope.body === '') { return; }
      jobs.addAppointment({
        time: $scope.time,
        location: $scope.location,
        job_id: job.id
      }).success(function(appointment) {
        $scope.job.appointments.push(appointment);
      });
      $scope.body = '';
    };

    $scope.upPriorityAppointment = function(appointment){
      jobs.upPriorityAppointment(job, appointment);
    };
}]);
