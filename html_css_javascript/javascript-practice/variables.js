let firstName = "Sam"
let lastName = "Nelson"
let fullName 
let name = "Linda"
let greeting = "Hi there"
let myPoints = 3

fullName = firstName + " " + lastName
console.log(fullName)



function prompt(){
    console.log(greeting +", "+ name)
}

function removePoint(){
    myPoints -= 1
}

function add3Points(){
    myPoints += 3
}

add3Points()
add3Points()
add3Points()
removePoint()
removePoint()

console.log(myPoints)

console.log("2"+2) //22
console.log(11+7) //18
console.log(6+"5") //65
console.log("My points: "+ 5+9) // My points: 59
console.log(2+2) //4
console.log("11"+"14") // 1114