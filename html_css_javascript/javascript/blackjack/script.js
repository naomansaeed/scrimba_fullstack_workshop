
let firstCard // = getRandomCard()
let secondCard // = getRandomCard()
let card //= getRandomCard()
let cards = [] // [firstCard, secondCard] //Array

let sum 
let hasBlackjack = false
let isAlive = false
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")

//sum = firstCard + secondCard

//console.log(sum)
function getRandomCard() {
    let randomNumber = Math.random() * 13
    let flooredNumber = Math.floor(randomNumber)
    let newCard = flooredNumber + 1
    // return newCard
    // card value logic - cards in the deck get assigned numerical value accourding to rules of the game.
    if (newCard > 10) {
        return 10
    }
    else if (newCard === 1) {
        return 11
    }
    else return newCard
}

function startGame() {
    //initialize values
    firstCard = getRandomCard()
    secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    hasBlackjack = false
    isAlive = true
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

    // Players should not be able to draw if they’re already out (!isAlive) or have Blackjack.
    if (isAlive === false || hasBlackjack === true) {
        message = "We are having a problem"
        messageEl.textContent = message
        return //prevent drawing
    }
    let newCard = getRandomCard()
    sum += newCard
    cards.push(newCard)
    renderGame()
   // cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1] + " " + cards[2]
}

//console.log(message)