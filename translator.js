/** @format */

var txtinp = document.querySelector(".ta");
var textoutp = document.querySelector(".outputta");
var button = document.querySelector(".btn");
var server = "https://api.funtranslations.com/translate/kraut.json";

button.addEventListener("click", fireevent);
function fireevent() {
  let inp = txtinp.value;
  if (inp != "") {
    gettranslate(inp);
  } else {
    alert("Please enter some text!");
  }
}

function tomakeurl(text) {
  return server + "?" + "text=" + text;
}

function gettranslate(text) {
  fetch(tomakeurl(text))
    .then((result) => {
      return result.json();
    })
    .then((result) => {
      textoutp.innerText = result.contents.translated;
    })
    .catch((err) => {
      console.log(err);
      alert("sorry. something went wrong!");
    });
}
