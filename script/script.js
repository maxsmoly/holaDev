// function readTextFile(file, callback) {
//     let rawFile = new XMLHttpRequest();
//     rawFile.overrideMimeType("application/json");
//     rawFile.open("GET", "https://data.smoliakov-maxim.workers.dev/", true);
//     rawFile.onreadystatechange = function () {
//         if (rawFile.readyState === 4 && rawFile.status == "200") {
//             callback(rawFile.responseText);
//             return;

//         }
//     };
//     rawFile.send(null);

// }







// let link = "https://data.smoliakov-maxim.workers.dev/";
// //usage:
// let abr = readTextFile(link, function (page) {
//     let data = JSON.parse(page);
//     console.log(data);




// // });



// async function getResponse() {
//     let response = await fetch('https://data.smoliakov-maxim.workers.dev/');
//     let content = await response.json();

//     console.log(content);

// }

// let f = Object.entries(content);


// console.log(f[0].length);





// 

//     // console.log(f[0][1].translate);

//     // localStorage.page = f[0][1];

//     // console.log(f.indexOf("page"));


// }









// if (localStorage.getItem('Good') !== null) {
//     let returnObj = JSON.parse(localStorage.getItem("Good"));
//     console.log(returnObj.word);

// }


// getResponse();

// function req() {
//     const request = new XMLHttpRequest();
//     request.open("GET", "https://data.smoliakov-maxim.workers.dev/");
//     request.setRequestHeader("Content-type", "application/json; charset=utf-8");
//     request.send();
//     request.addEventListener("readystatechange", function () {
//         if (request.readyState === 4 && request.status == 200) {
//             let data = JSON.parse(request.response);
//             console.log(data);
//         } else {
//             console.error("ошибка");
//         }
//     });
// }
// req();
let arr = Object.keys(localStorage);
let color = ["#007bff", "#6610f2", "#6f42c1", "#e83e8c", "#dc3545", "#fd7e14", "#ffc107", "#28a745", "#20c997", "#17a2b8", "#343a40", "#28a745"];

let newWord = document.querySelector(".addNewWord");
let newTRNS = document.querySelector(".addNewTrns");
let saveBTN = document.querySelector(".saveNew");
let favorWord = document.querySelector(".favorite_word");



function AddNewWord() {

    newWord.value = newWord.value.toLowerCase();
    newTRNS.value = newTRNS.value.toLowerCase();
    let itemObj = {};
    itemObj.word = newWord.value;
    itemObj.trns = newTRNS.value;
    let ser = JSON.stringify(itemObj);
    localStorage.setItem(newWord.value, ser);
    alert(newWord.value + newTRNS.value);
    newWord.value = "";
    newTRNS.value = "";
}

saveBTN.addEventListener("click", AddNewWord);

function favoriteShow() {
    for (let i = 0; i < arr.length; i++) {
        let favShow = JSON.parse(localStorage.getItem(arr[i]));
        favorWord.innerHTML += `<h2>${favShow.word}<span class = "invisib"> - ${favShow.trns}</span></h2`;
    }
}

favoriteShow();




function funcGame() {
    let a = document.querySelector(".invisib");
    if (a.style.display !== "none") {
        a.style.display = "none";
    } else {
        a.style.display = "inline";
    }
}

let game = document.querySelector('.game_btn');
game.addEventListener('click', funcGame, true);

let helloAllcard = document.querySelectorAll(".popular_card");

function random() {
    for (let i = 0; i < helloAllcard.length; i++) {
        helloAllcard[i].innerHTML = `<h2>${arr[Math.floor(Math.random() * arr.length)]}</h2>`;
        helloAllcard[i].style.backgroundColor = `${color[Math.floor(Math.random() * color.length)]}`;
    }
}
random();

for (let i = 0; i < helloAllcard.length; i++) {
    helloAllcard[i].addEventListener("click", showCard, true);
}

