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

  this.getStrings = function(slide) {
    switch(slide) {
      case '1':
        return string_1;
        break;
      default:
        break;
    }
  }
}

angular
  .module('app')
  .service('stringBankService', stringBankService);
