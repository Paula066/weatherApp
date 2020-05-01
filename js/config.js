const _configApi = {
    key: '10a55124c7b641ea9f2141712202804',
    url: '//api.weatherapi.com/v1/'
}

const config = {
    api: {
        current: `${_configApi.url}current.json?key=${_configApi.key}&`
    }
}