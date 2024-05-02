import React from 'react'
import './index.css'
import  {IoMdSearch} from "react-icons/io";
function Searchbar() {
  return (
    <div className='compsearch'>
                <input type="text" placeholder='Search' />
                <div className='searchbutton'><IoMdSearch className='searchicon'/></div>
    </div>
  )
}

export default Searchbar