const weather = new Weather();

class App {
    constructor() {
        this.weatherData = {}
        this.degreeType = 'C';
        this.degree = null;
        this._app = document.querySelector('.localization');
        weather.getWeather('q=Cracow', this.getWeatherData);
    }

    changeTemperature = () => {
        const newTemperatureType = this.degreeType === 'C' ? 'F' : 'C';
        this.degree.setTemperatureType(newTemperatureType)
        this.render();
    }

    getWeatherData = (data) => {
        this.weatherData = data;
        this._initializeClasses();
        this.render();
        setInterval(() => {
            this.updateTime()
        }, 1000);
    }

    render = () => {
        this._app.innerHTML = `
            <div class="localization__name">${this.weatherData.localization}</div>
            <div class="localization__time">${this.getCurrentDate()}</div>
            ${this.degree.render()}
        `
        this._events();
    }

    updateTime() {
        const timeHandler = this._app.querySelector('.localization__time');
        timeHandler.innerHTML = this.getCurrentDate();
    }

    getCurrentDate() {
        return new Date()
            .toISOString()
            .replace('T', ' ')
            .replace(/-/g, ' ')
            .split('.')[0]
    }

    _events() {
        const temperature = this._app.querySelector('.js-degree-change');
        temperature.addEventListener('click', this.changeTemperature)
    }

    _initializeClasses = () => {
        this.degree = new Degree(this.weatherData, this.degreeType);
    }
}

new App();
