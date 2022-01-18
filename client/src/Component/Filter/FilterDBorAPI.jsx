import React from 'react'
import { useDispatch } from 'react-redux';
import { dbOrApi} from '../../Action/index';

function FilterDbOrApi() {

    const dispatch = useDispatch();

    function handleDborApi(event) {
        event.preventDefault();
        dispatch(dbOrApi(event.target.value))
    }
    
    return (
        <div style={{height: '100px'}}>
            <select defaultValue={''} onChange={(event) => handleDborApi(event)}>
            <option value='' disabled>Filter by API/DB</option>
                <option value='all'>All</option>
                <option value='created'>Created</option>
                <option value='api'>Api</option>
            </select>
            
        </div>
    )
}

export default FilterDbOrApi
