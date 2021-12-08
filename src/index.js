import Tesseract from "tesseract.js";

let captchaImg = document.getElementById("captchaimg");
let canvas = document.createElement("canvas");

let formInput = document.querySelector("#captcha_code");

Tesseract.recognize(
  "https://tesseract.projectnaptha.com/img/eng_bw.png",
  "eng",
  { logger: (m) => console.log(m) }
).then(({ data: { text } }) => {
  console.log(text);
});
