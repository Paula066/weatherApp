const url = 'http://api.weatherapi.com/v1/current.json?key=10a55124c7b641ea9f2141712202804&q=Cracow';
fetch(url, {
    mode: "cors",
    headers: {
        'Content-Type': 'application/json'
    },
})
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(error => console.warn(error));