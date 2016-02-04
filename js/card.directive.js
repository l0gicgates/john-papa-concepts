angular.module("masteringAngularJsDirectives.widgets.card")
.directive('card', cardFn);

function cardFn(){
	var directive = {
		restrict: 'EA',
		templateUrl: 'templates/card-widget.html',
		scope: {
			data:'='
		},
		controller: CardCntrl,
		controllerAs: 'vm',
		bindToController: true
	};

	return directive;

}

function CardCntrl () {
	var vm = this;
	console.log("cardCntlrl was called");
}
