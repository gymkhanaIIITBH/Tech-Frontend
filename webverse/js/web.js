const url = `https://clubiiitbh.herokuapp.com`;

/*
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
*/
setTimeout(() => {
  ;
  window.addEventListener("scroll", function () {
    $('.count').each(function () {
      $(this).prop('Counter', 0).animate({
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
}, 1000);
var navLinks = document.getElementById("navLinks");

function showmenu() {
  if ($("#navLinks").css("display") === "none") {
    $("#navLinks").css("display", "");
  }
  navLinks.style.right = "0";
}
function hidemenu() {
  /*navLinks.style.right="-200px";*/
  navLinks.style.right = "500%";
}

//text animation
// Particle js animation
particlesJS("particles-js", {

  particles: {
    number: {
      value: 355,
      density: {
        enable: true,
        value_area: 789.1476416322727,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.48927153781200905,
      random: false,
      anim: {
        enable: true,
        speed: 0.2,
        opacity_min: 0,
        sync: false,
      },
    },
    size: {
      value: 2,
      random: true,
      anim: {
        enable: true,
        speed: 4,
        size_min: 0,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 0.2,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "window",
    events: {
      onhover: {
        enable: true,
        mode: "bubble",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 83.91608391608392,
        size: 1,
        duration: 3,
        opacity: 1,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
});
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 40,
    stretch: 0,
    depth: 200,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  loop: true,
});
/*
const loader = document.querySelector('.loader');
const content = document.querySelector('.content');
function init() {
  setTimeout(() => {
    loader.style.opacity = 1;
    content.style
    loader.style.display='block';
    loader.style.display='none';

    setTimeout(() => (content.style.opacity = 1), 100);
  }, 5000);
}
init();
*/
/*
var myVar;
function myFunction() {
  myVar = setTimeout(showPage, 3000);
}
function showPage() {
  document.querySelector("loader").style.display = "none";
  document.querySelector("content").style.display = "block";
}
*/

$(document).ready(function () {
  if ($(window).width() < 789) {
    $('#navLinks').css("display", 'none');
  }
})


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
      <div class="col-lg-6">
        <div class="member d-flex align-items-center justify-content-center aos-init aos-animate" data-aos="zoom-in"
            data-aos-delay="100">
            <div class="pic">
                <img src="${imgSrc}" class="img-fluid" id="img1" alt="">
            </div>
            <div class="member-info">
                <h4>${data[i]['fname']} ${data[i]['lname']}</h4>
                <span>Coordinator</span>
                <div class="social">
                    <a href="${data[i]['github']}" target="_blank"><i class="fa fa-github"></i></a>
                    <a href="${data[i]['instagram']}" target="_blank"><i class="fa fa-instagram"></i></a>
                    <a href="${data[i]['linkedIn']}" target="_blank"><i class="fa fa-linkedin"></i> </a>
                </div>
            </div>
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