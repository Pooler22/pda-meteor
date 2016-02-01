angular.module('pdaApp', [
  'angular-meteor',
  'ui.router',
  'ngMaterial',
  'angularUtils.directives.dirPagination',
  'accounts.ui',
  'angular-meteor.auth',
  'ui.codemirror'
]);

onReady = function() {
  angular.bootstrap(document, ['pdaApp']);
};

if (Meteor.isCordova) {
  angular.element(document).on('deviceready', onReady);
} else {
  angular.element(document).ready(onReady);
}
