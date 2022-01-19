import React from 'react'
import {useDispatch} from 'react-redux';
import {filterPlatforms} from '../../Action/index.js';
import {platformsOptions} from '../../Action/Constants'


function FilterPlatforms() {
    const dispatch = useDispatch();
    function handlePlatforms(event) {
        event.preventDefault();
        dispatch(filterPlatforms(event.target.value))
    }

    return (
        <div>
            <select defaultValue={''} onChange= {(event) => handlePlatforms(event)}>
                <option value='' disabled>Filter Platforms</option>
                <option value='All'>All</option>
                {platformsOptions && 
                platformsOptions.map((p) => {
                    return (
                        <option key={p.id}>{p.name}</option>
                    )
                })
                }
            </select>
            
        </div>
    )
}

export default FilterPlatforms
