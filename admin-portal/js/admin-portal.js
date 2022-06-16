
var dataChange = document.querySelectorAll(".data-change");

var data = document.querySelectorAll(".data-link");

var update = document.querySelector(".update");



var input1 = document.querySelector('#Resourcename');
var input2 = document.querySelector('#Newsname');
var input3 = document.querySelector('#ResourcenameDelete');
var input4 = document.querySelector('#NewsnameDelete');

input1.addEventListener("keydown", function () {
  var oldVal = this.value;
  //   console.log(oldVal);
  var field = this;
  //   console.log("funciona");

  setTimeout(function () {
    if (field.value.indexOf('http://') !== 0) {
      field.value = oldVal;
    }
  }, 1);
});

input2.addEventListener("keydown", function () {
  var oldVal = this.value;
  var field = this;

  setTimeout(function () {
    if (field.value.indexOf('http://') !== 0) {
      field.value = oldVal;
    }
  }, 1);
});

input3.addEventListener("keydown", function () {
  var oldVal = this.value;
  var field = this;

  setTimeout(function () {
    if (field.value.indexOf('http://') !== 0) {
      field.value = oldVal;
    }
  }, 1);
});

input4.addEventListener("keydown", function () {
  var oldVal = this.value;
  var field = this;

  setTimeout(function () {
    if (field.value.indexOf('http://') !== 0) {
      field.value = oldVal;
    }
  }, 1);
});


function ResourseDelete(id) {
  document.getElementById('tittleDeleteR').value = id;
}
function NewsDelete(id) {
  document.getElementById('tittleDeleteN').value = id;
}



// Fetch Data User

function fetchUser() {
  fetch('http://localhost:5000/api/auth/access', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'auth_token': `${localStorage.getItem('token')}`
    }
  })
    .then((res) => res.json())
    .then((body) => {
      console.log(body);
      if(body.status===0){

      }else{
        localStorage.removeItem('token')
        window.location.href = './admin.html'
      }
    })
    .catch((error) => {
      localStorage.removeItem('token')
      window.location.href = './admin.html'
    });
}

if(localStorage.getItem('token')){
  fetchUser();
}else{
  window.location.href = './admin.html'
}