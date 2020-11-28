let a = document.getElementById("start").innerHTML = Math.floor(Math.random() * 100) + 1;
let b = document.getElementById("start_2").innerHTML = Math.floor(Math.random() * 100) + 1;
let arr = ["+", "-", "/", "*"];
let random = Math.floor(Math.random() * arr.length);
let c = document.getElementById("operator").innerHTML = arr[random];
console.log(a);