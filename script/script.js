// let a = document.getElementById("start").innerHTML = Math.floor(Math.random() * 100) + 1;
// let b = document.getElementById("start_2").innerHTML = Math.floor(Math.random() * 100) + 1;
// let arr = ["+", "-", "/", "*"];
// let random = Math.floor(Math.random() * arr.length);
// let c = document.getElementById("operator").innerHTML = arr[random];
// console.log(a);
let arr = ["false", "tree", "forest", "oak", "pine", "fir", "maple", "willow", "rain", "hot"];



let spans = document.querySelectorAll('.word');


function random() {
    for (let i = 0; i < spans.length; i++) {
        spans[i].innerHTML = `<h2>${arr[Math.floor(Math.random() * arr.length)]}</h2>`;

    }
}

setInterval(random, 2000);
// random();
console.log(arr);



console.log(spans);












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