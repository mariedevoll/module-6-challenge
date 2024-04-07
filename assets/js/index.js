let searchHistoryForWeather = [];
const weatherAPIBaseURL = "https://api.openweathermap.org";
const weatherAPIKey = "b78ae7b53138e1dfec7997399c7a8ba8";

const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#search-input");
const todayContainer = document.querySelector("#today");
const forecastContainer = document.querySelector("#forecast");
const weatherHistoryContainer = document.querySelector("#weather-history");

function fetchCoordinates(search) {


}

const handleSearchFormSubmit = (event) => {
    event.preventDefault();

    const search = searchInput.value.trim();
    if(search) {
        fetchCoordinates(search);
    }
}

searchForm.addEventListener("submit", )