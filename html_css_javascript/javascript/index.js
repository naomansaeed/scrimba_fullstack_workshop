// document.getElementById("count").innerText = 5
let count = 0 
// let humanDogRatio = 7 
// let myAge = 32
let saved = 0
// dogAge = myAge * humanDogRatio

// let bonusPoints = 50

// bonusPoints = bonusPoints + 50
// bonusPoints = bonusPoints - 75
// bonusPoints = bonusPoints + 45

// console.log(bonusPoints)

function increment() {
    // inrement the count veriable
    count += 1
    // grab the h2 element that has 'count-el' id & change its inner text to the value of the count variable
    document.getElementById("count-el").textContent = count
}

function save() {
    // store the present value of count in saved variable
    saved =  count + " - "
    // add the  value of saved to the previous entries string
    document.getElementById("saved").textContent += saved
}

function reset(){
    // get the current value of the count-el reset it to 0 and store in the count variable
    count = document.getElementById("count-el").textContent = 0
}