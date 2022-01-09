// 4.0 [Input Values]
// const loginForm = document.getElementById("login-form")
// const loginForm = document.querySelector("#login-form")
// const loginInput = loginForm.querySelector("input")
// const loginButton = loginForm.querySelector("button")

// const loginInput = document.querySelector("#login-form input")
// const loginButton = document.querySelector("#login-form button")

// function onLoginBtnClick() {
//   console.dir(loginInput.value)
//   // console.log("click!!!")

//   console.log("hello", loginInput.value)
// }

// loginButton.addEventListener("click", onLoginBtnClick)



// 4.1 [Form Submission]
// function onLoginBtnClick() {
//   // const username = loginInput.value
//   // if (username === "") {
//   //   alert("Please write your name")
//   // } else if (username.length > 15) {
//   //   alert("Your name is too long")
//   // }

//   const username = loginInput.value   // html에서 form 내부의 input으로 위 기능 구현 가능
//   console.log(username)
// }

// loginButton.addEventListener("click", onLoginBtnClick)



// 4.2 ~ 4.3 [Events]
// const loginForm = document.querySelector("#login-form")
// const loginInput = document.querySelector("#login-form input")

// // function onLoginSubmit() {
// //   const username = loginInput.value
// //   console.log(username)
// // }

// function onLoginSubmit(event) {    // 첫 번째 argument는 JS가 정보 제공
//   event.preventDefault()           // 브라우저의 기본 동작 막음 (새로고침)
//   console.log(event)
//   console.log(loginInput.value)
// }
// loginForm.addEventListener("submit", onLoginSubmit)

// const link = document.querySelector("a")

// function handleLinkClick(event) {
//   // alert("clicked")
//   event.preventDefault()
//   // console.dir(event)
// }
// link.addEventListener("click", handleLinkClick)



// 4.4 [Getting Username]
// const loginForm = document.querySelector("#login-form")
// const loginInput = document.querySelector("#login-form input")
// const greeting = document.querySelector("#greeting")

// const HIDDEN_CLASSNAME = "hidden"     // 중요한 정보 아니라서 대문자

// function onLoginSubmit(event) {
//   event.preventDefault()
//   loginForm.classList.add(HIDDEN_CLASSNAME)     // form 숨기기
//   const username = loginInput.value

//   // greeting.innerText = "Hello " + username
//   greeting.innerText = `Hello ${username}`
//   greeting.classList.remove(HIDDEN_CLASSNAME)
// }
// loginForm.addEventListener("submit", onLoginSubmit)



// 4.5 [Saving Username]
// console에 직접 작성
// localStorage
// localStorage.setItem("username", "won")
// localStorage.getItem("username")
// localStorage.removeItem("username")

// const loginForm = document.querySelector("#login-form")
// const loginInput = document.querySelector("#login-form input")
// const greeting = document.querySelector("#greeting")

// const HIDDEN_CLASSNAME = "hidden"

// function onLoginSubmit(event) {
//   event.preventDefault()
//   loginForm.classList.add(HIDDEN_CLASSNAME)
//   const username = loginInput.value
//   localStorage.setItem("username", username)    // local storage에 저장되지만 아직 새로고침하면 날아감
//   greeting.innerText = `Hello ${username}`
//   greeting.classList.remove(HIDDEN_CLASSNAME)
// }
// loginForm.addEventListener("submit", onLoginSubmit)



// 4.6 [Loading Username]
const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input")
const greeting = document.querySelector("#greeting")

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"

function onLoginSubmit(event) {
  event.preventDefault()
  loginForm.classList.add(HIDDEN_CLASSNAME)
  const username = loginInput.value             // usernameThatTheUserWrote
  localStorage.setItem(USERNAME_KEY, username)
  paintGreetings(username)
}

function paintGreetings(username) {             // 반복 방지 함수
  // const username = localStorage.getItem(USERNAME_KEY)   // username을 한 번 더 찾긴 하지만, 함수 호출 시 arg 필요 없음
  greeting.innerText = `Hello ${username}`
  greeting.classList.remove(HIDDEN_CLASSNAME)
}

const savedUsername = localStorage.getItem(USERNAME_KEY)

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME)
  loginForm.addEventListener("submit", onLoginSubmit)
} else {
  paintGreetings(savedUsername)
}