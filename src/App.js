import axios from "axios";
import Search from "./SearchBox/SearchBox";
import Loader from "./Loader/Loader";
import Card from "./Card/Card";
import Showexpand from "./ShowExpand/ShowExpand";
import ReactPaginate from 'react-paginate';
import { useState, useEffect } from "react";
import './App.css'

const App = (props) => {
  
  const getMovies = (term='war', page=1) => {
    setLoading(true);
    axios.get(`https://www.omdbapi.com/?apikey=756abb2f&s=${encodeURIComponent(term)}&plot=full&page=${page}`)
      .then(response => {
      // console.log(response.data);
      setMovies(response.data.Search);
      setTotal(Math.ceil(response.data.totalResults/10))
      setPages(page);
      setLoading(false);
    }).catch(error => {
      // console.log(error);
      setMovies([]);
      setLoading(false);
    });
  }
  
  const getMovie = (movieId) => {
    axios.get(`https://www.omdbapi.com/?apikey=756abb2f&i=${movieId}&plot=full`)
    .then(response => {
      // console.log(response.data);
      setMovie(response.data);
      setShowPop(true);
    });
  }
  
  const [loading, setLoading] = useState(true);
  const [showPop, setShowPop] = useState(false);
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState({});
  const [keyword, setKeyword] = useState('frozen');
  const [pages, setPages] = useState(1);
  const [total, setTotal] = useState();
  useEffect(() => {
    getMovies();
  }, []);
  
  const handlePageClick = e => {
    console.log(e.selected);
    getMovies(keyword, (e.selected + 1));
  }
  
  const handleCardClicked = movieId => {
    // console.log(movieId);
    getMovie(movieId);
    
  }
  
  const genCards = () => {
    let allCards = [];
    if(movies){
      movies.map(movie => {
        allCards.push(<Card {...movie} cardClicked={handleCardClicked} />);
      });
    }
    return allCards;
  }
  
  let allCards = genCards();
  
  return(
    <div className='main'>
      <h1 className='head'>Movieflix</h1>
      <Search 
        getInputValue={val => setKeyword(val)} 
        sendEnter={() => getMovies(keyword)} 
        getSubmit={() => getMovies(keyword)} />
      
     { showPop ? <Showexpand {...movie} closePop={() => setShowPop(false)} /> : null }
      
      <div className='cards'>
        { loading ? <Loader /> : 
        (allCards.length === 0 ? 
         <div className='error'>
           No movie found...
           <i class="far fa-grin-beam-sweat"></i>
         </div> : allCards) }
      </div>
      
      <div className='paginate'>
        <ReactPaginate 
          previousLabel={"Back"}
          nextLabel={"Next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={total}
          marginPagesDisplayed={1}
          pageRangeDisplayed={4}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
          />
      </div>
      
    </div>
  )
  
}

export default App;
