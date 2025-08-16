// String
var city = "I live in Bengaluru"
var city="I love Chennai"
console.log(city)
console.log(typeof city)
// String
var city1 = "I live in Bengaluru"
var city1 = "I love Trichy"
console.log(city1)
console.log(typeof city1)
//Identifier 'city' has already been declared error will occur if we declare both var city and let city 
// but we can declare var city twice as it will replace the existing value

// Number
let marks = 100
console.log(marks)
console.log(typeof marks)
// Number 
var marks1 = 200
console.log(marks1)
console.log(typeof marks1)
// Boolean
let isWeekend = true
console.log(typeof isWeekend)
if (isWeekend) {
    var a = "Weekend mode on: "
    console.log(a + "Relax")
} else {
    console.log("work")
}
var isWeekend1 = false
let b = "Focus on work please "
console.log(typeof b)
console.log(typeof isWeekend1)
if (isWeekend1) {
    console.log("Relax")
} else {
    console.log(b + "work")
}
// Undefined
let futureGoal
console.log(typeof futureGoal)
console.log(futureGoal)