var stringBankService = function () {
  var string_1 =
  [
    '$ Operational Systems',
    'Process scheduling',
    [
      'Adriano Valente',
      'Cesar Faustino',
      'Pedro Strabelli',
      'Saulo Furuta'
    ].join('<br>')
  ];

  var string_3 = [
    'Bye!\\n'
  ]

  this.getStrings = function(slide) {
    switch(slide) {
      case '1':
        return string_1;
        break;
      case '3':
        return string_3;
        break;
      default:
        break;
    }
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
