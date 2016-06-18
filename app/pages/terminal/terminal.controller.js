var terminalCtrl = function ($state, stringBankService, $stateParams) {
  var vm = this;

  $(function(){
      $(".terminal-title").typed({
        strings: stringBankService.getStrings($stateParams.slide) ,
        typeSpeed: 0,
        backKeyCode: 32,
        contentType: 'html'
      });
  });

  $(document)
    .off('keydown')
    .on('keydown', function(e) {
      if(e.keyCode === 39) {
        $state.transitionTo('images');
      }
    })
}

angular
  .module('app')
  .controller('terminalCtrl', terminalCtrl);
