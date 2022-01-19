/* eslint-disable array-callback-return */
import {
  GET_VIDEOGAMES,
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

} from "../Action/Constants";

const initialState = {
  videogames: [],
  allVideogames: [],
  videogameDetail: [],
  genres: [],
  message: "",
  loading: {
    loading: false,
    msg: "",
  },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_VIDEOGAMES:
      return {
        ...state,
        videogames: action.payload,
        allVideogames: action.payload,
        videogameDetail: [],
        loading: {
          loading: false,
          msg: "",
        },
      };

    case LOADING:
      return {
        ...state,
        loading: {
          loading: true,
          msg: action.payload,
        },
      };

    case GET_VIDEOGAMES_BY_NAME:
      //console.log('soy reducer')
      return {
        ...state,
        videogames: action.payload,
        loading: {
          loading: false,
          msg: "",
        },
      };

    case GET_VIDEOGAME_DETAIL:
      return {
        ...state,
        videogameDetail: action.payload,
        allVideogames: [],
        videogames: [],
        loading: {
          loading: false,
          msg: "",
        },
      };

    case GET_GENRES:
      return {
        ...state,
        genres: action.payload,
        loading: {
          loading: false,
          msg: "",
        },
      };

    case POST_VIDEOGAME:
      // console.log(action.payload, 'reducer')
      return {
        ...state,
        allVideogames: action.payload,
        loading: {
          loading: false,
          msg: "",
        },
      };

    case DB_OR_API:
      const allVideogames = state.allVideogames;
      const originFilteredGames =
        action.payload === "created"
          ? allVideogames.filter((game) => game.createdInDb) //VIENE POR BASE DE DATOS
          : allVideogames.filter((game) => typeof game.id === "number"); //VIENE DESDE LA API

      return {
        ...state,
        videogames:
          action.payload === "all" ? state.allVideogames : originFilteredGames,
      };

    case ORDER:
      let orderGames;
      if (action.payload === "asc") {
        //console.log(action.payload, "asc");
        orderGames = state.videogames.sort(function (a, b) {
          if (a.name.toLowerCase() > b.name.toLowerCase()) {
            return 1;
          }
          if (a.name.toLowerCase() < b.name.toLowerCase()) {
            return -1;
          }
          return 0;
        });
      }
      if (action.payload === "desc") {
        //console.log(action.payload, "desc");
        orderGames = state.videogames.sort(function (a, b) {
          if (a.name.toLowerCase() > b.name.toLowerCase()) {
            return -1;
          }
          if (a.name.toLowerCase() < b.name.toLowerCase()) {
            return 1;
          }
          return 0;
        });
      }
      if (action.payload === "rat-asc") {
        //console.log(action.payload, "rat-asc");
        orderGames = state.videogames.sort(function (a, b) {
          if (a.rating > b.rating) {
            return 1;
          }
          if (a.rating < b.rating) {
            return -1;
          }
          return 0;
        });
      }
      if (action.payload === "rat-desc") {
        //console.log(action.payload, "rat-desc");
        orderGames = state.videogames.sort(function (a, b) {
          if (a.rating > b.rating) {
            return -1;
          }
          if (a.rating < b.rating) {
            return 1;
          }
          return 0;
        });
      }
      return { ...state, videogames: orderGames };

    case FILTERGENRES:
      const allGames = state.allVideogames;
      const filterDb = allGames.filter((game) =>
        game.genres.find((t) => (t.name === action.payload ? game : null))
      );
      //console.log(filterDb)
      const filterApi = allGames.filter((el) =>
        el.genres.includes(action.payload)
      );

      const filterVideogames =
        action.payload === "All" ? allGames : filterApi.concat(filterDb);
      return {
        ...state,
        videogames: filterVideogames,
      };

    case FILTERBYYEAR:
      const allJuegos = state.allVideogames;
      const filterGames = allJuegos.filter((el) =>
        el.released.includes(action.payload)
      );
      //console.log(filterGames);
      const gamesFiltered = action.payload === "All" ? allJuegos : filterGames;
      return {
        ...state,
        videogames: gamesFiltered,
      };

    // case FILTERBYSREB:
    //   const AllVIDEOJUEGOS = state.allVideogames;
    //   // console.log(AllVIDEOJUEGOS);
    //   let filtrado=[]
    //   if (action.payload !== 'All') {

    //       filtrado = AllVIDEOJUEGOS.filter((game) => {
    //       if (game.esrbRating !== null && action.payload !== null) {
    //         if (game.esrbRating.name === action.payload) {
    //           return game
    //         }
    //       } else if (action.payload === null) {
    //         return game
    //       }
    //     })
    //   } else {
    //     filtrado = AllVIDEOJUEGOS
    //   }
    //   return {
    //     ...state,
    //     videogames: filtrado,
    //   };
    // case FILTERRATING:
    //   const allVideoGames = state.allVideogames;
    //   const filter = allVideoGames.filter((g) => g.rating > 4.5)
    //   return {
    //     ...state,
    //     videogames : filter
    //   }

    case FILTERBYPLATFORMS:
      const allVideo = state.allVideogames;
      const filterPlatforms = allVideo.filter((game) =>
        game.platforms.includes(action.payload)
      );
      const platFilter = action.payload === "All" ? allVideo : filterPlatforms;
      return {
        ...state,
        videogames: platFilter,
      };
      
    default:
      return state;
  }
};

export default rootReducer;
