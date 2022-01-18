import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getVideogameDetail } from "../../Action/index";
import { Link } from "react-router-dom";
import Spinner from '../Spinner/Spinner'
import "./Details.css";

function Details() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [details] = useState(id);

  useEffect(() => {
    dispatch(getVideogameDetail(details));
  }, [dispatch, details]);

  const myDetail = useSelector((state) => state.videogameDetail);
  //console.log(myDetail, 'detalle')
  return (
    <div>
      <div className="details-container">
    {!Array.isArray(myDetail)?
      <>
      <div className="img-container">
        <img className="details-img" src={myDetail.image} alt={myDetail.name} />
      </div>
      <h1 className="details-name">{myDetail.name}</h1>
      <p className="details-scores">Rating: {myDetail.rating}</p>
      <p className="details-scores">Released: {myDetail.released}</p>
      <div>
        <h5 className="title-maps">Genres</h5>
        {Array.isArray(myDetail.genres) ? (
          myDetail.genres.map((g, i) => (
            <div className="list-maps">
              <p key={i}>{g}</p>
            </div>
          ))
        ) : (
          <p className="par-maps">Without genres</p>
        )}
      </div>
      <div>
        <h5 className="title-maps">Platforms</h5>
        {Array.isArray(myDetail.platforms) ? (
          myDetail.platforms.map((p, i) => (
            <div className="list-maps">
              <p key={i}>{p}</p>
            </div>
          ))
        ) : (
          <p className="par-maps">Without platforms</p>
        )}
      </div>
      <div>
        <h5 className="title-maps">Description</h5>
        <p className="details-scores">{myDetail.description}</p>
      </div>
      <div className="container-grid">
        <div>
          <h5 className="title-maps">Rating Comments</h5>
          {Array.isArray(myDetail.ratings) ? (
            myDetail.ratings.map((r, i) => (
              <div className="list-maps">
                <p key={i}>{r}</p>
              </div>
            ))
          ) : (
            <p className="par-maps">Without Rating Comments</p>
          )}
        </div>
        <div>
          <h5 className="title-maps">Percent Comments</h5>
          {Array.isArray(myDetail.percent) ? (
            myDetail.percent.map((p, i) => (
              <div className="list-maps">
                <p className="par-maps" key={i}>
                  {p}
                </p>
              </div>
            ))
          ) : (
            <p className="par-maps">Without Percent Comments</p>
          )}
        </div>
      </div>
      <div>
        <h5 className="title-maps">Rating ESRB</h5>
        {myDetail.esrbRating ? (
          <div className="list-maps">
            <p key={myDetail.esrbRating.id}>{myDetail.esrbRating.name}</p>
          </div>
        ) : (
          <p className="par-maps">Without ESRB Rating</p>
        )}
      </div>
      <h5 className="title-maps">Screenshot</h5>
      <div className="container-img">
        {Array.isArray(myDetail.screenshotApi) ? (
          myDetail.screenshotApi.map((p) => (
            <span className="list-img">
              <img
                key={p.id}
                src={p.image}
                alt={p.name}
                height="200px"
                width="200px"
              />
            </span>
          ))
        ) : (
          <p className="par-maps">Without Screenshot</p>
        )}
      </div>

      <h5 className="title-maps">Trailer</h5>
      {myDetail.trailerApi ? (
        <div className="list-vid">
          <video
            src={myDetail.trailerApi.data.max}
            controls
            height="400px"
            width="480px"
          ></video>
        </div>
      ) : (
        <p className="par-maps">Without video</p>
      )}
      </>
      : <Spinner />
    }
      <div className="bn-container">
        <Link className="bn31" to="/home">
          <button className="bn31span">Home</button>
        </Link>
      </div>
    </div>
    </div>
  );

}

export default Details;
