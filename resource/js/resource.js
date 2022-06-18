/* Open the sidenav */
$(document).ready((x) => {
  $(".sideBarButton").click((_) => {
    $(".navdesign").css("width", "250px");
  });

  /* Close/hide the sidenav */
  $(".closebtn").click((_) => {
    $(".navdesign").css("width", "0%");
  });
  window.addEventListener("resize", function () {
    if (window.matchMedia("(min-width: 768px)").matches) {
      $(".navdesign").css("width", "250px");
    }
    else {
      $(".navdesign").css("width", "0");
    }
  });
});

// Fetch Resource
var clubName = document.getElementById('ClubNameMain');
var DataStore = document.getElementById('dataStore');



function ResourceFetch(club) {
  clubName.innerHTML = club
  fetch(`http://localhost:5000/api/resource/datasend/${club}`)
    .then((res) => res.json())
    .then((res) => {
      if (res.status == 0) {
        DataDisplay(res.data);
      } else {
        var html = ``;
        html = `<h1>Unable to fetch</h1>`;
        DataStore.innerHTML = html;
      }
    })
    .catch((err) => {
      var html = ``;
      html = `<h1>Unable to fetch</h1>`;
      DataStore.innerHTML = html;
    })
}

ResourceFetch('WebVerse');

function DataDisplay(data) {
  var html = ``;
  if (data.length == 0) {
    html = `<h1>Data is not updated</h1>`
  }
  for (let i = 0; i < data.length; i++) {
    html += `<a href="${data[i].link}" target='_blank'>
      <div class="data">
        <h3 class="topic">
          ${data[i].topic}
        </h3>
        <p class="desc">
          ${data[i].desc}
        </p>
        <h6 class="cont">Source : ${data[i].contenttype}
        </h6>
      </div>
    </a>`
  }
  DataStore.innerHTML = html;
}
