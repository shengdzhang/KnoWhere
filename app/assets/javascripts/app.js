var KnoWhere = angular.module('knoWhere', ["ui.router", "templates", 'Devise'])

KnoWhere.config(['$stateProvider','$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'home/_home.html',
        controller: 'MainCtrl',

        resolve: {
          jobPromise: ['jobs', function(jobs){
            return jobs.getAll();
          }]
        }
      })

      .state('jobs', {
        url: '/jobs/{id}',
        templateUrl: 'jobs/_jobs.html',
        controller: 'jobsCtrl',

        resolve: {
          job: ['$stateParams', 'jobs', function($stateParams, jobs) {
            return jobs.get($stateParams.id);
          }]
        }
      })

      .state('login', {
        url: '/login',
        templateUrl: 'auth/_login.html',
        controller: 'AuthCtrl',
        onEnter: ['$state', 'Auth', function($state, Auth) {
          Auth.currentUser().then(function (){
            $state.go('home');
          })
        }]
      })

      .state('register', {
        url: '/register',
        templateUrl: 'auth/_register.html',
        controller: 'AuthCtrl',
        onEnter: ['$state', 'Auth', function($state, Auth) {
          Auth.currentUser().then(function (){
            $state.go('home');
          })
        }]
      });

    $urlRouterProvider.otherwise('home');
}])
