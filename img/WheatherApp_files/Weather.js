class Weather {
    getWeather(path, cb) {
        fetch(config.api.current + path, {
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

                }
                cb(userLocation);
            })
            .catch(error => console.warn(error));
    }
}