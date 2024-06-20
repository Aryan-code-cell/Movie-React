import React from 'react'
import ReactPlayer from 'react-player';
import { useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Notf from '../Notf';



function Trailer() {

  const navigate = useNavigate()
  const {pathname} = useLocation();
  const category = pathname.includes("movie") ? "movie" : "tv";
  const ytvideo = useSelector((state) => state[category].info.videos);

  return (
    
    <div className='absolute w-screen h-screen flex items-center justify-center top-0 left-0 z-[100] bg-[rgba(0,0,0,.8)]'>

      <Link onClick={() => navigate(-1)} className="absolute hover:text-blue-400 text-3xl ri-close-fill text-white right-[5%] top-[9%]"></Link>
      {ytvideo ? (
        <ReactPlayer controls height={600} width={1100} url={`https://www.youtube.com/watch?v=${ytvideo.key}`}/>
        ) : (
          <Notf />
        )
      }
    </div>
  ) 
}

export default Trailer