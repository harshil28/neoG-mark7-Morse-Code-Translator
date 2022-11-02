var btnTranslate = document.querySelector("#output-button");
var textarea = document.querySelector("#text");
var outputDiv = document.querySelector("#output")

// var textURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

var textURL = "https://api.funtranslations.com/translate/morse.json"

function translateURL(text) {
    return textURL + "?" + "text=" + text;
}

function clickHandler() {
    console.log("clicked")
    // console.log(textarea.value);
    // outputDiv.innerText = "Translated to " + textarea.value;

    inputTxt = textarea.value;
    fetch(translateURL(inputTxt))
    .then(response => response.json())
    .then(json => {
        var translatedTxt = json.contents.translated;
        outputDiv.innerText = translatedTxt;
    })
};

btnTranslate.addEventListener("click", clickHandler)
// btnTranslate.addEventListener("click" , clickHandler)


