// let a = document.getElementById("start").innerHTML = Math.floor(Math.random() * 100) + 1;
// let b = document.getElementById("start_2").innerHTML = Math.floor(Math.random() * 100) + 1;
// let arr = ["+", "-", "/", "*"];
// let random = Math.floor(Math.random() * arr.length);
// let c = document.getElementById("operator").innerHTML = arr[random];
// console.log(a);
let arr = ["false", "tree", "forest", "oak", "pine", "fir", "maple", "willow", "rain", "hot"];
let helloAllcard = document.querySelectorAll(".word");

function random() {
    for (let i = 0; i < arr.length; i++) {
        helloAllcard[i].innerHTML = `<h2>${arr[Math.floor(Math.random() * arr.length)]}</h2>`;
    }
}
setTimeout(random, 0);
setInterval(random, 1500);
let display_word = document.querySelector(".display_word");
let display_hello = document.querySelector(".display_hello");

function disp_word() {
    display_hello.style.display = "none";
    display_word.style.display = "block";
}

function disp_hello() {
    display_word.style.display = "none";
    display_hello.style.display = "block";
}


// function display_hello() {

//     a.style.display = none;
//     b.style.display = block;
// }

let plus_btn = document.querySelector(".plus_hello");
let home_btn = document.querySelector(".back");

plus_btn.addEventListener("click", disp_word);

home_btn.addEventListener("click", disp_hello);




// function al() {
//     alert("hjbjbjb");
// };


// function alert() {
//     alert("hjbjbjb");
// }
// plus_btn.onclick = alert();
// alert();
// plus_btn.addEventListener("click", alert);

// class Card {
//     constructor(allCard, oneCard, oneWord) {
//         this.allCard = allCard;
//         this.oneCard = oneCard;
//         this.oneWord = oneWord;
//     }
//     randomCard() {
//         for (let i = 0; i < this.allCard.length; i++) {
//             this.allCard[i].innerHTML = `<h2>${arr[Math.floor(Math.random() * arr.length)]}</h2>`;




//         }
//     }

//     sayHello() {
//         console.log(this.oneWord.textContent);
//         for (let i = 0; i < arr.length; i++) {
//             if (this.oneWord.textContent == arr[i] && this.oneCard.addEventListener("click", sayHello, true)) {
//                 alert("ok");
//             }
//         }
//     }

//     // click() {
//     //     this.oneCard.addEventListener("click", sayHello, true);
//     // }
// }



// Card.randomCard();

// let firstCard = new Card(document.querySelectorAll('.word'), document.querySelector("#one_card"), document.querySelector('#one_word'));
// firstCard.randomCard();
// firstCard.click();

// console.log(firstCard.oneCard);

// firstCard.addEventListener("click", firstCard.sayHello, true);

// let spans = document.querySelectorAll('.word');
// let span = document.querySelector('#one_word');

// function random() {
//     for (let i = 0; i < spans.length; i++) {
//         spans[i].innerHTML = `<h2>${arr[Math.floor(Math.random() * arr.length)]}</h2>`;

//     }
// }

// random();


// let button = document.querySelector("#one_card");
// button.addEventListener("click", sayHello, true);

// function sayHello() {

//     let a = span.textContent;

//     for (let i = 0; i < arr.length; i++) {
//         if (a == arr[i]) {
//             alert("ok");
//         }



//     }
// }


// console.log(arr);



// console.log(spans);












// class Application {
//     constructor(word) {
//         this.word = word;
// this.trns = trancelate;
// this.sentence = sentence;
// this.trnsSentence = tranceSentence;






// published() {
//     let a = document.querySelector(".word");
// let b = document.querySelector(".trns_word");
// let c = document.querySelector(".sentence");
// let d = document.querySelector(".trans");
// a.innerHTML = `<h2>${this.word}</h2>`;
// b.innerHTML = this.trns;
// c.innerHTML = this.sentence;
// d.innerHTML = this.trnsSentence;

// }

// transSentense() {
//     if (d.innerHTML == sentence) {
//         d.innerHTML = tranceSentence;
//     } else d.innerHTML = sentence;
// }




// }



// let noTrue = new Application("False");

// noTrue.published();
// noTrue.transSentense();

// console.log(noTrue);