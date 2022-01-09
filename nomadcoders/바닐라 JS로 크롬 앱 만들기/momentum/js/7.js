// 7.0 [Setup]
// const toDoForm = document.getElementById("todo-form")
// const toDoInput = toDoForm.querySelector("input")
// const toDoList = document.getElementById("todo-list")

// function handleToDoSubmit(event) {
//   event.preventDefault()
//   const newTodo = toDoInput.value        // input에 적은 내용 따로 저장 (초기화를 위해)
//   toDoInput.value = ""                   // input에 적은 내용 초기화 (작성 완료 시 input에서 값 사라지도록)
//   console.log(newTodo, toDoInput.value)
// }
// toDoForm.addEventListener("submit", handleToDoSubmit)



// 7.1 [Adding ToDos]
// const toDoForm = document.getElementById("todo-form")
// const toDoInput = toDoForm.querySelector("input")
// const toDoList = document.getElementById("todo-list")

// function paintToDo(newTodo) {
//   // console.log("i will paint", newTodo)
//   const li = document.createElement("li")     // 변수 이름은 아무거나 해도 됨
//   const span = document.createElement("span")
//   li.appendChild(span)        // li에 span 추가
//   span.innerText = newTodo
//   toDoList.appendChild(li)    // ul에 li 추가
// }

// function handleToDoSubmit(event) {
//   event.preventDefault()
//   const newTodo = toDoInput.value
//   toDoInput.value = ""
//   paintToDo(newTodo)
// }

// toDoForm.addEventListener("submit", handleToDoSubmit)



// 7.2 [Deleting To Dos]
// const toDoForm = document.getElementById("todo-form")
// const toDoInput = toDoForm.querySelector("input")
// const toDoList = document.getElementById("todo-list")

// function deleteTodo(event) {
//   // console.dir(event.target.parentElement.innerText)  // event 정보로 어떤 버튼이 삭제되는지 파악
//   const li = event.target.parentElement
//   li.remove()
// }

// function paintToDo(newTodo) {
//   // console.log("i will paint", newTodo)
//   const li = document.createElement("li")
//   const span = document.createElement("span")
//   span.innerText = newTodo
//   const button = document.createElement("button")   // 버튼 태그 생성
//   button.innerText = "❌"
//   button.addEventListener("click", deleteTodo)      // 버튼 클릭 시 이벤트 발생
//   li.appendChild(span)
//   li.appendChild(button)      // li에 button 추가
//   toDoList.appendChild(li)
// }

// function handleToDoSubmit(event) {
//   event.preventDefault()
//   const newTodo = toDoInput.value
//   toDoInput.value = ""
//   paintToDo(newTodo)
// }

// toDoForm.addEventListener("submit", handleToDoSubmit)



// 7.3 [Saving To Dos]
// const toDoForm = document.getElementById("todo-form")
// const toDoInput = toDoForm.querySelector("input")
// const toDoList = document.getElementById("todo-list")

// const toDos = []    // to do 저장할 변수

// function saveToDos() {
//   localStorage.setItem("todos", JSON.stringify(toDos))  // string으로 저장
// }

// function deleteTodo(event) {
//   const li = event.target.parentElement
//   li.remove()
// }

// function paintToDo(newTodo) {
//   const li = document.createElement("li")
//   const span = document.createElement("span")
//   span.innerText = newTodo
//   const button = document.createElement("button")
//   button.innerText = "❌"
//   button.addEventListener("click", deleteTodo)
//   li.appendChild(span)
//   li.appendChild(button)
//   toDoList.appendChild(li)
// }

// function handleToDoSubmit(event) {
//   event.preventDefault()
//   const newTodo = toDoInput.value
//   toDoInput.value = ""
//   toDos.push(newTodo)
//   paintToDo(newTodo)
//   saveToDos()
// }

// toDoForm.addEventListener("submit", handleToDoSubmit)



// 7.4 ~ 7.5 [Loading To Dos part One]
// const toDoForm = document.getElementById("todo-form")
// const toDoInput = toDoForm.querySelector("input")
// const toDoList = document.getElementById("todo-list")