let word = document.querySelector(".word_word");
let wordTRNS = document.querySelector(".word_trns");
let wordCard = document.querySelector(".card_word");

function showCard() {
    let parse = JSON.parse(localStorage.getItem(this.textContent));
    word.innerHTML = `<h2>${parse.word}</h2>`;
    wordTRNS.innerHTML = `<h3>${parse.trns}</h3>`;
    wordCard.style.backgroundColor = `${color[Math.floor(Math.random() * color.length)]}`;
    dispWord();
}

let srcINP = document.querySelector(".input_search");
let srcBTN = document.querySelector(".search_button");

function search() {
    srcINP.value = srcINP.value.toLowerCase();
    let parse = JSON.parse(localStorage.getItem(srcINP.value));
    word.innerHTML = `<h2>${parse.word}</h2>`;
    wordTRNS.innerHTML = `<h3>${parse.trns}</h3>`;
    wordCard.style.backgroundColor = `${color[Math.floor(Math.random() * color.length)]}`;
    dispWord();
}

srcBTN.addEventListener("click", search, true);


let nextBTN = document.querySelector(".next");

function Next() {
    let parse = JSON.parse(localStorage.getItem(arr[Math.floor(Math.random() * arr.length)]));
    word.innerHTML = `<h2>${parse.word}</h2>`;
    wordTRNS.innerHTML = `<h3>${parse.trns}</h3>`;
    wordCard.style.backgroundColor = `${color[Math.floor(Math.random() * color.length)]}`;
    dispWord();
}

nextBTN.addEventListener("click", Next, true);


let display_word = document.querySelector(".display_word");
let display_hello = document.querySelector(".display_hello");
let favorite = document.querySelector(".favorite");
// let game = document.querySelector(".game");
let addNew = document.querySelector(".addNew");

function dispAddnew() {
    display_hello.style.display = "none";
    display_word.style.display = "none";
    favorite.style.display = "none";
    // game.style.display = "none";
    addNew.style.display = "block";
}
let plusBtn = document.querySelectorAll(".plus");

for (let i = 0; i < plusBtn.length; i++) {
    plusBtn[i].onclick = dispAddnew;

}

let elect = document.querySelector(".word_elect");
elect.addEventListener("click", dispFavorite, true);

// plusBtn.addEventListener("click", dispAddnew);

// function dispGame() {
//     display_hello.style.display = "none";
//     display_word.style.display = "none";
//     favorite.style.display = "none";
//     game.style.display = "block";
//     addNew.style.display = "none";
// }
// let gameBtn = document.querySelector(".game_btn");

// gameBtn.addEventListener("click", dispGame);

function dispFavorite() {
    display_hello.style.display = "none";
    display_word.style.display = "none";
    favorite.style.display = "block";
    // game.style.display = "none";
    addNew.style.display = "none";
}
let favoriteBtn = document.querySelector(".elect");

favoriteBtn.addEventListener("click", dispFavorite);


function dispWord() {
    display_hello.style.display = "none";
    display_word.style.display = "block";
    favorite.style.display = "none";
    // game.style.display = "none";
    addNew.style.display = "none";
}
// let plusBtn = document.querySelector(".plus_hello");

// plusBtn.addEventListener("click", dispAddnew);

function dispHello() {
    display_hello.style.display = "block";
    display_word.style.display = "none";
    favorite.style.display = "none";
    // game.style.display = "none";
    addNew.style.display = "none";
}


let homeBtn = document.querySelectorAll(".back");
for (let i = 0; i < homeBtn.length; i++) {
    homeBtn[i].onclick = dispHello;
}


// homeBtn.addEventListener("click", dispHello);

let text = document.querySelector(".word_word");
console.log(text.textContent);

function speak() {

    speechSynthesis.speak(new SpeechSynthesisUtterance(text.textContent));


}
// speak();

let soundBTN = document.querySelector(".sound");

soundBTN.addEventListener("click", speak);