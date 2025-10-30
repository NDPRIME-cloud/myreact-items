import React from 'react'
import {Link} from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
        <p>Opps, looks like this page doesn't exist</p>
        <Link to='/'>Back to Home</Link>
    </div>
  )
}

export default NotFound