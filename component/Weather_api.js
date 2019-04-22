const WEATHER_API_KEY = "bbeb34ebf60ad50f7893e7440a1e2b0b";
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