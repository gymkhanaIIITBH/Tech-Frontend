let hero = document.getElementById("heroSectionId");
window.onscroll = function () { myFunction() };

function myFunction() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    hero.style.zIndex = "-2";
    hero.style.position = "fixed";
    // hero.style.opacity="0.7";
  } else {
    hero.style.zIndex = "0";
    hero.style.position = "absolute";
    // hero.style.opacity="1";
  }
}

function scrl(s) {
  if (s.length == 0) {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  } else {
    var elmnt = document.getElementById(s);
    elmnt.scrollIntoView();
  }
}



// intro page loader time

const loader = document.querySelector('.loader');
const main = document.querySelector('.main');

function init() {
  setTimeout(() => {
    loader.style.opacity = 0;
    loader.style.display = 'none';

    main.style.display = 'flex';
    setTimeout(() => (main.style.opacity = 1), 50);
  }, 6500);
}

init();

setTimeout(() => {;
  window.addEventListener("scroll", function (){
    $('.count').each(function () {
      $(this).prop('Counter',0).animate({
        Counter: $(this).text()
      }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
          $(this).text(Math.ceil(now));
        }
      });
    });
  })
}, 6500);
