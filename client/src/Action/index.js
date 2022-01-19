import axios from 'axios';
import {GET_VIDEOGAMES,
    GET_VIDEOGAMES_BY_NAME,
    GET_VIDEOGAME_DETAIL,
    POST_VIDEOGAME,
    LOADING,
    GET_GENRES,
    DB_OR_API,
    ORDER,
    FILTERGENRES,
    FILTERBYYEAR,
    //FILTERBYSREB,
    //FILTERRATING
    FILTERBYPLATFORMS,

  } from './Constants';

export function getVideoGames() {
    return function (dispatch) {
        dispatch({type: LOADING, payload: 'searching videogames'})
        fetch('http://localhost:3001/videogames')
        .then(res => res.json())
        .then(data => {dispatch({type: GET_VIDEOGAMES, payload: data})})
        .catch(function (err) {
            console.log(err)
        
    })
    }
}

// export const getAllVideogames =()=> {

//     return async function(dispatch) {
//         const response = await axios.get("http://localhost:3001/videogames");

//         return dispatch({
//             type: GET_VIDEOGAMES,
//             payload: response.data
//         });
//     };
// };

export function getVideogameDetail (id) {
    //console.log(id, 'soy action1')
    return function (dispatch) {
        dispatch({type: LOADING, payload: 'searching id videogames'})
        fetch(`http://localhost:3001/videogames/${id}`)
        .then(res => res.json())
        .then(data => {dispatch ({type: GET_VIDEOGAME_DETAIL, payload: data})})
        .catch ((err ) => {
            console.log(err)
    })
    }
}


export function getVideogamesByName (name) {
    //console.log(name, 'ACTION')
    return function (dispatch) {
        dispatch({type: LOADING, payload: 'searching name videogames'})
        fetch(`http://localhost:3001/videogames?name=${name}`)
        .then(res => res.json())
        .then(data => {dispatch({type: GET_VIDEOGAMES_BY_NAME, payload: data})})
        .catch((err) => {
            console.log(err)
        })
    }

}

export function getGenres () {
    return function (dispatch) {
        dispatch({type: LOADING, payload: 'searching genres'})
        fetch(`http://localhost:3001/genres/`)
        .then(res => res.json())
        .then (data => {dispatch({type: GET_GENRES, payload: data})})
        .catch((err) => {
            console.log(err)
        })
    }
}

export function postVideogame(videogame) {
    //console.log(videogame, 'action')
    return async function (dispatch) {
        try {
            // dispatch({ type: "LOADING", payload: 'Creating Videogame...' })
            const newVideoGame = await axios.post(`http://localhost:3001/videogames`, videogame);
            dispatch({
                type: POST_VIDEOGAME,
                payload: newVideoGame.data 
            });
        } 
        catch (error) {
            console.log(error.message)
        }
    }
}

export function dbOrApi (payload) {
    //console.log(payload, 'action')
    return async function (dispatch) {
        try {
            dispatch ({
                type: DB_OR_API,
                payload,
            });
        }
        catch (error) {
            console.log(error)
        }
    };
}

export function order(payload) {
    //console.log(payload, 'order-action')
    return async function (dispatch) {
        try {
            dispatch ({
                type: ORDER,
                payload,
            });
        }
        catch (error) {
            console.log(error)
        }    
    }
}

export function filterGenres (payload) {
    
    return async function (dispatch) {
        try {
            dispatch ({
                type: FILTERGENRES,
                payload
            });
        }
        catch (error) {
            console.log(error)
        }    
      
    }
}

export function filterByYear (payload) {
    
    return async function (dispatch) {
        try {
            dispatch ({
                type: FILTERBYYEAR,
                payload
            });
        }
        catch (error) {
            console.log(error)
        }    
      
    }
}

// export function filterBySREB (payload) {
//     console.log(payload, 'action')
//     return async function (dispatch) {
//         try {
//             dispatch ({
//                 type: FILTERBYSREB,
//                 payload
//             });
//         }
//         catch (error) {
//             console.log(error)
//         }    
      
//     }
// }

// export function filterRating (payload) {
//     return async function (dispatch) {
//         try {
//             dispatch ({
//                 type: FILTERRATING,
//                 payload,
//             })
//         }
//         catch (error) {
//             console.log(error)
//         }
//     }
// }

export function filterPlatforms (payload) {
    return async function (dispatch) {
        try {
            dispatch ({
                type: FILTERBYPLATFORMS, 
                payload
            })
        }
        catch (error) {
            console.log(error)
        }
    }
}