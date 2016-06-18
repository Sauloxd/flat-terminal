angular
  .module('app')
  .config(function($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/terminal");
  //
  // Now set up the states
  $stateProvider
    .state('terminal', {
      url: "/terminal",
      templateUrl: "pages/terminal/terminal.html",
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
            return $ocLazyLoad.load([
                {
                    serie: true,
                    name: 'testscript',
                    files: ['pages/terminal/myscript.js']
                }
            ]);
        }
    }
    });

});