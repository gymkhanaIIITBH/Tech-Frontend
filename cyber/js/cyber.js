document.addEventListener("mousemove", parallax);
function parallax(e) {
  this.querySelectorAll(".move").forEach((move) => {
    const speed = move.getAttribute("data-speed");
    const x = (window.innerWidth - e.pageX * speed) / 150;
    const y = (window.innerWidth - e.pageY * speed) / 150;
    move.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}

let toggling = document.getElementById("navLinks");
let togglerchange = document.getElementById("togglerchange");

function togglerFunc() {
  if (toggling.style.display === "block") {
    toggling.style.display = "none";
    togglerchange.children[0].className = "fa fa-regular fa-align-justify";
  } else {
    togglerchange.children[0].className = "fa fa-regular fa-align-right";
    toggling.style.display = "block";
  }
}

window.addEventListener("scroll", reveal);
function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

$(function () {
  $(document).scroll(function () {
    var $nav = $(".navdesign");
    var $nav2 = $(".navdesign2");
    if (window.innerWidth > 568) {
      $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
      $nav2.toggleClass("scrolled", $(this).scrollTop() > $nav2.height());
    }
  });
});