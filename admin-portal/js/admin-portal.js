const url = `http://localhost:5000`;

var logindata = {};

// UserDetail Show to page
var username = document.getElementsByClassName('username');
var fname = document.getElementsByClassName('fname');
var lname = document.getElementsByClassName('lname');
var clubname = document.getElementsByClassName('clubname');
var email = document.getElementsByClassName('email');
var github = document.getElementsByClassName('githubLink');
var linkedin = document.getElementsByClassName('linkedinLink');
var instagram = document.getElementsByClassName('instagramLink');
var imageFigure1 = document.getElementById('imageFigure1');
var imageFigure2 = document.getElementById('imageFigure2');
var ResouceDataShow = document.getElementById('ResouceDataShow');
var NewsDataShow = document.getElementById('NewsDataShow');


// Message 
var message = document.getElementById('message');

function messageshow(s) {
  message.style.display = 'block';
  var html;
  if (s === 'Success') {
    html = `<div class="MessageSuccess" >
              <strong>Successfully updated</strong>
          </div>`
  } else if (s === 'Failure') {
    html = `<div class="MessageFailure" >
              <strong>Opps!</strong> Unable to update
          </div>`
  } else {
    html = `<div class="MessageFailure" >
    <strong>Opps!</strong> something is wrong
</div>`
  }
  message.innerHTML = html;
  setTimeout(() => {
    message.style.display = 'none';
  }, 2000);
}


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
  fetch(`${url}/api/auth/access`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'auth_token': `${localStorage.getItem('token')}`
    }
  })
    .then((res) => res.json())
    .then((body) => {
      if (body.status === 0) {
        logindata = body.data;
        setdata(body.data);
        fetchResource();
        fetchNewsData();
      } else {
        localStorage.removeItem('token')
        window.location.href = './admin.html'
      }
    })
    .catch((error) => {
      localStorage.removeItem('token')
      window.location.href = './admin.html'
    });
}

if (localStorage.getItem('token')) {
  fetchUser();
} else {
  window.location.href = './admin.html'
}

function setdata(data) {
  for (var i = 0; i < username.length; i++) {
    username[i].value = data['username'];
    username[i].innerHTML = data['username'];
  }
  for (var i = 0; i < fname.length; i++) {
    fname[i].value = data['fname'];
    fname[i].innerHTML = data['fname'];
  }
  for (var i = 0; i < lname.length; i++) {
    lname[i].value = data['lname'];
    lname[i].innerHTML = data['lname'];
  }
  for (var i = 0; i < clubname.length; i++) {
    clubname[i].value = data['club'];
    clubname[i].innerHTML = data['club'];
  }
  for (var i = 0; i < email.length; i++) {
    email[i].value = data['email'];
    email[i].innerHTML = data['email'];
  }
  var img = arrayBufferToBase64(data['image'].data.data)
  imageFigure1.src = `data:image/${data.image.contentType};base64,${img.toString('base64')}`;
  imageFigure2.src = `data:image/${data.image.contentType};base64,${img.toString('base64')}`;

  for (var i = 0; i < github.length; i++) {
    github[i].value = data['github'];
    github[i].href = data['github'];
  }
  for (var i = 0; i < linkedin.length; i++) {
    linkedin[i].value = data['linkedin'];
    linkedin[i].href = data['linkedin'];
  }
  for (var i = 0; i < instagram.length; i++) {
    instagram[i].value = data['instagram'];
    instagram[i].href = data['instagram'];
  }
}

// Fetch resource data

const fetchResource = () => {
  fetch(`${url}/api/resource/datasendToCord/${logindata['club']}/${logindata['username']}`)
    .then((res) => res.json())
    .then((res) => {
      if (res.status == 0) {
        DataDisplayResource(res.data);
      } else {
        var html = ``;
        html = `<h1>Unable to fetch</h1>`;
        ResouceDataShow.innerHTML = html;
      }
    })
    .catch((err) => {
      var html = ``;
      html = `<h1>Unable to fetch</h1>`;
      ResouceDataShow.innerHTML = html;
    })
}

function DataDisplayResource(resources) {
  var html = ``;
  if (resources.length == 0) {
    html = `<h1>Data is not updated</h1>`
  }
  for (let i = 0; i < resources.length; i++) {
    html += `<div class="resources">
          <div class="d-flex justify-content-between" style="width:80% ;">
              <h4>
                  ${resources[i].topic}
              </h4>
              <span data-bs-toggle="modal" data-bs-target="#DeleteResource"
                  id="${resources[i]._id}" onclick="ResourseDelete(this.id)"
                  style="font-size:20px; cursor: pointer;">
                  <i class="fa fa-trash"></i>
              </span>
          </div>
          <p>
              ${resources[i].desc}
          </p>
          <p>
              <a href="${resources[i].link}" target="_blank">
                  ${resources[i].link}
              </a>
          </p>
          <span>
              ${resources[i].date}
          </span>
      </div>
    `
  }
  ResouceDataShow.innerHTML = html;
}


// fetch News data

