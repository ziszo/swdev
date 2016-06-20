	
	app.directive('swdevHeader', function(){
		return {
			restrict: 'E',
			templateUrl: 'templates/swdev-header.html',
			controller: 'HeaderController',
			controllerAs: 'headerCtrl'
		};
	});

	app.directive('swdevBody', function(){
		return {
			restrict: 'E',
			templateUrl: 'templates/swdev-body.html',
			controller: 'BodyController',
			controllerAs: 'bodyCtrl'
		}
	});

	app.directive('bodyBox', function(){
		return {
			restrict: 'E',
			templateUrl: 'templates/body-box.html',
			controller: 'BodyBoxController',
			controllerAs: 'bodyBoxCtrl'
		}
	});

	app.directive('swdevFooter', function(){
		return {
			restrict: 'E',
			templateUrl: 'templates/swdev-footer.html',
			controller: 'FooterController',
			controllerAs: 'footerCtrl'
		}
	});