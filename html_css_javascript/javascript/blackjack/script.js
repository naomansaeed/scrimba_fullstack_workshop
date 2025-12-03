
let firstCard = 10
let secondCard = 11
let sum 
let hasBlackjack = false
let isAlive = true 

sum = firstCard + secondCard

//console.log(sum)

if (sum <= 20) {
    console.log("Do you want to draw a new card? 😊")
}
else if (sum === 21) {
    console.log("Wohoo! You have ot the blackjack! 🥳")
    hasBlackjack = true
}
else {
    console.log ("You are out of the game! 😭")
    isAlive = false
}