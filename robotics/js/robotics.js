const url = `https://clubiiitbh.herokuapp.com`;

let toggling =document.getElementById('navLinks');
let togglerchange = document.getElementById('togglerchange');

function togglerFunc(){
    if(toggling.style.display==="block"){
        toggling.style.display="none";
        togglerchange.children[0].className="fa fa-align-justify";
    }else{
        togglerchange.children[0].className="fa fa-align-right";
        toggling.style.display="block";
    }
}

// var swiper = new Swiper(".mySwiper", {
//     effect: "coverflow",
//     grabCursor: true,
//     centeredSlides: true,
//     slidesPerView: "auto",
//     coverflowEffect: {
//         rotate: 50,
//         stretch: 0,
//         depth: 100,
//         modifier: 1,
//         slideShadows: true,
//     },
//     pagination: {
//         el: ".swiper-pagination",
//     },
//     loop: true,
// });




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
                    <a href="${data[i]['github']}" target="_blank"><i class="fa-brands fa-github"></i></a>
                    <a href="${data[i]['instagram']}" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                    <a href="${data[i]['linkedIn']}" target="_blank"><i class="fa-brands fa-linkedin"></i> </a>
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