// 8.0 [Geolocation]
// function onGeoOk(position) {
//   const lat = position.coords.latitude
//   const lng = position.coords.longitude
//   console.log("You live in", lat, lng)
// }

// function onGeoError() {
//   alert("Can't find you. No weather for you.")
// }

// navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError) // argments는 실행 성공했을 때, 실패했을 때 두 가지



// 8.1 [Weather API]
const API_KEY = "6594ca47e3c6b4341ba3532e18f7a0cf"

function onGeoOk(position) {
  const lat = position.coords.latitude
  const lon = position.coords.longitude
  // const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  // console.log(url)
  fetch(url)  // fetch: 약속 (JS가 url을 부름)
    .then(response => response.json())
    .then(data => {
      // console.log(data.name, data.weather[0].main)
      const weather = document.querySelector("#weather span:first-child")
      const city = document.querySelector("#weather span:last-child")
      city.innerText = data.name                                          // 도시
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`   // 날씨 / 온도
  })
}

function onGeoError() {
  alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError) // argments는 실행 성공했을 때, 실패했을 때 두 가지
