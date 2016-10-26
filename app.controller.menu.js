angular.module('CakeApp')
	.controller('MenuController', MenuController)

MenuController.$inject = ['CheesecakeFactory']

function MenuController(CheesecakeFactory) {
    console.info('MenuController:CheesecakeFactory', CheesecakeFactory)

    var Menu = this

    Menu.title = 'Awesome Cheesecake'
    Menu.search = '' 

    
    Menu.items = CheesecakeFactory.menuItems

    

    Menu.lowCalories = function(item) {
        return item.calories < 2000
    }
}
	
