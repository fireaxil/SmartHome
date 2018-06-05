export const FETCH_WEATHER = 'FETCH_WEATHER'
function getWeatherDispatch (payload) {
  return {
    type: FETCH_WEATHER,
    payload
  }
}

export function getWeather () {
  return dispatch => {
    fetch('http://api.openweathermap.org/data/2.5/weather?q=14213&APPID=c4298316883e1528d5b3e3e7a989072d')
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        return response
      })
      .then(response => response.json())
      .then(weather => dispatch(getWeatherDispatch(weather)))
  }
}
