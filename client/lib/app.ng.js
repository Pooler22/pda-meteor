angular.module('pdaApp', [
	'accounts.ui',
	'angular-meteor',
	'angular-meteor.auth',
	'angularUtils.directives.dirPagination',
	'ngMaterial',
	'ui.codemirror',
	'ui.router',
]);

onReady = function() {
	angular.bootstrap(document, ['pdaApp']);
};

if (Meteor.isCordova) {
	angular.element(document).on('deviceready', onReady);
} else {
	angular.element(document).ready(onReady);
}
