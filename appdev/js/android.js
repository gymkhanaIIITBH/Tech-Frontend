let word=document.getElementById('typing');
let text=['Android-Club'];
let phrase=[];
let i=0;
let deleted=false;
function type(){
  word.innerHTML=phrase.join('');
  if(!deleted && i<=text[0].length){
    phrase.push(text[0][i]);
    i++;
  }
  if(deleted && i<=text[0].length){
    phrase.pop(text[0][i]);
    i--;
  }
  if(i==text[0].length){
    deleted=true;
  }
  if(deleted && i===0){
    phrase=[];
    deleted=false;
    document.querySelector('p').style.display='block';
  }
  setTimeout(type,300);
}
type()

const coordinator=document.getElementById('coord');
const button1=document.getElementById("button1");
const button2=document.getElementById("button2");
const image=document.getElementById("profile");
const scroll_container=document.getElementById("scroll-container");
const content =document.getElementById("content").getElementsByTagName('*');
const leftScroll=document.querySelector(".scroll-left");
const rightScroll=document.querySelector(".scroll-right");
const links=document.getElementById("coord-links")


function expand(){
  coordinator.style.height= $(window).width() < 789 ? "60%" : "70%";
  button1.style.display="none";
  button2.style.display="block";
  image.style.height="25%";
  scroll_container.style.marginTop="0%";
  links.style.display="block";
}

function retract(){
  coordinator.style.height="40%";
  button1.style.display="block";
  button2.style.display="none";
  image.style.height="45%";
  scroll_container.style.marginTop="11%";
  links.style.display="none";
}

var coordinators_name=["Ravikant Sharma","Shivank Bhardwaj","Abhishek Maurya"];
content[1].innerHTML="Ravikant Sharma";

function info_change(){
  const options=document.querySelector(".coordinators-option:checked");
  var num=0
  for(var i=1;i<=3;i++){
    if(i==options.value){
      num=i-1;
      break;
    }
  }
  content[1].innerHTML=coordinators_name[num];
  coordinator.classList.add("onclick");
  setTimeout(()=>{
    coordinator.classList.remove("onclick");
  },700);
}

const scrolling=document.querySelector(".project-scroll");

leftScroll.addEventListener('click',function(){
  scrolling.scrollBy(-409,0);
})

rightScroll.addEventListener('click',function(){
  scrolling.scrollBy(409,0);
})