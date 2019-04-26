/*
var header = document.getElementsByClassName("menu-list");
var mains = header.getElementsByClassName("main");
for (var i = 0; i < mains.length; i++) {
  mains[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}
*/
var openMenu=document.getElementById('openbtn');
var closeMenu=document.getElementById('closebtn');

openMenu.addEventListener('click',function(){
    document.getElementById('container').style.marginLeft='200px';
    document.getElementById('sidebar').style.width='200px';
    document.getElementById('openbtn').style.visibility='hidden';
})

closeMenu.addEventListener('click',function(){
    document.getElementById('container').style.marginLeft='0px';
    document.getElementById('sidebar').style.width='0px'; 
    document.getElementById('openbtn').style.visibility='visible';
});