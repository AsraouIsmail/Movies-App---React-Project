import React, {useState, useEffect} from 'react';
import Movie from './components/Movie';


const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=7c6452a7ceee3e54289a9c6ed83a6af1";

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=7c6452a7ceee3e54289a9c6ed83a6af1&query=";

function App() {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setsearchTerm] = useState("");

  useEffect(() => {
    fetch(FEATURED_API)
    .then((res) => res.json())
    .then((data) => {
      setMovies(data.results);
    });
    
  }, []);


 
  const handleOnSubmit = (e) =>{

    e.preventDefault();
    if(searchTerm) {


       fetch(SEARCH_API + searchTerm)
    .then((res) => res.json())
    .then((data) => {
    setMovies(data.results);
  });

  setsearchTerm('');

    }

     
};

 const handleOnChange = (e) => {
    setsearchTerm(e.target.value);
  }

  
  return (
    <>

    <header>
      <form onSubmit={handleOnSubmit}>

       <input type="search"  className="search" placeholder="Search your favorit movie here......" value={searchTerm} onChange={handleOnChange} 

       />

      </form>
        
      </header>
    <div className="movie-container">

      { movies.length > 0 && movies.map((movie) => <Movie key={movie.id} {...movie} />)}
    </div>
    </>
  );
}

export default App;
