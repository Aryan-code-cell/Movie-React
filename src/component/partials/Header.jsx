import React from 'react'
import { Link } from 'react-router-dom';

function Header({data}) {
    // console.log(data);

    const imagePath = data.backdrop_path || data.profile_path  
         ? `https://image.tmdb.org/t/p/original/${data.backdrop_path || data.profile_path}`
         : 'path_to_default_image'; 

         
  return (
    <div
        style={{
            background:` linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.7), rgba(0,0,0,.6)), url(${imagePath})`,
            backgroundPosition : "center",
            backgroundSize : "cover"}}
        className='w-full h-[50vh] flex flex-col justify-end p-[5%]' >


        <h1 className='w-[70%] text-5xl text-white'>
            {data.name || data.title || data.original_name || data.original_title}
        </h1>

        <p className='w-[70%] mt-3 text-white'>{data.overview.slice(0,200)}... 
          <Link to={`/${data.media_type}/detail/${data.id}`} 
                className='text-blue-400'>
                  more
          </Link>
        </p>

        <p className='text-white gap-2'>
          <i className="text-yellow-500 ri-megaphone-fill"></i>{" "}
          {data.release_date}
          <i className="text-yellow-500 ri-album-fill"></i> {" "}
          {data.media_type.toUpperCase()}
        </p>

        <Link to={`/${data.media_type}/detail/${data.id}/trailer`}
              className="w-[16vh] h-[5vh] bg-blue-400 mt-5 p-2 flex items-center justify-center rounded text-white">
              {" "}Watch Trailer
        </Link>
    </div>
  )
}

export default Header
