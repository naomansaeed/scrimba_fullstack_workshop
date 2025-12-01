
let firstCard = 6
let secondCard = 8
let sum 

sum = firstCard + secondCard

//console.log(sum)

if (sum < 21) {
    console.log("Do you want to draw a new card? 😊")
}
else if (sum === 21) {
    console.log("Wohoo! You have ot the blackjack! 🥳")
}
else if (sum > 21) {
    console.log ("You are out of the game! 😭")
}