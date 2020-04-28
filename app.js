const url = 'http://api.weatherapi.com/v1/current.json?key=10a55124c7b641ea9f2141712202804&q=Cracow';
fetch(url, {
    mode: "cors",
    headers: {
        'Content-Type': 'application/json'
    },
})
    .then(res => res.json())
    // .then(res => console.log(res))
    .then(res => {
        let localization = {
            local: res.location.name,
            localtime: res.location.localtime
        }
        document.querySelector('.localization').innerHTML = `${localization.localtime} ${localization.local}`;
    })

    .catch(error => console.warn(error));