const fetchNewsData = () => {
  fetch(`${url}/api/news/getdata/${logindata['fname']}`)
    .then((res) => res.json())
    .then((res) => {
      if (res.status == 0) {
        DataDisplayNews(res.news);
      } else {
        var html = ``;
        html = `<h1>Unable to fetch</h1>`;
        NewsDataShow.innerHTML = html;
      }
    })
    .catch((err) => {
      var html = ``;
      html = `<h1>Unable to fetch</h1>`;
      NewsDataShow.innerHTML = html;
    })
}

function DataDisplayNews(news) {
  var html = ``;
  if (news.length == 0) {
    html = `<h1>Data is not updated</h1>`
  }
  for (let i = 0; i < news.length; i++) {
    html += `
      <div class="newshowcard">
          <div class="d-flex justify-content-between">
              <div class="newsheading">
                  ${news[i].topic}
              </div>
              <span data-bs-toggle="modal" data-bs-target="#DeleteNews" id="${news[i]._id}"
                  onclick="NewsDelete(this.id)" style="font-size:20px; cursor: pointer;">
                  <i class="fa fa-trash"></i>
              </span>
          </div>
          <p class="newsDesc">
              ${news[i].desc}
          </p>
          <a href="${news[i].link}" target="_blank" class="newsLink">News Link</a>
          <p class="newsby">
              ${news[i].by}
          </p>
      </div>
    `
  }
  NewsDataShow.innerHTML = html;
}

// Social Link update form 

document.getElementById('socialLinkUpdate').addEventListener('submit', (e) => {
  e.preventDefault();
  fetch(`${url}/api/update/sociallink`, {
    method: 'POST',
    headers: {
      'auth_token': `${localStorage.getItem('token')}`
    },
    body: new URLSearchParams(new FormData(e.target)),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.status == 0) {
        messageshow('Success');
        fetchUser();
      } else {
        messageshow('Failure');
      }
    })
    .catch((err) => {
      messageshow('Error');
    })
})

// Resource add form 
document.getElementById('ResourceForm').addEventListener('submit', (e) => {
  e.preventDefault();
  fetch(`${url}/api/resource/addData/${logindata['club']}`, {
    method: 'POST',
    body: new URLSearchParams(new FormData(e.target)),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.status == 0) {
        messageshow('Success');
        fetchResource();
      } else {
        messageshow('Failure');
      }
    })
    .catch((err) => {
      messageshow('Error');
    })
})


// Delete Resource 
document.getElementById('DeleteResourceForm').addEventListener('submit', (e) => {
  e.preventDefault();
  fetch(`${url}/api/resource/ResourceDelete/${logindata['club']}`, {
    method: 'POST',
    body: new URLSearchParams(new FormData(e.target)),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.status == 0) {
        messageshow('Success');
        fetchResource();
      } else {
        messageshow('Failure');
      }
    })
    .catch((err) => {
      messageshow('Error');
    })
})

// Add News
document.getElementById('NewsForm').addEventListener('submit', (e) => {
  e.preventDefault();
  fetch(`${url}/api/news/newsadd`, {
    method: 'POST',
    body: new URLSearchParams(new FormData(e.target)),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.status == 0) {
        messageshow('Success');
        fetchNewsData();
      } else {
        messageshow('Failure');
      }
    })
    .catch((err) => {
      messageshow('Error');
    })
})

// Delete News
document.getElementById('DeleteNewsForm').addEventListener('submit', (e) => {
  e.preventDefault();
  fetch(`${url}/api/news/Newsdelete`, {
    method: 'POST',
    body: new URLSearchParams(new FormData(e.target)),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.status == 0) {
        messageshow('Success');
        fetchNewsData();
      } else {
        messageshow('Failure');
      }
    })
    .catch((err) => {
      messageshow('Error');
    })
})

// Update password
document.getElementById('changePasswordForm').addEventListener('submit', (e) => {
  e.preventDefault();
  fetch(`${url}/api/update/changep/${logindata['username']}`, {
    method: 'POST',
    body: new URLSearchParams(new FormData(e.target)),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.status == 0) {
        messageshow('Success');
      } else {
        messageshow('Failure');
      }
    })
    .catch((err) => {
      messageshow('Error');
    })
})

// certificate upload
document.getElementById('certAddForm').addEventListener('submit', (e) => {
  e.preventDefault();
  fetch(`${url}/api/cert/certAdd/${logindata['username']}`, {
    method: 'POST',
    body: new FormData(e.target),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.status == 0) {
        messageshow('Success');
      } else {
        messageshow('Failure');
      }
    })
    .catch((err) => {
      messageshow('Error');
    })
})

// Update Image
document.getElementById('changeImageForm').addEventListener('submit', (e) => {
  e.preventDefault();
  fetch(`${url}/api/update/imageUpload/${logindata['username']}`, {
    method: 'POST',
    body: new FormData(e.target),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.status == 0) {
        messageshow('Success');
        fetchUser();
      } else {
        messageshow('Failure');
      }
    })
    .catch((err) => {
      messageshow('Error');
    })
})

// Logout Function

function Funclogout(){
  localStorage.removeItem('token');
  window.location.reload();
}