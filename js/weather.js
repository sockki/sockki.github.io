const API_KEY = 'd07077dd836b3d40c6d7e2b541360a31';
const divweather = document.querySelector("#weather");


function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log("you live it", lat, lng);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json())
    .then(data => {
        const weather = document.querySelector("#weather span:nth-child(1)");
        const city = document.querySelector("#weather span:nth-child(2)");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}Cº`;
    });
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}



navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);


