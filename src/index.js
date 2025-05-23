function displayTemp(response) {
  let temperature = Math.round(response.data.temperature.current);
  let city = response.data.city;
  let huminity = response.data.temperature.humidity;
  let wind = response.data.wind.speed;

  let tempElement = document.querySelector("#current-temperature");
  tempElement.innerHTML = temperature;

  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = city;

  let humiElement = document.querySelector("#current-huminity");
  humiElement.innerHTML = `${huminity}%`;

  let windElement = document.querySelector("#current-wind");
  windElement.innerHTML = `${wind}km/h`;
}

function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = searchInputElement.value;
  let city = cityElement.innerHTML;

  let apiKey = "10fa90a2o832483bf734tfe8a27fcdad";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayTemp);
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);
