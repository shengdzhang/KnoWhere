KnoWhere.controller('MainCtrl', [
  '$scope',
  'jobs',
  function($scope, jobs){

    $scope.jobs = jobs.jobs;

    // $scope.incrementUpvotes = function(post) {
    //   posts.upvote(post);
    // };
    //
    // $scope.addPost = function(){
    //   if(!$scope.title || $scope.title === '') {
    //      return;
    //   }
    //   posts.create({
    //     title: $scope.title,
    //     link: $scope.link,
    //   });
    //   $scope.title = '';
    //   $scope.link = '';
    // };
  }
]);
