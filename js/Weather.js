class Weather {
    getWeather(path, cb) {
        fetch(config.api.forecast + path, {
            mode: "cors",
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(result => result.json())
            .then(result => {
                const userLocation = {
                    localization: result.location.name,
                    localTime: result.location.localtime,
                    tempC: result.current.temp_c,
                    tempF: result.current.temp_f,
                    condition: result.current.condition.text,
                    feelsLike: result.current.feelslike_c,
                    humidity: result.current.humidity,
                    wind: result.current.wind_kph,
                    visibility: result.current.vis_km,
                    forecastday: result.forecast.forecastday
                }
                cb(userLocation);
            })
            .catch(error => console.warn(error));
    }
}