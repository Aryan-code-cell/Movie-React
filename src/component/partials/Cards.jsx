import React from 'react'
import { Link } from 'react-router-dom'
import noimage from '/noimage.jpg';

function Cards({data, title}) {
  // console.log(title);
  return (
    // #1F1E24
    <div className='flex flex-wrap w-full h-full px-[5%] bg-[#1F1E24]'>
      
        {data.map((c,i) => (
            <Link 
                to={`/${c.media_type || title}/detail/${c.id} `}
                className='relative w-[35vh] p-[2%] mr-[5%] mt-[2%] ' key={i}>

                <img 
                  className='h-[40vh] shadow-lg shadow-blue-500/50 object-cover rounded' 
                  src={c.poster_path || c.backdrop_path  || c.profile_path ? 
                    `https://image.tmdb.org/t/p/original/${c.poster_path || c.backdrop_path  || c.profile_path}` 
                    : noimage} 
                  alt="" 
                />
                <h1 className='text-2xl font-semibold text-zinc-300 mt-2'>
                  {c.name || c.title || c.original_name || c.original_title}
                </h1>


                {c.vote_average &&  <div className='absolute right-[5%] bottom-[30%] w-[6vh] h-[6vh] text-xl fond-semibold bg-yellow-400 rounded-full flex justify-center items-center '>
                  {(c.vote_average *10).toFixed()} <sup>%</sup>
                </div>}
               

            </Link>
        ))}

    </div>
  )
}

export default Cards