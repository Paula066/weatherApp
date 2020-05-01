const weather = new Weather();

class App {
    constructor() {
        this.weatherData = {}
        this.degreeType = 'C';
        this.degree = null;
        this._app = document.querySelector('.localization');
        weather.getWeather('q=Cracow', this.getWeatherData);
        this.body = document.querySelector('body');

    }

    changeTemperature = () => {
        const newTemperatureType = this.degreeType === 'C' ? 'F' : 'C';
        this.degreeType = newTemperatureType;
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
        this.applayBackgroundImage();

    }

    render = () => {
        console.log(this.weatherData.condition)
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

    applayBackgroundImage = () => {
        const condition = this.weatherData.condition;
        if (condition.includes('rain')) {
            this.body.style.backgroundImage = "url('./img/rain.jpg')";
        }
        else if (condition.includes('cloudy')) {
            this.body.style.backgroundImage = "url('./img/cloud.jpg')";
        }
        else if (condition.includes('sunny')) {
            this.body.style.backgroundImage = "url('./img/sky.jpg')";
        }
    }
}


new App();
