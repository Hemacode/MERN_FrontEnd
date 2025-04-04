import React from 'react'

const Home = () => {
  return (
    <header className='header'>
        <a href='#' className='logo'><i className="fas fa-paper-plane"></i>travel</a>
        <nav className='navbar'>
          <a href='#home'>Home</a>
          <a href='#about'>About</a>
          <a href='#destination'>Destination</a>
          <a href='#services'>Services</a>
          <a href='#gallery'>Gallery</a>
          <a href='#blogs'>Blogs</a>
        </nav>
        <a href='#book-form' className='btn'>Book now</a>
    </header>
  )
}

export default Home
