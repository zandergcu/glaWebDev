function ajaxPost(url, formData){
  return new Promise((resolve, reject) => {
    let req = new XMLHttpRequest();
    req.open("POST", url);
    req.onload = () => {
      if (req.status === 200){
        resolve(req.response);
      } else {
        reject(new Error(req.statusText));
      }
    };

    req.onerror = () => {
      reject(new Error("Network error"));
    };

    req.send(formData);
  });
}

var form = document.getElementsByTagName('form')[0];
form.onsubmit = evt => {
  let frmd = new FormData(form);
  evt.preventDefault();
  ajaxPost(form.action, frmd);
};
