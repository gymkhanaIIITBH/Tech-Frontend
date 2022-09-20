const url = `https://clubiiitbh.herokuapp.com`;


particlesJS.load("particles-js",
    "./js/particles.json", (error) => {
      if (error) {
        console.log(error);
      } else {
        (container) => {
          console.log("callback - tsparticles config loaded");
        }
      }
  })

const obsr = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      
    } else {
      entry.target.classList.remove("show");
    }
  })
},{ threshold: 0 });
const targets = document.querySelectorAll(".hidden");
const targets2 = document.querySelectorAll(".hidden2");
const target3 = document.querySelectorAll(".hidden3");

targets.forEach((target) => {
  obsr.observe(target);
});

targets2.forEach((target) => {
  obsr.observe(target);
}
);

target3.forEach((target) => {
  obsr.observe(target);
}
);

function sidebaropen() {
  // window.scrollTo(0, 0);
  document.querySelector(".sidebar").
    style.display = "flex";
  document.querySelectorAll(".sidebar div").forEach((div) => {
    div.style.display = "block";
  });
  document.querySelector(".sidebar .close").style.display = "block";
  setTimeout(() => {
    document.querySelector(".sidebar").
      style.width = "100vw";
    document.getElementById("main").
      style.marginLeft = "-100vw";
    document.querySelector(".navbar").style.marginLeft = "100vw";
    document.querySelector(".sidebar .close").style.marginLeft = "10vw";
    document.querySelector(".footer").style.marginLeft = "-100vw";
    document.querySelector(".copyright").style.marginLeft  = "-100vw";
    
  });
  
}

function sidebarclose() { 
  document.querySelector(".sidebar").
    style.width = "0";
  document.getElementById("main").
    style.marginLeft = "0";
  document.querySelector(".navbar").style.marginLeft = "0";
  document.querySelector(".footer").style.marginLeft = "0";
  document.querySelector(".copyright").style.marginLeft = "0";
  setTimeout(() => {
    document.querySelector(".sidebar").
    style.display = "";
  document.querySelectorAll(".sidebar div").forEach((div) => {
    div.style.display = "";
  });
  document.querySelector(".sidebar .close").style.display = "";
  },500)
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
    <div class="card">
        <img src="${imgSrc}" alt="" class="faccordimg">
        <br>
        <h2 class="techcordabt1">${data[i]['fname']} ${data[i]['lname']}</h2>
            <div class="smedia">
              <a href="${data[i]['instagram']}" class="gmail_logo"><i class="fa-brands fa-instagram"></i></a>
              <a href="${data[i]['github']}" class="git_logo"><i class="fa-brands fa-github"></i></a>
              <a href="${data[i]['linkedIn']}" class="linkedin_logo"><i class="fa-brands fa-linkedin"></i></a>
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