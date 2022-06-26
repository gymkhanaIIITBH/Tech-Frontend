const url = `http://localhost:5000`;

var loginData = {};

// buffer to binary convert
const arrayBufferToBase64 = (buffer) => {
  var binary = "";
  var bytes = [].slice.call(new Uint8Array(buffer));
  bytes.forEach((b) => (binary += String.fromCharCode(b)));
  return window.btoa(binary);
};

var message = document.getElementById("message");

function messageshow(s) {
  message.style.display = "block";
  var html;
  if (s === "Success") {
    html = `<div class="MessageSuccess" >
              <strong>Successfully updated</strong>
          </div>`;
  } else if (s === "Failure") {
    html = `<div class="MessageFailure" >
              <strong>Opps!</strong> Unable to update
          </div>`;
  } else {
    html = `<div class="MessageFailure" >
    <strong>Opps!</strong> something is wrong
</div>`;
  }
  message.innerHTML = html;
  setTimeout(() => {
    message.style.display = "none";
  }, 2000);
}

$("#add-coord").on("click", () => {
  $("#overlay").css("display", "block");
});

$("#chng-password").on("click", () => {
  $("#password-overlay").css("display", "block");
});
// $(".deleteCord").on("click", ()=>{
//     $("#Cord-overlay").css("display","block");
// })

$("#close-overlay").on("click", () => {
  $("#overlay").css("display", "none");
});

$("#close-overlay-pssd").on("click", () => {
  $("#password-overlay").css("display", "none");
});

$("#close-overlay-cord").on("click", () => {
  $("#Cord-overlay").css("display", "none");
});

function DeleteCordOver(id) {
  document.getElementById("cordDeleteId").value = id;
  document.getElementById("Cord-overlay").style.display = "block";
  // $("#Cord-overlay").css("display","block");
}

var fname = document.querySelector("#fname");
var gsImage = document.querySelectorAll("#gsImage");
var fullName = document.querySelector("#fullName");
var post = document.querySelector("#postShow");
var showDetails = document.querySelector("#showDetails");

// Fetch GS All Details
function fetchGS() {
  fetch(`${url}/api/gsmain/mngmt`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      auth_token: `${localStorage.getItem("token1")}`,
    },
  })
    .then((res) => res.json())
    .then((body) => {
      if (body.status == 0) {
        loginData = body.data;
        // console.log(loginData)
        setData(loginData);
        // fetchResource();
        // fetchNewsData();
      } else {
        localStorage.removeItem("token1");
        window.location.href = "./gs-tech.html";
      }
    })
    .catch((error) => {
      // console.log(error)
      localStorage.removeItem("token1");
      window.location.href = "./gs-tech.html";
    });
}
if (localStorage.getItem("token1")) {
  fetchGS();
} else {
  window.location.href = "./gs-tech.html";
}

// Showing The Post
function showPost(pst) {
  // console.log(post)
  if (pst == "tech") post.innerText = "General Secretary Technical Board";
  else if (pst == "cult") post.innerText = "General Secretary Cultural Board";
  else if (pst == "sports") post.innerText = "General Secretary Sports Board";
}

function setData(data) {
  fname.innerHTML = data["fname"];
  fullName.innerHTML = data["fname"] + " " + data["lname"];
  showPost(data["post"]);
  var img = arrayBufferToBase64(data["img"].data.data);
  for (var i = 0; i < gsImage.length; i++) {
    gsImage[i].src = `data:image/png;base64,${img}`;
  }
}

// Showing Coord Details
function showCoordDetails(data) {
  // console.log(data)
  var html = ``;
  let x = 1;
  for (var i = 0; i < data.length; i++) {
    html += `
        <div class="row">
            <div class="col-2">
                <span>
                    ${x}
                </span>
            </div>
            <div class="col-4">
                <span>
                ${data[i].fname + " " + data[i].lname}</span>
            </div>
            <div class=" col-4">
                <span>
                    ${data[i].email}
                </span>
            </div>
            <div class="col-2 icons">
                <div class="deleteCord" id="${
                  data[i]._id
                }" onclick="DeleteCordOver(this.id)" style="cursor:pointer;">
                    <i class="fa fa-trash"></i>
                </div>
            </div>
        </div>
            `;
    x++;
  }
  showDetails.innerHTML = html;
}

// Fetching Deatils of CLub Coordinators
document.querySelector("#clubFind").addEventListener("submit", (event) => {
  event.preventDefault();
  fetch(`${url}/api/gsmain/findDetails/${loginData["post"]}`, {
    method: "POST",
    body: new URLSearchParams(new FormData(event.target)),
  })
    .then((res) => res.json())
    .then((body) => {
      if (body.status == 0) {
        // console.log(body.data)
        showCoordDetails(body.data);
      } else {
        alert("No Data Found");
      }
    })
    .catch((err) => {
      alert("Something Went Wrong");
    });
});

// Update password
document
  .querySelector("#changePasswordForm")
  .addEventListener("submit", (e) => {
    e.preventDefault();
    fetch(`${url}/api/update/changepgs/${loginData["post"]}`, {
      method: "POST",
      body: new URLSearchParams(new FormData(e.target)),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status == 0) {
          messageshow("Success");
        } else {
          messageshow("Failure");
        }
      })
      .catch((err) => {
        messageshow("Error");
      });
  });

// Add Coordinators
document.querySelector("#addCoordForm").addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(`${url}/api/update/register`, {
    method: "POST",
    body: new FormData(e.target),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.status == 0) {
        messageshow("Success");
        fetchGS();
      } else {
        messageshow("Failure");
      }
    })
    .catch((err) => {
      messageshow("Error");
    });
});

// Logout Function
function funcLogout() {
  localStorage.removeItem("token1");
  window.location.reload();
}


// Delete coordinator
document.querySelector("#DeleteCoordinatorForm").addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(`${url}/api/update/deleteCordinator`, {
    method: "POST",
    headers :{
      auth_token:`${localStorage.getItem('token1')}`
    },
    body: new URLSearchParams(new FormData(e.target))
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.status == 0) {
        messageshow("Success");
      } else {
        messageshow("Failure");
      }
    })
    .catch((err) => {
      messageshow("Error");
    });
});
