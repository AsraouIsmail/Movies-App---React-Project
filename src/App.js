import React, {useState, useEffect} from 'react';
import Movie from './components/Movie';


const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=7c6452a7ceee3e54289a9c6ed83a6af1";

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const SEARCH_API = "https://api.themoviedb.org/3/search/movie?api_key=7c6452a7ceee3e54289a9c6ed83a6af1";

function App() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(FEATURED_API)
    .then((res) => res.json())
    .then((data) => {
      setMovies(data.results);
    });
    
  }, []);
  
  return (
    <div className="movie-container">

      {movies.length > 0 && movies.map((movie) => <Movie key={movie.id} {...movie} />)}
      
    </div>
  );
}

export default App;
