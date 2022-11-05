import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import classes from "./gh.module.css"
import { useEffect, useState } from "react";

const Check = () => {
    const apiKey = "4e44d9029b1270a757cddc766a1bcb63";
    const [homeMovies, setHomeMovies] = useState([]);
  
    useEffect(() => {
      const getMovies = async () => {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular/?api_key=${apiKey}&language=en-US`
        );
        const data = await response.json();
        setHomeMovies(data.results);
      };
  
      getMovies();
    }, []);

  return (

    <>
      <div className={[classes.slider].join(" ")}>
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          useKeyboardArrows={true}
        >
          {homeMovies.map((movie) => (

<>
              <div className={classes.movieImage}>
                <img
                  src={` https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                  alt="movieImage"
                />
              </div>
              <div className={classes.movie_blackBlur}>
                <div className={classes.movie_title}>
                  {movie.original_title}
                </div>
                <div className={classes.movie_runtime}>
                  {movie.release_date}
                <span className={classes.movie_rating}>{movie.vote_average}</span>
                </div>
                  <div className={classes.description}>{movie.overview}</div>
              </div>
              </>
          ))}
        </Carousel>
          </div>
    </>
  )
};

export default Check;
