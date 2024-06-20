
import axios from '../../utils/axios';
import React, { useEffect, useState } from 'react'
import noimage from '/noimage.jpg';

import { Link } from 'react-router-dom'

function Topnav() {
  const[query, setquery] = useState("");
  const [searches, setsearches] = useState([])

  const Getsearches = async () => {
    try {
      const {data} = await axios.get(`/search/multi?query=${query}`)
      setsearches(data.results);
      // console.log(data.results);
    }
    catch(error) {
      console.log("Errror: ", error);
    }
  };

  useEffect(() => {
   Getsearches();
  }, [query])
  



  return (

    <div className='w-[80%] h-[10vh] relative flex mx-auto items-center'>
      <i className="text-zinc-400 text-2xl ri-search-line"></i>

      <input 
        onChange={(e) => {setquery(e.target.value)}}
        value={query}
        className='w-[50%] h-[4vh] text-l mx-10 p-4 border-none outline-none bg-transparent text-zinc-400' 
        type="text" 
        placeholder='search anything' 
      />

      {query.length > 0 && (
        <i onClick={() => setquery("")} className="text-zinc-400 text-2xl ri-close-fill right-0"></i>
        )}
      

      <div className='z-[100] absolute w-[50%] max-h-[50vh] bg-zinc-200 top-[100%] left-[6%] overflow-auto rounded'>
        
        {searches.map((s,i) => (
          <Link 
            to={`/${s.media_type}/detail/${s.id}`}
            key={i} className='hover:text-black hover:bg-zinc-300 duration-300 text-zinc-600 font-semibold w-[100%] p-3 flex justify-start items-center border-b-2 border-zinc-100'>
            <img 
                className='h-[8vh] w-[12vh] rounded mr-8'
                src={ 
                  s.backdrop_path || s.profile_path ?  `https://image.tmdb.org/t/p/original/${s.backdrop_path || s.profile_path}` : noimage
                }  alt="" 
            />
            <span>
              {s.name || s.title || s.original_name || s.original_title}
            </span>

          </Link>

        ))}
  
      </div>

    </div>

  )
}

export default Topnav




