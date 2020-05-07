
class Days {
    constructor(futureData, forceUpdate) {
        this.futureData = futureData;
        this.activeDay = 0;
        this.forceUpdate = forceUpdate;
    }

    render = () => {
        console.log(this.futureData)
        return `${this.futureData.map((day, index) => `
                <div class="ss js-click-day" days__container data-key="${index}">${this.parseDateToDataName(day.date)}
                    <div class="days__box">
                        <img src="${day.day.condition.icon}" alt="" />
                        <div class="days__temp days__temp--desc">${day.day.condition.text}</div>
                        <div class="days__temp days__temp--degree">Max temp: ${day.day.maxtemp_c}</div>
                        <div class="days__temp days__temp--degree">Min temp: ${day.day.mintemp_c}</div>
                        <div class="days__temp ">Max wind: ${day.day.maxwind_kph} km/h</div>
                    </div>
                </div>
            `).join('')}
            <div>${this.activeDay}<div>
            
        `;
    }

    parseDateToDataName = (data) => {
        const numberOfDay = new Date(data).getDay();
        switch (numberOfDay) {
            case 0:
                return 'Sunnday';
            case 1:
                return 'Monday';
            case 2:
                return 'Tuesday';
            case 3:
                return 'Wednsday';
            case 4:
                return 'Thursday';
            case 5:
                return 'Friday';
            case 6:
                return 'Saturday';
        }
        return data;
    }

    changeData = (e) => {
        const id = e.target.getAttribute('data-key');
        this.activeDay = parseInt(id);
        this.forceUpdate();
    }

    events = () => {
        document.querySelectorAll('.js-click-day').forEach(day => {
            day.addEventListener('click', this.changeData);
        })
    }
}

new Days();