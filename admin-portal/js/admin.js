// var registerSpan = document.querySelector("#register span");
// var registerdetail = document.querySelector("#register");
// var register = document.querySelector(".register");
// var login = document.querySelector(".login");
// var check = 0;

// function lr() {
//   if (!check) {
//     register.style.display = "block";
//     login.style.display = "none";
//     registerdetail.innerHTML =
//       "Registered? <span onclick='lr();'>Login Here</span>";
//     check = 1;
//   } else {
//     register.style.display = "none";
//     login.style.display = "block";
//     registerdetail.innerHTML =
//       "Not Registered? <span onclick='lr();'>Register Here</span>";
//     check = 0;
//   }
// }
var pCheck = document.querySelector(".p-check");
document.forms["formDetails"].addEventListener("submit", (event) => {
  event.preventDefault();
  fetch(event.target.action, {
    method: "POST",
    body: new URLSearchParams(new FormData(event.target)),
  })
    .then((res) => res.json())
    .then((body) => {
      pCheck.innerText = body["data"];
      console.log(body);
    })
    .catch((error) => {
      pCheck.innerText = "Something went Wrong!!";
    });
});
