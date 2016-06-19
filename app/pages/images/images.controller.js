var imgCtrl = function ($state, slidesService, $stateParams) {
  var vm = this;
  const CURRENT_SLIDE = $stateParams.slide;
  const NEXT_SLIDE = slidesService.getNextSlide(CURRENT_SLIDE);
  const PREVIOUS_SLIDE = slidesService.getPreviousSlide(CURRENT_SLIDE);

  $(document)
    .off('keydown')
    .on('keydown', function(e) {
      if(e.keyCode === 37) {
        $state.transitionTo(NEXT_SLIDE.controller, NEXT_SLIDE.params);
      }
    })
}

angular
  .module('app')
  .controller('imgCtrl', imgCtrl);
