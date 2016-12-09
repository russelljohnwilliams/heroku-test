console.log("This is JavaScript calling");

// window.onload = theFunction;

// var theFunction = function(){
//   console.log("the DOM has loaded");
//  var element = document.getElementById('main-text');
//  console.log(element); 
// }


// window.onload  = function(){
  // console.log("the DOM has loaded");
  // var element = document.getElementById('main-text');
  // console.log(element); 
//   main()
// }




window.onload = main;

function main(){
  console.log("Inside Main")
  var element = document.getElementById('main-text');
  console.log(element);
  logElement(element)
}

function logElement(element){
console.log(element)
}

// window.onload = function(){
//   main()
// }

// var main= function(){
//   console.log("Inside Main")
//   var element = document.getElementById('main-text');
//   console.log(element);
//   logElement(element)
// }

// var logElement = function(element){
// console.log(element)
// }


console.log(window)

