
let firstCard = getRandomCard()
let secondCard = getRandomCard()
let card = getRandomCard()
let cards = [firstCard, secondCard] //Array

let sum 
let hasBlackjack = false
let isAlive = true
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")

sum = firstCard + secondCard

//console.log(sum)
function getRandomCard() {
    let randomNumber = Math.random() * 13
    let flooredNumber = Math.floor(randomNumber)
    return flooredNumber
}

function startGame() {
    renderGame()
}

//Render the current state of the game?

function renderGame() {
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
    cardsEl.textContent = "Cards: " 
   //console.log(message)

   for (let i =0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " "
   }
}

function drawCard() {
    //console.log("card was drawn")
    sum += card
    cards.push(card)
    renderGame()
    cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1] + " " + cards[2]
}

//console.log(message)