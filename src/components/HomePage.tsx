import React from 'react'
import SearchBar from './SearchBar';
import "./styles.css";
import WatchList from './WatchList';

const HomePage:React.FC = () => {
  return (<div>
    <div className='navbar'>
      <span className='app_logo'></span>
      <span className='app_name'>Weather Forecast</span>
    </div>
    <div className='container'>
     <SearchBar/>
     <WatchList/>
    </div>
    </div>
  )
}

export default HomePage