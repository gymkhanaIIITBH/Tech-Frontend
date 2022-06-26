var passwordCheck = document.querySelector(".password-check");
document.forms["gsLogin"].addEventListener("submit", (event) => {
  event.preventDefault();
  fetch(event.target.action, {
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
