class Degree {
    constructor(weatherData, degreeType) {
        this.degreeType = degreeType;
        this.weatherData = weatherData;
        this.temperature = null;
        if (degreeType === 'C') {
            this.temperature = this.weatherData.tempC
        }
        else {
            this.temperature = this.weatherData.tempF
        }
    }

    render() {
        return `
            <div class="localization__tempC">
                <div class="localization__temp">${this.temperature}</div>
                <div class="localization__boxDeg">
                    ${this.degreeType === 'C' ? `
                        <div class="localization__deg localization__deg--big">C</div>
                        <div class="localization__deg localization__deg--small js-degree-change">F</div>
                    ` : `
                        <div class="localization__deg localization__deg--big">F</div>
                        <div class="localization__deg localization__deg--small js-degree-change">C</div>
                    `}
                </div>
            </div>
        `
    }

    setTemperatureType(temperatureType) {
        if (this.degreeType === temperatureType) return;
        this.degreeType = temperatureType;
        if (temperatureType === 'C') {
            this.convertToCelc()
        } else {
            this.convertToFare()
        }
    }

    convertToCelc = () => {
        this.temperature = this.weatherData.tempC;
    }

    convertToFare = () => {
        this.temperature = this.weatherData.tempF;
    }
}

