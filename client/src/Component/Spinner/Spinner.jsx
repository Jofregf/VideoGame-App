import React from 'react'
import'./Spinner.css'

function Spinner() {

    return (
        
        <div className="loader-fader">
        <div className="loader-container">
          <div className="loader"></div>
          <div className="loadertwo"></div>
          <div className="loaderthree"></div>
        </div>
      </div>
     
    )
}

export default Spinner
