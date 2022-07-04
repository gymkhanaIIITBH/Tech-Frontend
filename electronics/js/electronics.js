const url = `http://localhost:5000`;

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
    <div class="hexagon" >
    <div class="shape">
        <img src="${imgSrc}">
        <div class="kontent">
            <div>
                <h2>${data[i]['fname']} ${data[i]['lname']}</h2>
                <p>coordinator</p> 
                <div class="social">
                    <a href="${data[i]['github']}" target="_blank"><i class="fa-brands fa-github"></i></a>
                    <a href="${data[i]['instagram']}" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                    <a href="${data[i]['linkedIn']}" target="_blank"><i class="fa-brands fa-linkedin"></i> </a>
                </div>
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