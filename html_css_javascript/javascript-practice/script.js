let username = "bob"
let message = "You have three new notifications."
let messageToUser = username + "! "+ message
let wish = "I'd like to watch the show \"The Lion King\"."
let p = document.getElementById("welcome-el")

console.log(messageToUser)
console.log(wish)

p.innerText = messageToUser

p.innerText += " ⚠"