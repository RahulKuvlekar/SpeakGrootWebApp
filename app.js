var btnTranslator = document.querySelector("#btn-translator");
var textInput = document.querySelector(".text-area");
var textOutput = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/groot.json";
console.log("Started....")


function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server! try again after some time")
}

function getTranslator(input)
{
    var serURL = serverURL+"?"+"text="+input;
    return serURL;
}

function clickHandler() {
    var input=textInput.value;
    
    fetch(getTranslator(input))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        textOutput.innerText = translatedText;
    })
    .catch(errorHandler)


}

btnTranslator.addEventListener("click", clickHandler);