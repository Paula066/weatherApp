class Days {
    constructor(futureData, forceUpdate) {
        this.futureData = futureData;
        this.activeDay = 0;
        this.forceUpdate = forceUpdate;
    }

    render = () => {
        console.log(this.futureData)
        return `${this.futureData.map((day, index) => `
                <div class="ss js-click-day" data-key="${index}">${this.parseDateToDataName(day.date)}</div>
            `).join('')}
            <div>${this.activeDay}<div>
        `;

    }

    parseDateToDataName = (data) => {
        const numberOfDay = new Date(data).getDay();
        switch (numberOfDay) {
            case 0:
                return 'Sun';
            case 1:
                return 'Mon';
            case 2:
                return 'Tue';
            case 3:
                return 'Wed';
            case 4:
                return 'Thu';
            case 5:
                return 'Fri';
            case 6:
                return 'Sat';
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