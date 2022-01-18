import React from 'react';
import './Paged.css'

function Paged({gamesLength, gamesPerPage, Page}) {
    
    const pageNumber = [];

    for (let i = 0; i <  Math.ceil(gamesLength/gamesPerPage); i++) {
        pageNumber.push(i + 1);
    }
    
    return (
        <nav className='nav-button'>
            <ul className='list-button'>
                {
                    pageNumber && pageNumber.map(num => (
                        <button className="buttonPaged" onClick={()=> Page(num)} key={num} >
                            {num}
                        </button>
                    ))
                }
            </ul>
        </nav>
    )
}

export default Paged