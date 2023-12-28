import React  from 'react'
import loading from './loading.gif'

const Spinner=(props)=> {
        return (
            <div className={`text-center ${props.darkMode ? "text-light" : ""}`}>
            <div className="text-center">
                <img className="my-3" src={loading} alt="loading" />
            </div>
            </div>
        )
    
}
export default Spinner;
