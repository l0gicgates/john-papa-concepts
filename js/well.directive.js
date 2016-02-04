// angular.module("masteringAngularJsDirectives.widgets")
// .directive('well', function() {
//     return {
//         restrict: 'E',
//         scope: {
//             data: '='
//         },
//         templateUrl:'templates/table-widget.html'
//     }

// });


(function(){
	angular.module("masteringAngularJsDirectives.widgets")
	    .directive('well', wellFn);

	function wellFn() {
	    var directive = {
	        restrict: 'EA',
	        templateUrl:'templates/table-widget.html',
	        scope: {
	            'data': '=',
	            'close': '&onClose'
	        },
	        transclude: true,
	        controller: ExampleController,
	        controllerAs: 'vm',
	        bindToController: true
	    };

	    return directive;
	}

	function ExampleController() {
	    var vm = this;
	    vm.min = 1;
	    console.log('CTRL: vm.min = %s', vm.min);
	    console.log('CTRL: vm.max = %s', vm.max);
	    vm.clickRow = function () {
	    	console.log("I have been clicked");
	    }
	}
})();
