'use strict';

angular.module('BlurAdmin', [
  'ngAnimate',
  'ui.bootstrap',
  'ui.sortable',
  'ui.router',
  'ngTouch',
  'toastr',
  'smart-table',
  "xeditable",
  'ui.slimscroll',
  'ngJsTree',
  'angular-progress-button-styles',

  // We've added the angular-translate
  // library to the app dependencies
  'pascalprecht.translate',

  'BlurAdmin.theme',
  'BlurAdmin.pages'
]);
