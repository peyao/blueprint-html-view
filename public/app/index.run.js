(function() {
  'use strict';

  angular
    .module('blueprintHtmlView')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
