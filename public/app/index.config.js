(function() {
  'use strict';

  angular
    .module('blueprintHtmlView')
    .config(config);

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
  }

})();
