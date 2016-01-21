function pop(){
  var msg = document.getElementById('main');
  var cards = document.getElementsByClassName('card');
  console.log(window.pageYOffset);
  msg.style.top = 100-(window.pageYOffset/5)+'px';

  if(window.pageYOffset >= 218){
  		for (var i = cards.length; i < cards.length; i++) {
  			cards[i].style.display = 'inline-block';
  	}

};
}
window.addEventListener("scroll", pop, false);




var app = angular.module('testApp', ['ngTable', 'ngMaterial']);



app.controller('test', ['$scope','$http', 'NgTableParams', function ($scope, $http, NgTableParams) {
  }]);
