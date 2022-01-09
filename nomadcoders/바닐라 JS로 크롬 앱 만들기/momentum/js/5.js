// 5.0 [Intervals]
// const clock = document.querySelector("h2#clock")

// // function sayHello() {
// //   console.log("hello")
// // }

// function getClock() {
//   const date = new Date()
//   clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
// }

// // setInterval(sayHello, 5000)   // 5초 마다 sayHello 실행
// // setTimeout(sayHello, 5000)    // 5초 뒤 sayHello 실행

// getClock()                    // website load 되었을 때 시간 바로 표시
// setInterval(getClock, 1000)   // 이 후 1초 간격으로 바뀌도록



// 5.1 [PadStart]
"1".padStart(2, "0")    // "1"이 길이가 2가 아니라면 앞에 "0" 추가
"1".padEnd(2, "0")      // "1"이 길이가 2가 아니라면 뒤에 "0" 추가

const clock = document.querySelector("h2#clock")

function getClock() {
  const date = new Date()
  const hours = String(date.getHours()).padStart(2, "0")      // date.get~()의 타입은 number이므로 string으로 바꿔줘야 함 (padStart는 string만 받음)
  const minutes = String(date.getMinutes()).padStart(2, "0")
  const seconds = String(date.getSeconds()).padStart(2, "0")
  clock.innerText = `${hours}:${minutes}:${seconds}`
}

getClock()
setInterval(getClock, 1000)