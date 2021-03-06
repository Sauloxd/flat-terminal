angular
  .module('app')
  .config(function($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/terminal/1");
  //
  // Now set up the states
  $stateProvider
    .state('terminal', {
      url: "/terminal/:slide",
      templateUrl: "pages/terminal/terminal.html",
      controller: terminalCtrl,
      controllerAs: 'termVm',
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
            return $ocLazyLoad.load([
                {
                    serie: true,
                    name: 'testscript',
                    files: ['plugins/typed.js']
                }
            ]);
        }
      }
    })
    .state('images', {
      url: "/images/:slide",
      templateUrl: "pages/images/images.html",
      controller: imgCtrl,
      controllerAs: 'imgVm'
    })
    ;

});
