(function(){
'use strict';

angular.module("LunchCheck", [])
.controller("LunchCheckController", LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope){
  $scope.items = "";
  $scope.message = "";
  $scope.arrayOfItems = [];

  $scope.messageStyle = {
    "color": "red"
  }

  $scope.textBoxStyle = {
    "border": ""
  }

  $scope.countItems = function(){
    $scope.arrayOfItems = $scope.items.split(',');
    for (var i = 0; i < $scope.arrayOfItems.length; i++){
      if ($scope.arrayOfItems[i] == "") {
        $scope.arrayOfItems.splice(i, 1);
        i--;
      }
    }
    $scope.count = $scope.arrayOfItems.length;
    $scope.displayMessage();
  }

  $scope.displayMessage = function(){
    if ($scope.arrayOfItems.length == 0){
      $scope.message = "Please enter data first!";
      $scope.messageStyle.color = "red";
      $scope.textBoxStyle.border = "2px solid red";
    } else {
      $scope.messageStyle.color = "green";
      $scope.textBoxStyle.border = "2px solid green";
      if ($scope.arrayOfItems.length <= 3) {
        $scope.message = "Enjoy!";
      } else {
        $scope.message = "Too much!";
      }
    }
  }
}

})();
