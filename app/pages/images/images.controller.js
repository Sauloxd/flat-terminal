var imgCtrl = function ($state, slidesService, imagesBankService, $stateParams) {
  var vm = this;
  const CURRENT_SLIDE = $stateParams.slide;
  const NEXT_SLIDE = slidesService.getNextSlide(CURRENT_SLIDE);
  const PREVIOUS_SLIDE = slidesService.getPreviousSlide(CURRENT_SLIDE);

  $('.img--container').css(
    'background-image',
    ['url(', ')'].join(imagesBankService.getImage(CURRENT_SLIDE))
  );

  $(document)
    .off('keydown')
    .on('keydown', function(e) {
      if(e.keyCode === 37) {
        $state.transitionTo(PREVIOUS_SLIDE.controller, PREVIOUS_SLIDE.params)
      } else if(e.keyCode === 39) {
        $state.transitionTo(NEXT_SLIDE.controller, NEXT_SLIDE.params)
      }
    })
}

angular
  .module('app')
  .controller('imgCtrl', imgCtrl);
