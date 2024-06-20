import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { asyncloadperson} from '../store/actions/personAction';
import Loading from './Loading';
import HorizontalCards from './partials/HorizontalCards';
import Dropdown from './partials/Dropdown';

function PersonDetails() {

  const {pathname} = useLocation();
  const navigate = useNavigate();
  const {id} = useParams();
  const {info} = useSelector((state) => state.person)
  console.log(info);
  const dispatch = useDispatch();
  const [category, setCategory] = useState("movie")
      
  useEffect(() => {
    dispatch(asyncloadperson(id)); 
    // return () => {
    //   dispatch(removeperson());
    // };
  }, []);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  return info ? (
    <div className='px-[7%] w-screen h-[170vh] bg-[#1F1E24] flex flex-col'>  
      {/* part 1 navigation    10min */}
      <nav 
          className='w-full h-[10vh] text-zinc-200 mt-5 mb-2 flex items-center gap-5 text-xl'>
          <Link onClick={() => navigate(-1)} className="hover:text-blue-400 ri-arrow-left-line"></Link>

      </nav>

      <div className='w-full flex '>
        {/* part 2 left profile photo and details */}
        <div className='w-[25%]'>
              <img 
                className='h-[45vh] shadow-lg shadow-blue-500/100 object-cover rounded' 
                src={`https://image.tmdb.org/t/p/original/${info.details.profile_path}`} 
                alt="" 
              />

              <hr className='mt-10 mb-5 bg-zinc-400 border-none h-[1px]'/>
              {/* social accounts */}
              <div className='text-2xl flex gap-5 text-white'>
                <a target="_blank" href={`https://www.facebook.com/${info.externalid.facebook_id}`}>
                  <i className='ri-facebook-circle-fill'></i>
                </a>

                <a target="_blank" href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}>
                    <i className='ri-earth-fill'></i>
                </a>
          
                <a target="_blank" href={`https://www.instagram.com/title/${info.externalid.instagram_id}`}>
                    <i className='ri-instagram-fill'></i>
                </a> 

                <a target="_blank" href={`https://twitter.com/title/${info.externalid.twitter_id}`}>
                    <i className='ri-twitter-x-fill'></i>
                </a> 
              </div>

              {/* personal information */}
              <h1 className='text-2xl text-zinc-400 font-semibold mt-3'>
                Person Info
              </h1>

              <h1 className='text-lg text-zinc-400 font-semibold mt-2'>
                Known For
              </h1>
              <h1 className='text-zinc-400 '>
                {info.details.known_for_department}
              </h1>

              <h1 className='text-lg text-zinc-400 font-semibold mt-2'>
                Gender
              </h1>
              <h1 className='text-zinc-400 '>
                {info.details.gender === 2 ? 'Male' : 'Female'}
              </h1>

              <h1 className='text-lg text-zinc-400 font-semibold mt-2'>
               Birthday
              </h1>
              <h1 className='text-zinc-400 '>
                {info.details.birthday}
              </h1>

              <h1 className='text-lg text-zinc-400 font-semibold mt-2'>
                Deathday
              </h1>
              <h1 className='text-zinc-400 '>
                {info.details.deathday ? info.details.deathday : "Alive"}
              </h1>

              <h1 className='text-lg text-zinc-400 font-semibold mt-2'>
               Place Of Birth
              </h1>
              <h1 className='text-zinc-400 '>
                {info.details.place_of_birth}
              </h1>

              <h1 className='text-lg text-zinc-400 font-semibold mt-2'>
               Also Known As
              </h1>
              <h1 className='text-zinc-400 '>
                {info.details.also_known_as.join(", ")}
              </h1>

        </div>

        {/* part 3 right */}
        <div className='w-[75%] ml-[6%]'>
          <h1 className='text-6xl text-zinc-400 font-semibold'>
               {info.details.name}
          </h1>

          <h1 className='text-xl underline text-zinc-400 font-semibold mt-3'>
              Biography
          </h1>
          <p className='text-zinc-400 italic mt-2'>{info.details.biography}</p>
        
          <h1 className='text-lg underline text-zinc-400 font-semibold mt-3'>
              Known for
          </h1>
          <HorizontalCards data={info.combinedCredits.cast}/>

          <div className='w-full flex justify-between'>
            <h1 className='text-xl text-zinc-400 font-semibold mt-3'>
                Acting
            </h1>

            <Dropdown title="Category" options={["tv", "movie"]} func={handleCategoryChange} />
          </div>

          <div className='w-full list-disc h-[50vh] text-zinc-400 p-5 mt-5 overflow-x-hidden overflow-y-auto shadow-lg shadow-[rgba(255,255,255,.3)]'>

            {info[category + "Credits"].cast.map((c,i) => (

              <li key={i} className='hover:text-blue-400 p-5 rounded hover:bg-[#19191d] cursor-pointer'>
              <Link to={`/${category}/detail/${c.id}`}>
                <span> {c.name || c.title || c.original_name || c.original_title}</span>
                <span className='block ml-5'>{c.character && `Character Name : ${c.character}`}</span>
              </Link>
              </li>
            ))}

          </div>

        </div>

      </div>

        {/* 
        */}

    </div>

  ) :(
    <Loading/>
  )
}

export default PersonDetails