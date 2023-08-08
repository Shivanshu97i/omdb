import './SearchBox.css'
const Search = (props) => {

    let sendValue = (e) => {
      props.getInputValue(e.target.value)
    }
    
    const handleSubmit = () => {
      props.getSubmit();
    }
    
    const handleKeyDown = (e) => {
      if(e.key === 'Enter'){
        props.sendEnter();
        // console.log('Enter');
      }
    }
    
    return(
      <div className='search'>
        <div className='search-box'>
          <input type='text'
            onChange={sendValue}
            onKeyDown={handleKeyDown}
            placeholder='Find movie...' />
          <button onClick={handleSubmit} ><i class="fas fa-search"></i></button>
        </div>
      </div>
    )
  }
  export default Search;