const WEATHER_API_KEY = "a1b2c4278e86c04a12455579273c79ad";
const API_STEM ="http://api.openweathermap.org/data/2.5/weather?";

function cityUrl(city){
    return (
        `${API_STEM}q=${city}&units=metrics&APPID=${WEATHER_API_KEY}`
    )
}

function fetchForecast(city){
    return(
        fetch(cityUrl(city))
        .then(response => response.json())
        .then(responseJSON => {
            return{
                main: responseJSON.weather[0].main,
                country: responseJSON.sys.country,
                icon: responseJSON.weather[0].icon,
                description: responseJSON.weather[0].description,
                temp: responseJSON.main.temp
            };
        })
        .catch((error) =>{
            console.log(error)
        })
    )
}

export default {fetchForecast: fetchForecast}