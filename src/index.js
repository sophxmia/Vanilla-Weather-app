function displayTemperature(response){
    let temperatureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");
    let countryElement = document.querySelector("#country");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind");

    temperatureElement.innerHTML = Math.round(response.data.temperature.current);
    cityElement.innerHTML = response.data.city;
    countryElement.innerHTML = `, ${response.data.country}`;
    descriptionElement.innerHTML = response.data.condition.description;
    humidityElement.innerHTML = response.data.temperature.humidity;
    windElement.innerHTML =  Math.round(response.data.wind.speed);
}

let apiKey = "0fdf1tcb941583e4e4o91cb9b04cef1a";
let apUrl = `https://api.shecodes.io/weather/v1/current?query=Kyiv&key=${apiKey}&units=metric`;
axios.get(apUrl).then(displayTemperature);