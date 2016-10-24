import axios from 'axios';

const appID = 'e2ff1cd488862bd93b9920220be8a111';
const OPEN_WEATHER_MAP_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${appID}&units=metric`;

export default {
  getTemp(location) {
    const encodeUrl = encodeURIComponent(location);
    let requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodeUrl}`;

    return axios
      .get(requestUrl)
      .then(res => {
        if(res.data.cod && res.data.message) {
         throw new Error(res.data.message);
        } else {
         return res.data.main.temp;
        }
      }, (res) => {
        throw new Error(res.data.message)
      });
  }
}
