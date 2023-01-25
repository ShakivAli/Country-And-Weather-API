const API_KEY = `e2d9fb239d9be1253c91b02a45308e0b`

//const API = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`
//const IMG_URL = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

const form = document.querySelector("form");
const weather = document.querySelector("#weather");
const search = document.querySelector("#search");
const getweather = async(city) => {
    weather.innerHTML = `<h2>Loading...</h2>`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response = await fetch(url);
    const data = await response.json();
    return showweather(data);
}

const showweather = (data) => {

    if (data.cod == "404") {
        weather.innerHTML = `<h2>City Not Found</h2>`
        return;
    }

    weather.innerHTML = `
        <div>
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
        </div>
        <div>
            <h2>${data.main.temp} ℃</h2>
            <h4> ${data.weather[0].main} </h4>
        </div>
    `
}

form.addEventListener(
    "submit",
    function(event) {
        getweather(search.value);
        event.preventDefault();
    }
)