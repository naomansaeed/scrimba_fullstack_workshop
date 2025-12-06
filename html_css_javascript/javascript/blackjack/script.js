
let firstCard = 10
let secondCard = 4
let card = 7
let sum 
let hasBlackjack = false
let isAlive = true
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")

sum = firstCard + secondCard

//console.log(sum)

function startGame() {
    if (sum <= 20) {
    message = "Do you want to draw a new card?"
    // console.log(message)
    }
    else if (sum === 21) {
    message = "You have got the blackjack!"
    // console.log(message)
    hasBlackjack = true
    }
    else {
    message = "You are out of the game!"
    // console.log (message)
    isAlive = false
    }
    messageEl.textContent = message
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
   //console.log(message)
}

function drawCard() {
    //console.log("card was drawn")
    sum += card
    startGame()
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard + " " + card
}

//console.log(message)