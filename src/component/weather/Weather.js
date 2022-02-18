import React from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string'
import * as Api from '../../services/api'
import Loader from '../../services/Loader'
import './weather.css'
const Weather = () => {
    const [title, setTitle] = React.useState('')
    const [weatherData, setWeatherData] = React.useState([])
    const [isLoading, setLoading] = React.useState(true)
    const location = useLocation()
    React.useEffect(() => {
        const { title, wid } = queryString.parse(location.search)
        console.log(title, wid);
        Api.get(`/api/v1/city/weather/cityId/${wid}`).then(res =>
            setWeatherData(res.data.data),
            setLoading(false)
        )
        setTitle(title)

    }, [location.search])
    const renderLoading =
        isLoading? (
            <Loader/>
        ) : (
            <div className='ui grid center'>
                <div className='sixteen wide column centre mt-3'>

                    <h2 className="ui center aligned icon header">
                        <i className="circular chart line icon"></i>
                        {title}
                    </h2 >
                </div >
                <div className='sixteen wide column centre'>
                  {isLoading ? (<Loader/>) :  <table className="ui celled table">

                        <thead>
                            <tr>
                                <th>WeatherStateNamw</th>
                                <th>Date</th>
                                <th>min_temp</th>
                                <th>max_temp</th>
                            </tr>
                        </thead>
                        {weatherData.map(data => (
                            <tbody>
                                <tr>
                                    <td data-label="WeatherStateNamw">{data.weather_state_name}</td>
                                    <td data-label="Date">{data.applicable_date}</td>
                                    <td data-label="min_temp">{data.min_temp}</td>
                                    <td data-label="max_temp">{data.max_temp}</td>
                                </tr>
                            </tbody>
                        ))}

                    </table>
                        }

                </div>
            </div >
        )
    return (
        renderLoading
    )

}

export default Weather;