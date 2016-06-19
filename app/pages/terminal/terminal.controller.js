var terminalCtrl = function ($state, stringBankService, slidesService, $stateParams) {
  var vm = this;
  const CURRENT_SLIDE = $stateParams.slide;
  const NEXT_SLIDE = slidesService.getNextSlide(CURRENT_SLIDE);
  const PREVIOUS_SLIDE = slidesService.getPreviousSlide(CURRENT_SLIDE);

  $(function(){
      $(".terminal-title").typed({
        strings: stringBankService.getStrings(CURRENT_SLIDE) ,
        typeSpeed: 0,
        backKeyCode: 32,
        contentType: 'html'
      });
  });

  $(document)
    .off('keydown')
    .on('keydown', function(e) {
      if(e.keyCode === 39) {
        $state.transitionTo(NEXT_SLIDE.controller, NEXT_SLIDE.params);
      }
    })
}

angular
  .module('app')
  .controller('terminalCtrl', terminalCtrl);
