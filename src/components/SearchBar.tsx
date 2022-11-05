import React from 'react'

const SearchBar:React.FC = () => {
  return (

    <form className='searchbar' >
        <input type="text" className='searchbar'/>
        <button type='submit'><span></span></button>
    </form>

  )
}

export default SearchBar