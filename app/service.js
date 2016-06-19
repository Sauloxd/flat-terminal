var stringBankService = function () {

  const STRINGS = {
    1: [
      '$ Operational Systems',
      'Process scheduling',
      [
        'Adriano Valente',
        'Cesar Faustino',
        'Pedro Strabelli',
        'Saulo Furuta'
      ].join('<br>')
    ],

    3: ['Bye!\\n']

  }

  this.getStrings = function(slide) {
    return STRINGS[slide] || ['404', 'Ups! I didn\'t find this slide']
  }
}

var imagesBankService = function() {

  const IMAGE_NOT_FOUND = ''; // TODO: Find a nice 404 image ;)
  const IMAGES = {
    2: '../assets/img/robin-beer.jpg'
  };

  this.getImage = function(slide) {
    return IMAGES[slide] || IMAGE_NOT_FOUND
  }

}

var slidesService = function() {

  const slides = [
    { controller: 'terminal', params: { slide: 1 } },
    { controller: 'images',   params: { slide: 2 } },
    { controller: 'terminal', params: { slide: 3 } },
    { controller: 'terminal', params: { slide: 4 } },
  ]

  this.getNextSlide = function(currentSlide) {
    return slides[currentSlide]
  }

  this.getPreviousSlide = function(currentSlide) {
    return slides[currentSlide - 2] || slides[currentSlide - 1]
  }

}

angular
  .module('app')
  .service('slidesService', slidesService);


angular
  .module('app')
  .service('stringBankService', stringBankService);

angular
  .module('app')
  .service('imagesBankService', imagesBankService);
