console.log(`
 ██████╗ ██╗      █████╗
██╔════╝ ██║     ██╔══██╗
██║  ███╗██║     ███████║
██║   ██║██║  ██╗██╔══██║
╚██████╔╝███████║██║  ██║
 ╚═════╝ ╚══════╝╚═╝  ╚═╝
██╗    ██╗███████╗██████╗
██║    ██║██╔════╝██╔══██╗
██║ █╗ ██║█████╗  ██████╔╝
██║███╗██║██╔══╝  ██╔══██╗
╚███╔███╔╝███████╗██████╔╝
 ╚══╝╚══╝ ╚══════╝╚═════╝
██████╗ ███████╗██╗   ██╗
██╔══██╗██╔════╝██║   ██║
██║  ██║█████╗  ██║   ██║
██║  ██║██╔══╝  ╚██╗ ██╔╝
██████╔╝███████╗ ╚████╔╝
╚═════╝ ╚══════╝  ╚═══╝
INFO:        @GLA_WEB_DEV`);




function ajaxPost(url, formData){
  return new Promise((resolve, reject) => {
    let req = new XMLHttpRequest();
    req.open("POST", url, true);
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req.onload = () => {
      if (req.status === 200){
        resolve(req.response);
        console.log("response: "+req.response);
        document.getElementById("emailInput").remove();
        document.getElementById("emailSubmit").classList.add('sent');
        document.getElementById("emailSubmit").value = 'INVITATION SENT';
      } else {
        reject(new Error(req.statusText));
      }
    };

    req.onerror = () => {
      reject(new Error("Network error"));
    };
    req.send("email="+formData);
  });
}







// var slackForm = document.getElementById('slackform');
// var slackFormInput = document.getElementById('mail');
//
// slackForm.onsubmit = function() {
// if (this.id == "join") {
//     location = "/slack/join/" + encodeURIComponent(slackFormInput.value);
// }
// return false;
// }

var form = document.getElementsByTagName('form')[0];
form.onsubmit = evt => {
  // let frmd = new FormData(form);
  evt.preventDefault();
  ajaxPost(form.action, document.getElementById("emailInput").value);
};



// Validate the Email address
// When valid, activate the submit button

document.getElementById('emailInput').addEventListener('keyup',validate,false);

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validate() {
  var email = document.getElementById("emailInput").value;
  var submit = document.getElementById("emailSubmit");
  if (validateEmail(email)) {
    submit.disabled = false;
  } else {
    submit.disabled = true;
  }
  return;
}
