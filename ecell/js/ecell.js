const url = `https://clubiiitbh.herokuapp.com`;

/* eslint-disable no-undef */
setTimeout(() => {
  window.scrollTo(0, 8);
  window.addEventListener("scroll", function (event) {
   event.preventDefault();
    const header = document.querySelector("header");
    const width = window.innerWidth > 0 ? window.innerWidth : screen.width;
    header.classList.toggle("sticky", window.scrollY > 0);
    if (window.scrollY > 0) {
      $("header").removeClass("hello");
    } else {
      $("header").addClass("hello");
    }
  });
}, 10450);

const navigation = document.querySelector("nav");
document.querySelector(".toggle").onclick = function () {
  this.classList.toggle("active");
  navigation.classList.toggle("active");
  this.classList.toggle("fa-close");
  this.classList.toggle("fa-bars");
};

setTimeout(() => {
const text = document.querySelector('.text');
const text2 = document.querySelector('.text2');
const text3 = document.querySelector('.text3');
text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");
text2.innerHTML = text2.textContent.replace(/\S/g, "<span>$&</span>");
text3.innerHTML = text3.textContent.replace(/\S/g, "<span>$&</span>");
anime.timeline({
  loop: false
})
.add({
  targets: '.text span',
  translateY: [-500, 0],
  scale: [1, 1],
  opacity: [0, 1],
  easing: "easeOutExpo",
  duration: 2000,
  delay: anime.stagger(100),
})

.add({
  targets: '.text2 span',
  translateZ: [-800, 0],
  scale: [8, 1],
  opacity: [0, 1],
  easing: "easeOutExpo",
  duration: 1500,
  delay: anime.stagger(100),
})
.add({
  targets: '.text3 span',
  translateX: [600, 0],
  scale: [0, 1],
  opacity: [0, 1],
  easing: "easeOutExpo",
  duration: 1500,
  delay: anime.stagger(100),
})
.add({
  targets: '.text3, .text2, .text',
  translateZ: [0, 600],
  scale: [1, 0.2],
  opacity: [1, 0],
  easing: "easeOutExpo",
  duration: 1000,
  delay: anime.stagger(100),
})
}, 2000);
setTimeout(() => {
document.getElementById("Welcome").style.opacity = "0";
document.getElementById("Welcome").style.transform = "translate(-74%, -110%)";
window.scrollTo(0, 8);
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
}, 10450);


ScrollReveal({
  reset: true,
  distance: '100px',
  duration: 2500,
  delay: 400
});
ScrollReveal().reveal('.mainheader, .phead, .otherclubs', {delay: 600, distance: '50px'})
ScrollReveal().reveal('.details, .box, .club-links', {delay: 400, duration: 3000})
ScrollReveal().reveal('.cod1', {distance: '50px', origin: 'left'})
ScrollReveal().reveal('.cod2', {distance: '50px', origin: 'right'})



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
    <div class="coordinator cod1">
    <div class="imagecontainer">
        <img src="${imgSrc}" class="cimage"></img>
    </div>
    <div class="contents_co">
        <div class="details_co">
            <h2>${data[i]['fname']} ${data[i]['lname']}<br> <span>Coordinator</span> </h2>
            <div class="connect">
                <ul>
                    <li>
                        <a href="${data[i]['linkedIn']}">
                            <i class="fa-brands fa-linkedin"></i>
                        </a>
                    </li>
                    <li>
                        <a href="${data[i]['instagram']}">
                            <i class="fa-brands fa-instagram"></i>
                        </a>
                    </li>
                    <li>
                        <a href="${data[i]['github']}">
                            <i class="fa-brands fa-github"></i>
                        </a>
                    </li>
                </ul>
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
