import React from 'react'
import img from '../../assets/taken.svg'
import {Link} from 'react-router-dom'
import "./Error.scss"

const Error = () => {
  return (
    <div className="page">
        <div>
            <img src={img} alt="page not found" className="page-not-found-image" />
            <h2>PAGE NOT FOUND</h2>
            <p>Was there a page here? If so, the SearchBots can't find it.</p>
            <Link to='/'>Return Home</Link>
        </div>
    </div>
  )
}

export default Error