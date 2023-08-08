import './ShowExpand.css'
const Showexpand = (props) => {
  
    console.log(props)
    
    return (
      <div className='show-expand'>
        
        <div className='show-content'>
          <i class="show-close fas fa-times" onClick={props.closePop} ></i>
          
          <div className='show-poster'>
            <span className='show-poster-bg'>
              <img src={props.Poster !== 'N/A' ? props.Poster : 'https://via.placeholder.com/163x240/111217/FFFFFF/?text=No%20Image'} alt={props.Title} />
            </span>
            <span className='show-poster-main'>
              <img src={props.Poster !== 'N/A' ? props.Poster : 'https://via.placeholder.com/163x240/111217/FFFFFF/?text=No%20Image'} alt={props.Title} />
            </span>
          </div>
          
          <div className='show-detail'>
            <h2>{props.Title}</h2>
            <ul className="show-tags">
              <li className="show-rated">{props.Country}</li>
              <li className="show-rated">{props.Year}</li>
              <li className="show-year">{props.Rated}</li>
              <li className="show-year">{props.Genre}</li>
            </ul>
            <div class="show-plot">
              <p>{props.Plot}</p>
            </div>
            
            <div class="show-credits">
              <p><strong>Production:</strong> {props.Production}</p>
              <p><strong>Runtime:</strong> {props.Runtime || 'N/A '}</p>
              <p><strong>Rating:</strong> {props.imdbRating}</p>
              <p><strong>Director:</strong> {props.Director}</p>
              <p><strong>Actors:</strong> {props.Actors}</p>
              <p><strong>BoxOffice:</strong> {props.BoxOffice || 'N/A '}</p>
            </div>
          </div>
          
        </div>
      </div>
    )
  }
export default Showexpand;  