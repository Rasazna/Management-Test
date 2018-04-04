(function (){
  'use strict'

  angular.module('LunchSetter', [])
  .controller('LunchChecker', LunchChecker);
  LunchChecker.$inject=['$scope'];
  function LunchChecker($scope){
    $scope.response='';
    $scope.dishes='';
    $scope.ItemsCount=function(items){
      var count=0;
      var lunchArray=[];
      if(items.trim()!==' ' &&  items!==null && items!== undefined && items!= Infinity )
      {
        lunchArray=items.split(',');
        for(var item in lunchArray){
          if (lunchArray[item].trim().length > 0) {
            count+=1;
          }
        }
      }
      return count;
    };
    $scope.TooMuch=function(){
      var countup=$scope.ItemsCount($scope.dishes);
      var returnMessage='please enter data first';
      if(countup>0 && countup<=3){
        returnMessage='ENJOY!';}
      else if(countup>3){
        returnMessage='TOO MUCH!';}
      $scope.response=returnMessage;
    }

  }
})();
