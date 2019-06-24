let inputInfo = document.getElementById("inputID");
let styleInfo = document.getElementById("styleID");

function setCard() {
    let card = document.getElementById(inputInfo.value);
    card.style.color = styleInfo.value;
}

function reset() {
    document.getElementById("diamonds", "hearts", "spades", "clubs").removeAttribute("style");
}