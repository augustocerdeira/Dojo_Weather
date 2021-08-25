var changeUser = document.querySelector("#changeName")

function change() {
    changeUser.innerText =  "John Smith"
}


function removed(id){
    var element = document.querySelector(id)
    element.remove();
}

var count = 2;
var countElement = document.querySelector("#count")
function minusOne() {
    count--;
    countElement.innerText = count;
}

var countUp = 418;
var countIncrease = document.querySelector("#countUp")
function plusOne() {
    countUp++;
    countIncrease.innerText = countUp;
}