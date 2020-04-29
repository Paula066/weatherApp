const weather = new Weather();

class App {
    constructor() {
        this.weatherData = {}

        weather.getWeather('q=Cracow', this.getWeatherData)
    }

    getWeatherData = (data) => {
        this.weatherData = data;
        this.render();
        console.log(this.weatherData)
    }

    render() {
        const div = document.querySelector('.localization');
        div.innerHTML = `
        <div class="localization__name">${this.weatherData.localization}</div>
        <div class="localization__time">${this.weatherData.localTime}</div>
        <div class="localization__tempC">${this.weatherData.tempC}</div>
       
       
        `
    }
}


new App();