(function(){
	'use strict';
	angular.module('MenuApp')
	.component('menuItems',{
		templateUrl:'src/menulist/templates/items.template.html',
		bindings:{
			menuItem:'<'
		}
	});
})();
