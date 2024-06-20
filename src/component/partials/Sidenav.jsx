import React from 'react'
import { Link } from 'react-router-dom'

function Sidenav() {
  return (
    
    <div className='w-[20%] h-full  border-r-2 border-zinc-300 p-8'>
      <h1 className='text-2xl text-white font-bold '>
        <i className="text-blue-500 ri-tv-fill mr-2"></i>
        <span className='text-2xl'>MoViEst</span>
      </h1>

      <nav className='flex flex-col text-zinc-400 text-l gap-2'>
        <h1 className='text-white font-semibold mt-6 mb-3'>New Feeds</h1>

        <Link to="/trending" className='hover:bg-blue-400 hover:text-white duration-400 rounded p-3'>
            <i className="mr-2 ri-fire-fill "></i>Trending
        </Link>

        <Link to="/popular" className='hover:bg-blue-400 hover:text-white duration-400 rounded p-3'>
            <i className="mr-2 ri-bard-fill "></i>Popular
        </Link>

        <Link to="/movie" className='hover:bg-blue-400 hover:text-white duration-400 rounded p-3'>
            <i className="mr-2 ri-movie-2-fill "></i>Movies
        </Link>

        <Link to="/tvshows" className='hover:bg-blue-400 hover:text-white duration-400 rounded p-3'>
            <i className="mr-2 ri-tv-2-fill "></i>TV Shows
        </Link>

        <Link to="/people" className='hover:bg-blue-400 hover:text-white duration-400 rounded p-3'>
            <i className="mr-2 ri-team-fill "></i>People
        </Link>

      </nav>

      <hr className='border-none h-[1px] bg-zinc-400 mt-2'/>

      <nav className='flex flex-col text-zinc-400 text-l gap-2'>
        
        <h1 className='text-white font-semibold mt-6 mb-3'>Website Information</h1>

        <Link to="/about" className='hover:bg-blue-400 hover:text-white duration-400 rounded p-3'>
            <i className="mr-2 ri-information-fill "></i>About 
        </Link>

        <Link to="/contact" className='hover:bg-blue-400 hover:text-white duration-400 rounded p-3'>
            <i className="mr-2 ri-phone-fill "></i>Contact us
        </Link>

      </nav>

    </div>
  )
}

export default Sidenav