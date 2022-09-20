const url = `https://clubiiitbh.herokuapp.com`;
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



// Coordinator Detail Fetch Method

var coord = document.getElementById('coordinator');

const fetchCoordinator = () => {
  fetch(`${url}/api/club/web`)
    .then((res) => res.json())
    .then((res) => {
     
      if (res.status === 0) {
       
        UpdateCoordinator(res.data);
      }
    })
    .catch()
}

fetchCoordinator();


const UpdateCoordinator = (data) => {
  var html = ``;
  for (i in data) {
    var img = arrayBufferToBase64(data[i]['image'].data.data);
    var imgSrc = `data:image/${data[i].image.contentType};base64,${img.toString('base64')}`;
    html += `
    <div class="member">
                        <img src="${imgSrc}" alt="">
                        <h2>${data[i]['fname']} ${data[i]['lname']}</h2>
                        <p>CLUB COORDINATOR</p>
                        <div class="social-coord">
                            <a href="${data[i]['linkedIn']}"><i class="fab fa-linkedin fa-2x"></i></a>
                            <a href="${data[i]['github']}"><i class="fab fa-github fa-2x"></i></a>
                            <a href="${data[i]['instagram']}"><i class="fab fa-instagram fa-2x"></i></a>
                        </div>
                    </div>
      `
  }

  coord.innerHTML = html;
}

// buffer to binary convert
const arrayBufferToBase64 = (buffer) => {
  var binary = '';
  var bytes = [].slice.call(new Uint8Array(buffer));
  bytes.forEach((b) => binary += String.fromCharCode(b));
  return window.btoa(binary);
};

