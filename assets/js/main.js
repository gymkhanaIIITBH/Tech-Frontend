const url = `https://clubiiitbh.herokuapp.com/api/news/getdata`;

var remainNews = document.querySelector(".remain-news");
var carouselItemActive = document.querySelector(".carousel-item.active");
var carouselItemActiveTitle = document.querySelector(
  ".carousel-item.active .card-title"
);
var carouselItemActiveNewsDesc = document.querySelector(
  ".carousel-item.active .newsDesc"
);
var carouselItemActiveNewsPost = document.querySelector(
  ".carousel-item.active .newsPost"
);
var carouselItemActiveNewsDate = document.querySelector(
  ".carousel-item.active .newsDate"
);

function showNews(e) {
  carouselItemActive.addEventListener("click", () => {
    window.open(e[e.length - 1].link, "_blank");
  });
  carouselItemActiveTitle.innerText = e[e.length - 1].topic;
  carouselItemActiveNewsDesc.innerText = e[e.length - 1].desc;
  carouselItemActiveNewsPost.innerText = e[e.length - 1].by;
  carouselItemActiveNewsDate.innerText = e[e.length - 1].date;
  for (var i = e.length - 2; i >= 0; i--) {
    remainNews.innerHTML +=
      '<div class="carousel-item">' +
      '<div class="card text-center newstext" style="background-color: rgba(61, 60, 62, 0.59);">' +
      '<div class="card-body" style="color: #fff;">' +
      '<h4 class="card-title">' +
      e[i].topic +
      "</h4>" +
      '<p class="card-text">' +
      e[i].desc +
      "</p>" +
      '<p class="card-text">' +
      "Posted By: " +
      e[i].by +
      "</p>" +
      '<p class="card-text">' +
      "Posted on: " +
      e[i].date +
      "</p>" +
      "</div>" +
      "</div>" +
      "</div>";
  }
}

function news() {
  fetch(`${url}`)
    .then((res) => res.json())
    .then((body) => {
      showNews(body.news);
    })
    .catch((error) => {
    });
}

news();
