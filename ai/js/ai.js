

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
