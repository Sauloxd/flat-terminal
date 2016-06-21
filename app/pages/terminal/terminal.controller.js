var terminalCtrl = function ($state, stringBankService, slidesService, $stateParams) {
  var vm = this;
  const CURRENT_SLIDE = $stateParams.slide;
  const NEXT_SLIDE = slidesService.getNextSlide(CURRENT_SLIDE);
  const PREVIOUS_SLIDE = slidesService.getPreviousSlide(CURRENT_SLIDE);

  $(function(){
      $(".terminal-title").typed({
        strings: stringBankService.getStrings(CURRENT_SLIDE) ,
        typeSpeed: 0,
        backKeyCode: 32, // space keyCode
        contentType: 'html'
      });
  });

  $(document)
    .off('keydown')
    .on('keydown', function(e) {
      if(e.keyCode === 37) {
        $state.transitionTo(PREVIOUS_SLIDE.controller, PREVIOUS_SLIDE.params)
      } else if(e.keyCode === 39) {
        $state.transitionTo(NEXT_SLIDE.controller, NEXT_SLIDE.params)
      }
    })

    //TODO: refactor this shit
    var screen_width_bkg = document.getElementsByClassName("computerscreen--container")[0].offsetWidth;
    var screen_heigh_bkg = document.getElementsByClassName("computerscreen--container")[0].offsetHeight;
    document.getElementsByClassName("left")[0].style.width = (document.body.offsetWidth - screen_width_bkg)/2 + "px";
    document.getElementsByClassName("left")[0].style.height = screen_heigh_bkg + "px";
    document.getElementsByClassName("right")[1].style.width = (document.body.offsetWidth - screen_width_bkg)/2 + "px";
    document.getElementsByClassName("right")[1].style.height = screen_heigh_bkg + "px";

    var screen_width_computerscreen = document.getElementsByClassName("computerscreen--area")[0].offsetWidth;
    document.getElementsByClassName("left")[1].style.width = (screen_width_bkg - screen_width_computerscreen)/2 + "px";
    console.log(screen_width_bkg - screen_width_computerscreen);
    document.getElementsByClassName("right")[0].style.width = (screen_width_bkg - screen_width_computerscreen)/2 + "px";


}

angular
  .module('app')
  .controller('terminalCtrl', terminalCtrl);
