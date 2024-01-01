import React from 'react'
import { Link } from 'react-router-dom';
import './Titlestyle.css';

const Title = () => {
  return (
  
    <div className='lg:flex justify-between lg:m-16 '> 

      <p className= 'title '>
        Batteries
        </p>


        <Link to="/" className='title1'>
  View All Batteries
</Link>
 
    </div>
    
  
  )
}

export default Title
