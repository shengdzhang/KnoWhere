KnoWhere.factory('jobs', ['$http', function($http){
  var o = {
      jobs: []
    };

    // o.getAll = function() {
    //   return $http.get('/jobs.json').success(function(data){
    //     angular.copy(data, o.jobs);
    //   });
    // };
    //
    // o.create = function(job) {
    //   return $http.job('/jobs.json', job).success(function(data){
    //     o.jobs.push(data);
    //   });
    // };
    //
    // o.upvote = function(job) {
    //   return $http.put('/jobs/' + job.id + '/upvote.json').success(function(data){
    //       job.upvotes += 1;
    //     });
    // };
    //
    // o.get = function(id) {
    //   return $http.get('/jobs/' + id + '.json').then(function(res){
    //     return res.data;
    //   });
    // };
    //
    // o.addComment = function(id, comment) {
    //   return $http.job('/jobs/' + id + '/comments.json', comment);
    // };
    //
    // o.upvoteComment = function(job, comment) {
    //   return $http.put('/jobs/' + job.id + '/comments/'+ comment.id + '/upvote.json')
    //     .success(function(data){
    //       comment.upvotes += 1;
    //     });
    // };
    return o;
}])
