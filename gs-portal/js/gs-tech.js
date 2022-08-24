<<<<<<< HEAD
// const url = `https://clubiiitbh.herokuapp.com/api/gs/gsLogin`;
var url = `http://localhost:5000/api/gs/gsLogin`;
=======
const url = `http://localhost:5000/api/gs/gsLogin`;
// const url = `https://clubiiitbh.herokuapp.com/api/gs/gsLogin`;
>>>>>>> 81633c950bce0b26567791b1d117ea304ca40d4a

var passwordCheck = document.querySelector(".password-check");
document.forms["gsLogin"].addEventListener("submit", (event) => {
  event.preventDefault();
  fetch(url, {
    method: "POST",
    body: new URLSearchParams(new FormData(event.target)),
  })
    .then((res) => res.json())
    .then((body) => {
      passwordCheck.innerText = body.passwordCheck;
      if (body.status == 0) {
        localStorage.setItem("token1", `${body.auth_token}`);
        passwordCheck.innerText = "";
        window.location.href = "./gs-portal.html";
      } else {
        passwordCheck.innerText = "Wrong Username or Password!!";
      }
    })
    .catch((error) => {
      passwordCheck.innerText = "Something Went Wrong";
      console.log(error);
    });
});
