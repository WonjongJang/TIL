// 3.0 [The Document Object]
// console에 직접 작성
document        // HTML에 접근
document.title  // => Momentum
document.title = "Hi"



// 3.1 [HTML in Javascript]
// const title = document.getElementById("title")
// console.dir(title)   // dir: element 내부

// title.innerText = "Got you!"

// console.log(title.id)
// console.log(title.className)



// 3.2 [Searching For Elements]
// const hellos = document.getElementsByClassName("hello")
// console.log(hellos)

// const title = document.getElementsByTagName("h1")
// console.log(title)

const title1 = document.querySelector(".hello h1")    // 여러개면 첫번째꺼만 가져옴
title1.innerText = "hello"
console.log(title1)

const title2 = document.querySelectorAll(".hello h1") // array로 모두 가져옴
console.log(title2)



// 3.3 ~ 3.5 [Events]
// const h1 = document.querySelector("div.hello:first-child h1")

// function handleTitleClick() {
//   // console.log("title was clicked!")
//   h1.style.color = "blue"
// }

// function handleMouseEnter() {
//   // console.log("mouse is here")
//   h1.innerText = "mouse is here!"
// }

// function handleMouseLeave() {
//   h1.innerText = "mouse is gone!"
// }

// function handleWindowResize() {
//   document.body.style.backgroundColor = "tomato"
// }

// function handleWindowCopy() {
//   alert("copier!")
// }

// function handleWindowOffline() {
//   alert("SOS no WIFI!")
// }

// function handleWindowOnline() {
//   alert("ALL GOOOD")
// }

// h1.addEventListener("click", handleTitleClick)        // 사용자가 아닌 JS가 함수 실행하도록 하기 위해 () 넣지 않음
// h1.addEventListener("mouseenter", handleMouseEnter)   // 마우스 가까이 가면 이벤트 발생
// h1.addEventListener("mouseleave", handleMouseLeave)   // 마우스 멀리 가면 이벤트 발생

// 참고 (아래 코드가 아닌 EventListener를 쓰는 이유는 나중에 .removeEventListener로 EventListener를 제거할 수 있기 때문)
// h1.onclick = handleTitleClick                      
// h1.onmouseenter = handleMouseEnter

// window.addEventListener("resize", handleWindowResize) // 창 크기 변경 시 이벤트 발생
// window.addEventListener("copy", handleWindowCopy)     // 복사 시 이벤트 발생
// window.addEventListener("copy", handleWindowOffline)  // 인터넷 연결 없을 때 이벤트 발생
// window.addEventListener("copy", handleWindowOnline)   // 인터넷 연결 있을 때 이벤트 발생



// 3.6 ~ 3.8 [CSS in Javascript]
const h1 = document.querySelector("div.hello:first-child h1")

function handleTitleClick() {
  // if (h1.style.color === "blue") {
  //   h1.style.color = "tomato"
  // } else {
  //   h1.style.color = "blue"
  // }

  // const currentColor = h1.style.color
  // let newColor
  // if (currentColor === "blue") {
  //   newColor = "tomato"
  // } else {
  //   newColor = "blue"
  // }
  // h1.style.color = newColor

  // h1.className = "active"
  // console.log(h1.className)

  // if (h1.className === "active") {
  //   h1.className = ""
  // } else {
  //   h1.className = "active"
  // }

  // const clickedClass = "clicked"              // string을 변수에 저장해야 Error 잡을 수 있음
  // const clickedClass = "clicked sexy-font"    // sexy-font를 살리기 위해 단순히 변수에 같이 넣으면 class 추가마다 모두 바꿔줘야함
  // if (h1.className === clickedClass) {
  //   h1.className = ""
  // } else {
  //   h1.className = clickedClass
  // }

  // const clickedClass = "clicked"
  // if (h1.classList.contains(clickedClass)) {   // classList 활용
  //   h1.classList.remove(clickedClass)
  // } else {
  //   h1.classList.add(clickedClass)
  // }

  h1.classList.toggle("clicked")                // toggle 활용 (단 한 줄로 classList 기능)
}

h1.addEventListener("click", handleTitleClick)        // 사용자가 아닌 JS가 함수 실행하도록 하기 위해 () 넣지 않음
