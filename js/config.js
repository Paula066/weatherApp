const _configApi = {
    key: '10a55124c7b641ea9f2141712202804',
    url: '//api.weatherapi.com/v1/',
    data: 'days=10',
    hour: 6,
}

const config = {
    api: {
        forecast: `${_configApi.url}forecast.json?key=${_configApi.key}&${_configApi.data}&${_configApi.hour}&`
    }
}