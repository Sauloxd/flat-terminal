var stringBankService = function (STRINGS) {
  this.getStrings = function(slide) {
    return STRINGS[slide] || [ ['404', 'Ups! I didn\'t find this slide'].join('<br>') ]
  }
}

var imagesBankService = function(IMAGES) {
  this.getImage = function(slide) {
    return IMAGES.IMAGE_PATH[slide] || IMAGES.IMAGE_NOT_FOUND
  }
}

var slidesService = function(SLIDES) {

  this.getNextSlide = function(currentSlide) {
    return SLIDES[currentSlide % (SLIDES.length)]
  }

  this.getPreviousSlide = function(currentSlide) {
    return SLIDES[currentSlide - 2] || SLIDES[currentSlide - 1]
  }

}

angular
  .module('app')
  .service('slidesService', slidesService)
  .service('stringBankService', stringBankService)
  .service('imagesBankService', imagesBankService);
