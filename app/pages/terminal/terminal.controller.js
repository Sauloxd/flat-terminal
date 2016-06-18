var terminalCtrl = function () {
  var vm = this;

  $(function(){
      $(".terminal-title").typed({
        strings: [
          "$ Operational Systems",
          "Process scheduling"
        ],
        typeSpeed: 0,
        backKeyCode: 32
      });
  });
}

angular
  .module('app')
  .controller('terminalCtrl', terminalCtrl);
