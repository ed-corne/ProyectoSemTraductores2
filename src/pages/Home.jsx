import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Link to="/mini" >Mini</Link>
      <br />
      <Link to="/complete" >complete</Link>
    </div>
  )
}

export default Home