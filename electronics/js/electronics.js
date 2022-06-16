let hero=document.getElementById("heroSectionId");
window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    hero.style.zIndex="-2";
    hero.style.position="fixed";
    // hero.style.opacity="0.7";
  } else {
    hero.style.zIndex="0";
    hero.style.position="absolute";
    // hero.style.opacity="1";
  }
}

function scrl(s){
  if(s.length==0){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }else{
  var elmnt = document.getElementById(s);
  elmnt.scrollIntoView();
  }
}
