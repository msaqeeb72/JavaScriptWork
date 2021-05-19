let url = "https://type.fit/api/quotes";
let quotesData = {};


let quote = document.getElementById("text_quote");
let author = document.getElementById("text_author");
let download = document.getElementById("btn_down");
let background = document.getElementById("btn_back");
let refresh = document.getElementById("btn_ref");
let divBack = document.getElementById("app");



let pro = new Promise(function(response, reject) {
    fetch(url).then(res => res.json())
        .then((out) => {
            response(out);

        });


});
pro.then(
    function(value) { myDisplayer(value); },
    function(error) { myDisplayer(error); }

);

function myDisplayer(data) {
    quotesData = data;
    changeBackgroundColor();
    let num = Math.floor((Math.random() * 1643) + 1);
    quote.innerHTML = data[num].text;
    author.innerHTML = data[num].author;

}

background.addEventListener("click", function() {
    changeBackgroundColor();
});

refresh.addEventListener("click", function() {

    let num = Math.floor((Math.random() * 1643) + 1);
    quote.innerHTML = quotesData[num].text;
    author.innerHTML = quotesData[num].author;
});

download.addEventListener("click", function() {
    html2canvas(document.querySelector("#app")).then(canvas => {
        var downLink = document.createElement("a");
        downLink.download = "Quote" + ".png"
        var image = canvas.toDataURL("image/jpg");
        downLink.href = image;
        downLink.click();
    });
});

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeBackgroundColor() {
    let colorCode = getRandomColor();
    divBack.style.backgroundColor = colorCode;
}