// const TODOS_KEY = "todos"

// // const toDos = []    // toDo 저장할 변수
// let toDos = []      // 이전 toDo 가져오기 위해 let으로 정의

// function saveToDos() {
//   localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))  // string으로 저장
// }

// function deleteTodo(event) {
//   const li = event.target.parentElement
//   li.remove()
// }

// function paintToDo(newTodo) {
//   const li = document.createElement("li")     // 변수 이름은 아무거나 해도 됨
//   const span = document.createElement("span")
//   span.innerText = newTodo
//   const button = document.createElement("button")   // 버튼 태그 생성
//   button.innerText = "❌"
//   button.addEventListener("click", deleteTodo)      // 버튼 클릭 시 이벤트 발생
//   li.appendChild(span)        // li에 span 추가
//   li.appendChild(button)      // li에 button 추가
//   toDoList.appendChild(li)    // ul에 li 추가
// }

// function handleToDoSubmit(event) {
//   event.preventDefault()
//   const newTodo = toDoInput.value        // input에 적은 내용 따로 저장 (초기화를 위해)
//   toDoInput.value = ""                   // input에 적은 내용 초기화 (작성 완료 시 input에서 값 사라지도록)
//   toDos.push(newTodo)
//   paintToDo(newTodo)
//   saveToDos()
// }

// toDoForm.addEventListener("submit", handleToDoSubmit)

// // function sayHello(item) {
// //   console.log("this is the turn of", item)
// // }

// const savedToDos = localStorage.getItem(TODOS_KEY)
// // console.log(savedToDos)

// if (savedToDos !== null) {
//   const parsedToDos = JSON.parse(savedToDos)  // string -> array
//   // console.log(parsedToDos)
//   toDos = parsedToDos     // array에 덮어쓰는게 아니라 추가하기 위함
//   // parsedToDos.forEach((item) => console.log("this is the turn of", item))   // parsedToDos의 요소들을 하나씩 item이라는 변수로 활용
//   parsedToDos.forEach(paintToDo)
// }



// 7.6 ~ 7.8 [Deleting To Dos part One]
const toDoForm = document.getElementById("todo-form")
const toDoInput = toDoForm.querySelector("input")
const toDoList = document.getElementById("todo-list")

const TODOS_KEY = "todos"

let toDos = []      // toDo 업데이트 위해 let으로 정의

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))  // string으로 저장
}

function deleteTodo(event) {
  const li = event.target.parentElement
  li.remove()
  toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id))   // 삭제할 li의 id와 다른 toDo만 남김
  saveToDos()
}

function paintToDo(newTodo) {
  const li = document.createElement("li")     // 변수 이름은 아무거나 해도 됨
  li.id = newTodo.id    // toDo의 id값을 li의 id로 설정
  const span = document.createElement("span")
  span.innerText = newTodo.text
  const button = document.createElement("button")   // 버튼 태그 생성
  button.innerText = "❌"
  button.addEventListener("click", deleteTodo)      // 버튼 클릭 시 이벤트 발생
  li.appendChild(span)        // li에 span 추가
  li.appendChild(button)      // li에 button 추가
  toDoList.appendChild(li)    // ul에 li 추가
}

function handleToDoSubmit(event) {
  event.preventDefault()
  const newTodo = toDoInput.value        // input에 적은 내용 따로 저장 (초기화를 위해)
  toDoInput.value = ""                   // input에 적은 내용 초기화 (작성 완료 시 input에서 값 사라지도록)
  const newTodoObj = {
    text: newTodo,
    id: Date.now(), 
  }
  toDos.push(newTodoObj)
  paintToDo(newTodoObj)
  saveToDos()
}

toDoForm.addEventListener("submit", handleToDoSubmit)

const savedToDos = localStorage.getItem(TODOS_KEY)

if (savedToDos !== null) {  // localStorage에 저장된 것이 있다면
  const parsedToDos = JSON.parse(savedToDos)  // string -> array
  toDos = parsedToDos       // array에 덮어쓰는게 아니라 추가하기 위함
  parsedToDos.forEach(paintToDo)
}