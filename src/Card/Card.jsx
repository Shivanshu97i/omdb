import './Card.css'
const Card = props => {
  
    // console.log(props);
    const handleClick = (e) => {
      // console.log(e.target.dataset.id);
      props.cardClicked(e.target.dataset.id);
    }
    return (
      <div className='card' title={props.Title} data-id={props.imdbID} onClick={handleClick}>
        <img src={props.Poster !== 'N/A' ? props.Poster : 'https://via.placeholder.com/163x240/111217/FFFFFF/?text=No%20Image'} alt={props.Title} data-id={props.imdbID} />
      </div>
    )
  }
export default Card;  