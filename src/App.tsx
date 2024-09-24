import {useState, useEffect} from 'react';
import './App.css'
import Form from './Components/Form.tsx';
import MovieDisplay from './Components/MovieDisplay.tsx';

const apiKey = import.meta.env.VITE_REACT_API_KEY;
export const urlID = `http://www.omdbapi.com/?apikey=${apiKey}&i=tt`
export const urlSearch = `http://www.omdbapi.com/?apikey=${apiKey}&t=`
function App() {
  const [movie, setMovie] = useState(null);
  function getRandomInt(min : number, max : number) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); 
  }
  
  const getMovie = async(searchTerm : string, url:string) => {
    try{
      const response = await fetch(
        url+`${searchTerm}`
      );
      const data = await response.json();
      setMovie(data);
    } catch(e){
      console.error(e);
    }
  };


  useEffect(() => {
    const num = getRandomInt(1,9999999);
    const input = num.toString().padStart(7, '0');
    getMovie(input, urlID);
  }, []);


  return (
    <div className='App'>
      <Form moviesearch = {getMovie}/>
      <MovieDisplay movie={movie}/>
    </div>
  )
}

export default App;
