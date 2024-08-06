function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = searchInputElement.value;

  let apiKey = "9453eocfb302f861c59f1e9f04d3bta4";
  let urlApi = `https://api.shecodes.io/weather/v1/current?query=${searchInputElement.value}&key=${apiKey}`;

  axios.get(urlApi).then(function getTemperature(response) {
    let temperature = Math.round(response.data.temperature.current);
    let temp = document.querySelector(".current-temperature-value");
    temp.innerHTML = temperature;
  });
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

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);
