(function(){
	'use strict';
	angular.module('data')
	.service('MenuDataService', MenuDataService);

    MenuDataService.$inject = ['$http'];
	function MenuDataService( $http ){
		var service = this;
         service.items = [];
         service.categories = [];
		service.getAllCategories = function(){
            var cats = $http({
	            method:'GET',
	            url:'https://davids-restaurant.herokuapp.com/categories.json'
            });
            cats.then(function(response){
               angular.forEach(response.data, function(category){
                    this.push(category);
               },service.categories);
            });
            return service.categories;
		};


		service.getItemsForCategory = function(categoryShortName){
             var menuItems = $http({
             	 method:'GET',
             	 url:'https://davids-restaurant.herokuapp.com/menu_items.json?category=',
                 params:{
             	 category: categoryShortName
             }
             });
             menuItems.then(function(response){
							 return response.data;
             }).catch(function (error) {
                console.log(error);
            });
             return menuItems;
		};
	}

})();
