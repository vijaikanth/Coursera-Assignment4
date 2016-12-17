(function(){
	'use strict';

	angular.module('MenuApp')
	.controller('CategoryItemController', CategoryItemController);

    CategoryItemController.$inject = ['menuItems'];
	function CategoryItemController(menuItems){
     var CatItems = this;
     CatItems.items = menuItems.data;
  }

})();
