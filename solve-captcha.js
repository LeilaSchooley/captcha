let captchaImg = document.getElementById("captchaimg");
let canvas = document.createElement("canvas");

let formInput = document.querySelector("#captcha_code");
console.log(browser.tabs.getCurrent());

const { createWorker } = Tesseract;
const worker = createWorker({
  workerPath: "https://unpkg.com/tesseract.js@v2.0.0/dist/worker.min.js",
  langPath: "https://tessdata.projectnaptha.com/4.0.0",
  corePath: "https://unpkg.com/tesseract.js-core@v2.0.0/tesseract-core.wasm.js",
});
await worker.load();
await worker.loadLanguage("eng");
await worker.initialize("eng");
const {
  data: { text },
} = await worker.recognize(image);
console.log(text);
await worker.terminate();
