(function(){
'use strict';



angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
  var toBuyList = this;
  toBuyList.items = ShoppingListCheckOffService.getShoppingList();

  toBuyList.removeItem = function(itemIndex){
    ShoppingListCheckOffService.removeItem(itemIndex);
  };

  toBuyList.checkEmpty = function(){
    if (toBuyList.items.length == 0){
      return true;
    } else {
      return false;
    }
  }
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
  var boughtList = this;
  boughtList.items = ShoppingListCheckOffService.getBoughtList();

  boughtList.checkEmpty = function(){
    if (boughtList.items.length == 0){
      return true;
    } else {
      return false;
    }
  }

}

function ShoppingListCheckOffService(){
  var service = this;
  service.boughtListEmpty = true;
  service.shoppingListEmpty = false;

  var shoppingList = [
    {
      name: "Milk",
      quantity: "2"
    },
    {
      name: "Cake",
      quantity: "5"
    },
    {
      name: "Cookies",
      quantity: "7"
    },
    {
      name: "Chips",
      quantity: "6"
    },
    {
      name: "Chocolate",
      quantity: "1"
    }
  ];

  var boughtList = [];

  service.getShoppingList = function(){
    return shoppingList;
  }

  service.getBoughtList = function(){
    return boughtList;
  }

  service.removeItem = function(itemIndex){
    var item = shoppingList[itemIndex];

    boughtList.push(item);

    shoppingList.splice(itemIndex, 1);
  }
}

})();
