let arr = [];

function jsonSet(a, b) {
    let serialObj = JSON.stringify(a);
    localStorage.setItem(`${b}`, serialObj);
    arr.push(b);
}

let good = {
    word: "Good",
    translate: "хороший, нормальный",
    sentense: "I feel good",
    trnSentense: "Я чувствую себя хорошо",
    imgLink: "url(../img/Cool\ Kids\ -\ Standing5.png)"
};

jsonSet(good, good.word);

let tree = {
    word: "Tree",
    translate: "дерево",
    sentense: "I feel tree",
    trnSentense: "Я чувствую себя дерево",
    imgLink: "url(../img/Cool\ Kids\ -\ Standing7.png)"
};

jsonSet(tree, tree.word);

let forest = {
    word: "Forest",
    translate: "лес",
    sentense: "I feel forest",
    trnSentense: "Я чувствую себя лес",
    imgLink: "url(../img/Cool\ Kids\ -\ Standing2.png)"
};

jsonSet(forest, forest.word);

let rain = {
    word: "Rain",
    translate: "дождь",
    sentense: "I feel rain",
    trnSentense: "Я чувствую себя дождь",
    imgLink: "url(../img/Cool\ Kids\ -\ Standing1.png)"
};

jsonSet(rain, rain.word);

let oak = {
    word: "Oak",
    translate: "дуб",
    sentense: "I feel oak",
    trnSentense: "Я чувствую себя дуб",
    imgLink: "url(../img/Cool\ Kids\ -\ Standing5.png)"
};

jsonSet(oak, oak.word);

let helloAllcard = document.querySelectorAll(".popular_card");

function random() {
    for (let i = 0; i < helloAllcard.length; i++) {
        helloAllcard[i].innerHTML = `<h2>${arr[Math.floor(Math.random() * arr.length)]}</h2>`;
    }
}
random();

let a = document.querySelectorAll(".pop_word");

function shoWord() {


    alert(a.textContent);

}






for (let i = 0; i < helloAllcard.length; i++) {
    helloAllcard[i].onclick = shoWord;
}


// let one_card = document.querySelector("#one_card");

// function show() {}






// console.log(one_card.textContent);



// function show() {

//     let returnObj = JSON.parse(localStorage.getItem("myKey")); //спарсим его обратно объект


// }

















let display_word = document.querySelector(".display_word");
let display_hello = document.querySelector(".display_hello");
let favorite = document.querySelector(".favorite");
let game = document.querySelector(".game");
let addNew = document.querySelector(".addNew");

function dispAddnew() {
    display_hello.style.display = "none";
    display_word.style.display = "none";
    favorite.style.display = "none";
    game.style.display = "none";
    addNew.style.display = "block";
}
let plusBtn = document.querySelectorAll(".plus");

for (let i = 0; i < plusBtn.length; i++) {
    plusBtn[i].onclick = dispAddnew;

}

// plusBtn.addEventListener("click", dispAddnew);

function dispGame() {
    display_hello.style.display = "none";
    display_word.style.display = "none";
    favorite.style.display = "none";
    game.style.display = "block";
    addNew.style.display = "none";
}
let gameBtn = document.querySelector(".game_btn");

gameBtn.addEventListener("click", dispGame);

function dispFavorite() {
    display_hello.style.display = "none";
    display_word.style.display = "none";
    favorite.style.display = "block";
    game.style.display = "none";
    addNew.style.display = "none";
}
let favoriteBtn = document.querySelector(".elect");

favoriteBtn.addEventListener("click", dispFavorite);


function dispWord() {
    display_hello.style.display = "none";
    display_word.style.display = "block";
    favorite.style.display = "none";
    game.style.display = "none";
    addNew.style.display = "none";
}
// let plusBtn = document.querySelector(".plus_hello");

// plusBtn.addEventListener("click", dispAddnew);

function dispHello() {
    display_hello.style.display = "block";
    display_word.style.display = "none";
    favorite.style.display = "none";
    game.style.display = "none";
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