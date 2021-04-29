import axios from 'axios'
const url='https://api.openweathermap.org/data/2.5/weather';
const apiKey='c4bd6e8fa32515a1452f553f0e29b559';


const fetchweather = async (query) => {
    const {data}  = await axios.get(url, {
        params: {
            q: query,
            units: 'metric',
            APPID: apiKey,
        }
    });

    return data;
}
export default fetchweather;
