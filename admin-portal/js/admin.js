var pCheck = document.querySelector(".p-check");
document.forms["formDetails"].addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event.target.action)
  fetch(event.target.action, {
    method: "POST",
    body: new URLSearchParams(new FormData(event.target)),
  })
    .then((res) => res.json())
    .then((body) => {
      pCheck.innerText = body["data"];
      console.log(body);
      if(body.status==0){
        localStorage.setItem('token',`${body.auth_token}`)
        pCheck.innerText = "";
        window.location.href = './admin-portal.html'
      }else{
        pCheck.innerText = "Wrong Username or Password!!";
      }
    })
    .catch((error) => {
      pCheck.innerText = "Something went Wrong!!";
    });
});
