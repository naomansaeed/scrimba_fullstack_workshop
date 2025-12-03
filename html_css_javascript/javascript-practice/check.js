let age = 22
let oldAge = 100
let hasDiscountCode = true

if (age <= 21) {
    console.log ("You are not allowed to enter")
}
else {
    console.log("Welcome!")
} 

// second example

if (oldAge < 100 ) {
    console.log("Not Eligible Yet!")
}
else if (oldAge === 100) {
    console.log("Here is Your Birthday card from the king!")
}
else {
    console.log("You have already gotten a card.")
}

// boolean

function processOrder() {
    if (hasDiscountCode) {
        console.log("Diacount Apllied to Food Order")
        hasDiscountCode = false
    } else {
        console.log("No Discount Available")
    }
}

//call the function

processOrder()
processOrder()

// bolean practice

console.log(4===3) //false
console.log(5 > 2) //true
console.log(12 > 12) //false
console.log(3 < 0) //false
console.log(3 >= 3) //true
console.log(11 <= 11) //true
console.log(3 <= 2) //false