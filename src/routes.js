(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
  
  .state('home', {
    url: '/',
    templateUrl: 'src/menulist/templates/home.template.html'
  })

  .state('categories',{
  	 url:'/categories',
  	 templateUrl: 'src/menulist/templates/main-categories.template.html',
  	 controller:'MenuCategoriesController as menuCategories',
  	 resolve: {
      categories: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
     }
  })

  .state('items', {
      url:'/items/{category}',
      templateUrl:'src/menulist/templates/menu-items.template.html',
      controller:'CategoryItemController as catItems',
      resolve:{
        menuItems: ['$stateParams','MenuDataService' , function($stateParams,MenuDataService){
                return MenuDataService.getItemsForCategory($stateParams.category);
        }]
      }
   });
}

})();
