KnoWhere.factory('jobs', ['$http', function($http){
  var o = {
      jobs: []
    };

    o.getAll = function() {
      return $http.get('/jobs.json').success(function(data){
        angular.copy(data, o.jobs);
      });
    };

    o.create = function(job) {
      return $http.post('/jobs.json', job).success(function(data){
        o.jobs.push(data);
      });
    };

    o.upPriority = function(job) {
      return $http.put('/jobs/' + job.id + '/upriority.json').success(function(data){
          job.priority += 1;
        });
    };

    o.get = function(id) {
      return $http.get('/jobs/' + id + '.json').then(function(res){
        return res.data;
      });
    };

    o.addAppointment = function(appointment) {
      return $http.post('/appointments.json', appointment);
    };

    o.upPriorityAppointment = function(job, appointment) {
      return $http.put('/appointments/'+ appointment.id + '/upriority.json')
        .success(function(data){
          appointment.upvotes += 1;
        });
    };
    return o;
}])
