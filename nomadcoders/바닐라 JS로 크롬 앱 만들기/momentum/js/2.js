// 2.0
alert("hi")



// 2.2 [Variables]
const a = 5
const b = 2
const myName = "won"

console.log(a + b)
console.log(a * b)
console.log(a / b)
console.log("hello " + myName)



// 2.3 [const and let]
const a = 5
const b = 2
let myName = "won"

console.log(a + b)
console.log(a * b)
console.log(a / b)
console.log("hello " + myName)

myName = "wonjong"    // let은 수정 가능

console.log('your new name is ' + myName)



// 2.4 [Booleans]
const amIFat = true    // true/false/null
console.log(amIFat)

let something
console.log(something) // => undefined



// 2.5 [Arrays]
// const mon = "mon"
// const tue = "tue"
// const wed = "wed"
// const thu = "thu"
// const fri = "fri"
// const sat = "sat"
// const sun = "sund"

// const daysOfWeek = mon + tue + wed + thu + fri + sat + sun
// console.log(daysOfWeek)

// const daysOfWeek = [mon, tue, wed, thu, fri, sat, sun]
// const nonsense = [1, 2, "hello", false, null, true, undefined, "won"]
// console.log(daysOfWeek, nonsense)

const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"]
console.log(daysOfWeek)

console.log(daysOfWeek[4])    // index로 요소 접근

daysOfWeek.push("sun")        // 추가
console.log(daysOfWeek)



// 2.6 [Objects]
// const playerName = "won"
// const playerPoints = 10
// const playerHandsome = true
// const playerFat = false        // 하나하나 정의하기엔 너무 많음

const player = ["won", 121212, true, "little bit"]  // 배열로 하면 각 요소가 무엇을 뜻하는지 모름

const player = {
  name: "won",
  points: 10,
  handsome: true,
  fat: false,
}
console.log(player)
console.log(player.name)

player.fat = true          // 수정
console.log(player.fat)

player.lastName = "Jang"   // 추가
console.log(player)



// 2.7 ~ 2.8 [Functions]
// console.log("Hello my name is won")
// console.log("Hello my name is a")
// console.log("Hello my name is b")
// console.log("Hello my name is c")
// console.log("Hello my name is d")
// console.log("Hello my name is e")     // 너무 많은 반복

// function sayHello() {
//   console.log("Hello my name is ")
// }
// sayHello()
// sayHello("won")
// sayHello("a")
// sayHello("d")      // 출력 결과가 모두 동일

function sayHello(nameOfPerson, age) {
  console.log("Hello my name is " + nameOfPerson + " and I'm " + age)
}
sayHello("won", 30)
sayHello("a", 1)
sayHello("d", 2)

function plus(a, b) {
  console.log(a + b)
}
plus(8, 60)

function divide(a, b) {
  console.log(a / b)
}
divide(98, 20)

const player = {
  name: "won",
  sayHello: function (otherPersonsName) {
    console.log("hello " + otherPersonsName + " nice to meet you!")
  },
}
player.sayHello("a")



// 2.9 ~ 2.10 [Recap]
function minusFive(arg) {   // 여러 argument를 보내도 하나만 받음 (에러 없음)
  console.log(arg - 5)      // => 0
}
// console.log(arg - 5)        // => Error (함수 밖에서 arg 사용 못함)
minusFive(5, 10, 12, 34, 4, 5, 6, 7)

// const calculator = {
//   plus: function(a, b) {
//     console.log(a + b)
//   },
//   minus: function(a, b) {
//     console.log(a - b)
//   },
//   times: function(a, b) {
//     console.log(a * b)
//   },
//   divide: function(a, b) {
//     console.log(a / b)
//   },
//   power: function(a, b) {
//     console.log(a ** b)
//   },
// }
// calculator.plus(2, 3)
// calculator.minus(2, 3)
// calculator.times(2, 3)
// calculator.divide(2, 3)
// calculator.power(2, 3)



// 2.11 [Returns]
// const age = 28
// function calculateKrAge(ageOfForeigner) {
//   return ageOfForeigner + 2
// }
// const KrAge = calculateKrAge(age)
// console.log(KrAge)

const calculator = {
  plus: function(a, b) {
    return a + b
  },
  minus: function(a, b) {
    return a - b
  },
  times: function(a, b) {
    return a * b
  },
  divide: function(a, b) {
    return a / b
  },
  power: function(a, b) {
    return a ** b
  },
}
const plusResult = calculator.plus(2, 3)
const minusResult = calculator.minus(plusResult, 10)
const timesResult = calculator.times(10, minusResult)
const divideResult = calculator.divide(timesResult, plusResult)
const powerResult = calculator.power(divideResult, minusResult) // return 하여 변수에 저장하면 상호의존적인 연산 가능



// 2.13 [Conditionals]
// const age = prompt("How old are you?")  // prompt: 과거의 방법 (사용자가 입력하기 전까지 실행 멈춤, 스타일링 못함)
// console.log(typeof age)                 // 무엇을 입력해도 string

// console.log(typeof parseInt(age))       // => number

// const age = parseInt(prompt("How old are you?"))
// console.log(age)



// 2.14 [Conditionals 2]
// const age = parseInt(prompt("How old are you?")) // 숫자 넣지 않으면 NaN
// console.log(isNaN(age))                          // 숫자 넣지 않으면 true

// if (isNaN(age)) {
//   console.log("Please write a number")
// } else {
//   console.log("Thank you for writing your age.")
// }



// 2.15 [Conditionals 3]
// const age = parseInt(prompt("How old are you?"))
// console.log(isNaN(age))

// if (isNaN(age) || age < 0) {
//   console.log("Please write a real positive number")
// } else if (age < 18) {
//   console.log("You are too young")
// } else if (age >= 18 && age <= 50) {
//   console.log("You can drink")
// } else if (age > 50 && age <= 80) {
//   console.log("You should exercise")
// } else if (age > 80) {
//   console.log("You can do whatever you want")
// }



// 2.16 [Recap]
const age = parseInt(prompt("How old are you?"))
console.log(isNaN(age))

if (isNaN(age) || age < 0) {          // ||: OR
  console.log("Please write a real positive number")
} else if (age < 18) {
  console.log("You are too young")
} else if (age >= 18 && age <= 50) {  // &&: AND
  console.log("You can drink")
} else if (age > 50 && age <= 80) {
  console.log("You should exercise")
} else if (age === 100) {             // ===: IS, !==: IS NOT (else if 조건의 범위에 따라 순서 유의)
  console.log("wow you are wise")
} else if (age > 80) {
  console.log("You can do whatever you want")
}