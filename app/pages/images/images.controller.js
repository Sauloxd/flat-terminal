var imgCtrl = function ($state) {
  var vm = this;

  $(document)
    .off('keydown')
    .on('keydown', function(e) {
      if(e.keyCode === 37) {
        $state.transitionTo('terminal');
      }
    })
}

angular
  .module('app')
  .controller('imgCtrl', imgCtrl);
