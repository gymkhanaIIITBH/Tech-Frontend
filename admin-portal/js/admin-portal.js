
var dataChange = document.querySelectorAll(".data-change");

var data = document.querySelectorAll(".data-link");

var update=document.querySelector(".update");



var input1 = document.querySelector('#Resourcename');
var input2 = document.querySelector('#Newsname');
var input3 = document.querySelector('#ResourcenameDelete');
var input4 = document.querySelector('#NewsnameDelete');

input1.addEventListener("keydown", function() {
  var oldVal = this.value;
//   console.log(oldVal);
  var field = this;
//   console.log("funciona");
  
  setTimeout(function () {
    if(field.value.indexOf('http://') !== 0) {
        field.value = oldVal;
    } 
}, 1);
});

input2.addEventListener("keydown", function() {
  var oldVal = this.value;
  var field = this;
  
  setTimeout(function () {
    if(field.value.indexOf('http://') !== 0) {
        field.value = oldVal;
    } 
}, 1);
});

input3.addEventListener("keydown", function() {
  var oldVal = this.value;
  var field = this;
  
  setTimeout(function () {
    if(field.value.indexOf('http://') !== 0) {
        field.value = oldVal;
    } 
}, 1);
});

input4.addEventListener("keydown", function() {
  var oldVal = this.value;
  var field = this;
  
  setTimeout(function () {
    if(field.value.indexOf('http://') !== 0) {
        field.value = oldVal;
    } 
}, 1);
});


function ResourseDelete(id){
  document.getElementById('tittleDeleteR').value = id;
}
function NewsDelete(id){
  document.getElementById('tittleDeleteN').value = id;
}