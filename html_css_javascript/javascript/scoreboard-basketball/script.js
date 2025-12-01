let scoreLeft = 0
let scoreRight = 0
//let output 

function oneLeft(){
    scoreLeft += 1
    document.getElementById("scr-left").innerText = scoreLeft
    //console.log(scoreLeft)
}

function twoLeft() {
    scoreLeft += 2
    document.getElementById("scr-left").innerText = scoreLeft
}

function threeLeft() {
    scoreLeft += 3
    document.getElementById("scr-left").innerText = scoreLeft
}

function oneRight() {
    scoreRight += 1
    document.getElementById("scr-right").innerText = scoreRight
}

function twoRight() {
    scoreRight += 2
    document.getElementById("scr-right").innerText = scoreRight
}

function threeRight() {
    scoreRight += 3
    document.getElementById("scr-right").innerText = scoreRight
}