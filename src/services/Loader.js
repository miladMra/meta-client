import React from 'react';
import ReactLoading from 'react-loading'
const Loader = () => {

    return(
        <div className="loading-wrapper">
        <ReactLoading type='spin' color='blue' height='100px' width='100px' />
    </div>

    )

}

export default Loader;