
let firstCard = 10
let secondCard = 11
let sum 
let hasBlackjack = false
let isAlive = true
let message = ""

sum = firstCard + secondCard

//console.log(sum)

if (sum <= 20) {
    message = "Do you want to draw a new card? 😊"
   // console.log(message)
}
else if (sum === 21) {
    message = "Wohoo! You have ot the blackjack! 🥳"
   // console.log(message)
    hasBlackjack = true
}
else {
    message = "You are out of the game! 😭"
   // console.log (message)
    isAlive = false
}

console.log(message)