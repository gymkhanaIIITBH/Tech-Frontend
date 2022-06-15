var carouselItem = document.querySelector(".carousel-item");
var carouselItemActive = document.querySelector(".carousel-item.active");
var carouselItemActiveTitle=document.querySelector('.carousel-item.active .card-title')
var carouselItemActiveNewsDesc=document.querySelector('.carousel-item.active .newsDesc')
var carouselItemActive=document.querySelector('.carousel-item.active .newsPost')
var carouselItemActive=document.querySelector('.carousel-item.active .newsDate')

function showNews(e) {
  carouselItemActive.addEventListener('click',()=>{
        window.open(e[e.length-1].link,'_blank');
  })
}

function news() {
  fetch("http://localhost:5000/api/news/getdata")
    .then((res) => res.json())
    .then((body) => {
      showNews(body.news);
      console.log(body);
    })
    .catch((error) => {
      console.log(error);
    });
}

news();
