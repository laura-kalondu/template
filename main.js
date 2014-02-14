alert("yay javascript");
console.log("I'm in the console");
function myfunct()
{
  alert("you clicked");
}
var myVar=document.getElementsByTagName('h1');
console.log(myVar);
myVar.onclickfunction(){
  alert("you clicked an h1")};
$(function(){
  $('h1').on('click',function()
    {
    alert("you clicked an h1");
    });
});
