class Degree {
    constructor(weatherData, degreeType) {
        this.degreeType = degreeType;
        this.weatherData = weatherData;
    }

    render() {
        return `
            <div class="localization__tempC">
                <div class="localization__temp">${this.weatherData.tempC}</div>
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
        this.degreeType = temperatureType;
    }
}

