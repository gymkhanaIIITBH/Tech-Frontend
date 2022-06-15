var show = document.querySelector(".show");
var names=document.querySelector('.name .col-8');
var cID=document.querySelector('.c_id .col-8');
var date=document.querySelector('.date .col-8');
var club=document.querySelector('.club .col-8');
var events=document.querySelector('.events .col-8');
var cert=document.querySelector('.cert .cert-img img');
var error=document.querySelector('.error span');

function arrayBufferToBase64(buffer) {
  var binary = '';
  var bytes = [].slice.call(new Uint8Array(buffer));
  bytes.forEach((b) => binary += String.fromCharCode(b));
  return btoa(binary);
};

function showCert(e) {
    if(e.show) {
        show.style.display='block';
        names.innerText=e.certificate.name;
        cID.innerText=e.certificate.c_id;
        date.innerText=e.certificate.date;
        club.innerText=e.certificate.club;
        events.innerText=e.certificate.event;
        cert.src="data:"+e.certificate.image.contentType+";base64, "+arrayBufferToBase64(e.certificate.image.data.data);;
    }
    else {
        error.innerText=e.issue;
    }
}

document.forms["getCert"].addEventListener("submit", (event) => {
  event.preventDefault();
  fetch(event.target.action, {
    method: "POST",
    body: new URLSearchParams(new FormData(event.target)),
  })
    .then((res) => res.json())
    .then((body) => {
        showCert(body);
    })
    .catch((error) => {
      console.log(error);
    });
});
