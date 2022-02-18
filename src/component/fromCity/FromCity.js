import React from 'react';
import * as Api from '../../services/api'
import { useNavigate } from "react-router-dom";
import './fromCity.scss'
import Swal from 'sweetalert2'
const FromCity = () => {
    const [city, setCity] = React.useState('')
    const [dataCity, setDataCity] = React.useState({})
    const [loading, setLoading] = React.useState(false)
    const navigate = useNavigate()
    const handleClick = (e) => {
        if(city==='' || !city){
            return
        }
        e.preventDefault()
        setLoading(true)
        Api.get(`/api/v1/city/weather/${city}`).then(response =>{
            navigate(`/weather?title=${response.data.data.title}&wid=${response.data.data.woeid}`)
        }

        )
            .catch(err =>{
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'city does not exist!',
                  })
                  setLoading(false)
            } )
    }
    console.log(dataCity)
    return (
            <div className='joinOutherContainer'>
            <div className='joinInnerContainer'>
                <h1 className='heading'>Search Weather</h1>
                <div className='mt-4'><input type='text' placeholder='name city ...' className='join-input' value={city} onChange={e => setCity(e.target.value)} /></div>
                <button onClick={handleClick} className='button mt-3' type='submit'>{loading?'Search...':'Search'}</button>
            </div>
        </div>


    )

}

export default FromCity;