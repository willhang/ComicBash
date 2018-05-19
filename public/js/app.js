var comicBash = angular.module('comicBash', ['appRoutes', 'LandingCtrl', 'NavBarCtrl','ProfileCtrl', 'LoginCtrl','SignupCtrl','Service','Directives', 
'CreateBookCtrl', 'BookInfoCtrl','IssueCtrl','CreateIssueCtrl', 'Persistance', 'SearchResultCtrl']);

comicBash.directive('navbar', function() {
	return {
		restrict:'E',
		templateUrl: '/views/navBar.html'
	};
});