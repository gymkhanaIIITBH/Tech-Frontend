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
