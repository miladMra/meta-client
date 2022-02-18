import React from 'react';
import fetch from 'fetch'
const WeatherTwo = () => {

    React.useEffect(() => {
        fetch('"https://www.metaweather.com/api/location/search/?query=london',(error, meta, body)=>{
            console.log(body);
        })
    },[])
    return (

        <div>
            Weather
        </div>

    )

}

export default WeatherTwo