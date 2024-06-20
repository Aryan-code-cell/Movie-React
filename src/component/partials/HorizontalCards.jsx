import React from 'react'
import { Link } from 'react-router-dom'
import noimage from '/noimage.jpg';

function HorizontalCards({data}) {

  return (
    <div className='w-full p-5 '>

        <div className='w-[100%] flex overflow-y-hidden rounded-lg'>
           {data.length > 0 ? data.map((d,i) => (
              <Link 
                 to={`/${d.media_type}/detail/${d.id}`}
                 key={i} className='min-w-[15%] h-[35vh] mr-5 mb-5 bg-zinc-900'>

                  <img 
                    className='w-full h-[45%] object-cover'
                    src={d.backdrop_path || d.poster_path ? 
                    `https://image.tmdb.org/t/p/original/${d.backdrop_path || d.poster_path}` 
                    : noimage} alt="" />

                  <div className='text-white p-3 h-[45%] overflow-y-auto'>
                      <h1 className='text-l font-semibold'>
                          {d.name || d.title || d.original_name || d.original_title}
                      </h1>

                      <p className='text-sm'>
                        {d.overview.slice(0,50)}... <span className='text-zinc-500'>more</span>
                      </p>
                  </div>

              </Link>

           )): ( <h1 className='text-white font-black text-center mt-5 text-3xl'>Nothing to Show</h1>)}

        </div>

    </div>
  )
}

export default HorizontalCards