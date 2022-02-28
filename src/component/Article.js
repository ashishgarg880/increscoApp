import React from 'react'
import { Link } from 'react-router-dom'
import images from './images/myntraLogo.png'
export default function Article() {
  return (
    <div>
      <img src={images} alt="helo"/>
        <div className='imgDiv'>
            {/* <img src='./images/myntraLogo.png' alt="myntraLogo"/> */}
        </div>  
        <div className='navBar'>
          <nav>
            <ul>
              <li><Link to=''>MEN</Link></li>
              <li><Link to=''>WOMEN</Link></li>
              <li><Link to=''>KIDS</Link></li>
              <li><Link to=''>Home & Living</Link></li>
            </ul>
          </nav>
        </div>
    </div>
  )
}
