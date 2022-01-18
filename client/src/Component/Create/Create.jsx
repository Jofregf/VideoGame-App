import React from 'react';
import {useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {getGenres, postVideogame} from '../../Action/index'
import './Create.css';


//const sreb1 = ['Mature', 'Everyone 10+', 'Teen', 'Adults Only', 'null', 'Rating Pending', 'Everyone']

const deleteSelection = (input, sel) => {
    if (input.includes(sel)) {
        const array1 = input.filter((num) => num !== sel);
        return array1;
    } else {
        const array2 = input.concat(sel);
        return array2;
    }
  };

  function validate(input) {
    let errors = {};
    if (!input.name) {
        errors.name = "Name is required";
    } else if (!input.rating || isNaN(input.rating) || input.rating <= 0 || input.rating > 5){
        errors.rating = "Rating is required";
    } else if (!input.released) {
        errors.released = "Released is required";
    } else if (!input.platforms[0]) {
        errors.platforms = "Platforms is required";
    } else if (!input.genres[0]) {
        errors.genres = "Genres is required";
    } else if (!input.description) {
        errors.description = "Description is required";
    } else if (!input.esrbRating) {
        errors.esrbRating = 'Rating by Age is required'
    }
    
    return errors;
  }

let platformsOptions = [
    {id: 1, name:"PC"},
    {id: 2, name:"PLAYSTATION 5"},
    {id: 3, name:"XBOX ONE"},
    {id: 4, name:"PLAYSTATION 4"},
    {id: 5, name:"XBOX SERIES S/X"},
    {id: 6, name:"NINTENDO SWITCH"},
    {id: 7, name:"IOS"},
    {id: 8, name:"ANDROID"},
    {id: 9, name:"NINTENDO 3DS"},
    {id: 10, name:"NINTENDO DS"},
    {id: 11, name:"NINTENDO DSI"},
    {id: 12, name:"MACOS"},
    {id: 13, name:"LINUX"},
    {id: 14, name:"XBOX 360"},
    {id: 15, name:"XBOX"},
    {id: 16, name:"PLAYSTATION 3"},
    {id: 17, name:"PLAYSTATION 2"},
    {id: 18, name:"PLAYSTATION"},
    {id: 19, name:"PS VITA"},
    {id: 20, name:"PSP"},
    {id: 21, name:"WII U"},
    {id: 22, name:"WII"},
    {id: 23, name:"GAMECUBE"},
    {id: 24, name:"NINTENDO 64"},
    {id: 25, name:"GAME BOY ADVANCE"},
    {id: 26, name:"GAME BOY COLOR"},
    {id: 27, name:"GAME BOY"},
    {id: 28, name:"SNES"},
    {id: 29, name:"NES"},
    {id: 30, name:"CLASSIC MACINTOSH"},
    {id: 31, name:"APPLE II"},
    {id: 32, name:"COMMODORE / AMIGA"},
    {id: 33, name:"ATARI 7800"},
    {id: 34, name:"ATARI 5200"},
    {id: 35, name:"ATARI 2600"},
    {id: 36, name:"ATARI FLASHBACK"},
    {id: 37, name:"ATARI 8-BIT"},
    {id: 38, name:"ATARI ST"},
    {id: 39, name:"ATARI LYNX"},
    {id: 40, name:"ATARI XEGS"},
    {id: 41, name:"GENESIS"},
    {id: 42, name:"SEGA SATURN"},
    {id: 43, name:"SEGA CD"},
    {id: 44, name:"SEGA 32X"},
    {id: 45, name:"SEGA MASTER SYSTEM"},
    {id: 46, name:"DREAMCAST"},
    {id: 47, name:"3DO"},
    {id: 48, name:"JAGUAR"},
    {id: 49, name:"GAME GEAR"},
    {id: 50, name:"NEO GEO"},
    {id: 51, name:"WEB"},
  ];

function Create() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const genres = useSelector((state) => state.genres);
    const [errors, setErrors] = useState({});
    
    
    const [input, setInput] = useState({
        image: 'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/03/28/15537334218713.jpg',
        name: '',
        rating: 0,
        released : '',
        genres: [],
        platforms: [],
        description: '',
        esrbRating: '',

    });

    function handleGenres(event) {
        setInput({
            ...input,
            genres: deleteSelection(input.genres, event.target.value)
        })
        setErrors(
            validate({
              ...input,
              genres: event.target.value,
            })
        );
        //console.log(event.target.value)
    }

    function handlePlatforms(event) {
        setInput({
          ...input,
          platforms: deleteSelection(input.platforms, event.target.value),
        });
        setErrors(
            validate({
              ...input,
              platforms: event.target.value,
            })
        );
         //console.log(event.target.value)
    }

    //   function handleFilterByAge (event) {
    //       setInput({
    //           ...input,
    //           esrbRating:  event.target.value

    //       })
    //   }
      
    function handleChange(event) {
        setInput({
            ...input,
            [event.target.name] : event.target.value,
            
        })
        //console.log(input, 'change')
        setErrors(
            validate({
              ...input,
              [event.target.name]: event.target.value,
            })
        );
    };

    function handleSubmit(event) {
        event.preventDefault();
        console.log(input, 'submit')
        dispatch(postVideogame(input));
        alert('Videogame created');
        setInput({
            image: 'https://cdn-res.keymedia.com/cms/images/ca/155/0319_637171637373959129.jpg',
            name: '',
            rating: 0,
            released : '',
            genres: [],
            platforms: [],
            description: '',
            esrbRating:'',
        })
        navigate('/home')
       
    };

    useEffect (() => {
        dispatch(getGenres());

    },[dispatch]);

    return (
        <div className='container-create'>
            <div className="bn-container">
                <Link to='/home' className="bn31">
                    <button className="bn31span">Home</button>
                </Link>
            </div>
            <div>
                <h1 className="form-title">Create your Videogame</h1>
            </div>
            <form onSubmit={(event) => handleSubmit(event)}>
                <div className="form-body">
                    <div className="form-middle">
                        <div className="form-fields">
                            <label className='label-form' htmlFor='id.name'>Name</label>
                            <input 
                            id='id.name'
                            type="text" 
                            name="name" 
                            value={input.name}
                            onChange={(event) => handleChange(event)}
                            />
                            {errors.name && <p>{errors.name}</p>}
                        </div>
                        <div className="form-fields">
                            <label className='label-form'>Rating</label>
                            <input
                            type='number'
                            name='rating'
                            value={input.rating}
                            max = '5'
                            min = '1'
                            onChange={(event) => handleChange(event)}
                            />
                            {errors.rating && <p>{errors.rating}</p>}
                        </div>
                        <div className="form-fields">
                            <label className='label-form' htmlFor='release.id'>Released</label>
                            <input
                            id='release.id'
                            type= 'date'
                            name='released'
                            value= {input.released}
                            onChange={(event) => handleChange(event)}
                            />
                            {errors.released && <p>{errors.released}</p>}
                        </div>
                        <div className="form-checks">
                            <h4 className='label-form'>Platforms</h4>
                            <div className="form-checkboxes">
                                {platformsOptions.map((p) => (
                                    <div key={p.id}>
                                        <input
                                        type="checkbox"
                                        value={p.name}
                                        onChange={(event) =>  handlePlatforms(event)}
                                        />
                                        {p.name}

                                    </div>
                                ))}
                                {errors.platforms && <p>{errors.platforms}</p>}
                            </div>
                        </div>
                        <div className="form-checks">
                            <h4 className='label-form'>Genres</h4>
                            <div className="form-checkboxes">
                                {genres.map((g) => (
                                    <div key={g.id}>
                                        <input
                                        type="checkbox"
                                        name='genres'
                                        value={g.name}
                                        onChange={(event) => handleGenres(event)}
                                        />
                                        {g.name}

                                    </div>
                                ))}
                                {errors.genres && <p>{errors.genres}</p>}
                            </div> 
                        </div>
                        <div className='form-fields'>
                            <label className='label-form' htmlFor='id.description'>Description</label>
                            <textarea
                            id='id.description'
                            type= 'text'
                            name='description'
                            value= {input.description}
                            onChange={(event) => handleChange(event)}
                            />
                            {errors.description && <p>{errors.description}</p>}
                        </div>
                        {/* <div>
                            <h4>Sreb Rating</h4>
                            {sreb1.map((s, i) => 
                            <div key={i}>
                                <input
                                type= 'radio'
                                name= 'esrbRating'
                                value={s}
                                onChange={(event) => handleFilterByAge(event)}
                                />
                                {s}
                                {errors.esrbRating && <p>{errors.esrbRating}</p>}
                            </div>)}
                        </div> */}
                    
                        {input.name && input.rating && 
                        !errors.name && !errors.rating && 
                        !errors.description&&!errors.platforms&&!errors.genres
                        ? 
                        <div className="bn-container">
                        <button className="bn31" type="submit"> Create </button> 
                        </div>
                        : <h2 style={{color: 'red'}}>Campos obligatorios</h2>
                        }

                    </div>

                </div>
            </form>
            
        </div>
    )
}

export default Create
