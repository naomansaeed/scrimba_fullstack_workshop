// document.getElementById("count").innerText = 5
let count = 0 
// let humanDogRatio = 7 
// let myAge = 32

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
    document.getElementById("count-el").innerText = count
}

function save() {
    console.log(count)
}