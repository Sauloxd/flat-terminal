var terminalCtrl = function ($state) {
  var vm = this;

  $(function(){
      $('.terminal-title').typed({
        strings: [
          '$ Operational Systems',
          'Process scheduling',
          [
            'Adriano Valente',
            'Cesar Faustino',
            'Pedro Strabelli',
            'Saulo Furuta'
          ].join('<br>')
        ],
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
