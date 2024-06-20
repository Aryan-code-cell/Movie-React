import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { asyncloadmovie} from '../store/actions/movieActions';
import Loading from './Loading';
import HorizontalCards from './partials/HorizontalCards';

function MovieDetails() {

  const {pathname} = useLocation();
  const navigate = useNavigate();
  const {id} = useParams();
  const {info} = useSelector((state) => state.movie)
  // console.log(info);
  const dispatch = useDispatch();
      
  useEffect(() => {
    dispatch(asyncloadmovie(id)); 
    // return () => {
    //   dispatch(removemovie());
    // };
  }, []);

  return info ? (
    
    <div 
        style={{
        background:` linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.7), rgba(0,0,0,.6)), url(https://image.tmdb.org/t/p/original/${info.details.backdrop_path})`,
        backgroundPosition : "center",
        backgroundSize : "cover"}}
      
      className='relative w-screen h-[150vh] px-[10%] '>

      {/* part 1 navigation */}
      <nav 
          className='w-full h-[10vh] text-zinc-200  flex items-center gap-5 text-xl'>
          <Link onClick={() => navigate(-1)} className="hover:text-blue-400 ri-arrow-left-line"></Link>


          <a target="_blank" href={info.details.homepage}>
              <i className='ri-external-link-fill'></i>
          </a>

          <a target="_blank" href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}>
              <i className='ri-earth-fill'></i>
          </a>
         
          <a target="_blank" href={`https://www.imdb.com/title/${info.externalid.imdb_id}`}>
              <i>imdb</i>
          </a>

      </nav>

      {/* part 2 poster and detaial */}
      <div className='w-full flex'>
             <img 
                className='h-[50vh]  object-cover rounded shadow-zinc-400' 
                src={`https://image.tmdb.org/t/p/original/${info.details.poster_path || info.details.backdrop_path}`} 
                alt="" 
              />

              <div className='content ml-[5%] text-white'>

                <h1 className='text-4xl font-black uppercase flex items-end gap-2'>
                      {info.details.name || info.details.title || info.details.original_name || info.details.original_title}
                      <span className='text-zinc-400 text-xl'>
                        ({info.details.release_date.split("-")[0]})
                      </span>
                </h1>

                <div className='flex items-center gap-x-5 mt-2 mb-2'>

                  <span className='w-[6vh] h-[6vh] text-xl fond-semibold bg-yellow-400 rounded-full flex justify-center items-center '>
                    {(info.details.vote_average *10).toFixed()} <sup>%</sup>
                  </span>

                  <h1 className='text-2xl font-semibold'>User details</h1>
                  <h1>{info.details.release_date}</h1>
                  <h1>{info.details.genres.map((g) => g.name).join(", ")}</h1>
                  <h1>{info.details.runtime}min</h1>

                </div>

                <h1 className='text-2xl italic font-semibold text-zinc-200'>{info.details.tagline}</h1>

                <h1 className='text-xl font-semibold underline mt-3 mb-1'>Overview</h1>
                <p>{info.details.overview}</p>

                <h1 className='text-xl font-semibold underline mt-3 mb-1'>Movie Translated</h1>
                <p className='mb-6'>{info.translations.join(", ")}</p> 
                {/* 1:44:55 */}

                <Link className='bg-blue-400 p-4 rounded-lg' to={`${pathname}/trailer`}>
                  <i className="ri-play-fill text-xl mr-2"></i>
                  Play Trailer</Link>

              </div>
      </div>

      {/* part3 avilable platform    */} 
      <div className='w-[80%] flex flex-col gap-y-5 mt-10'>

             {info.watchproviders && info.watchproviders.flatrate && (
                <div className='text-white font-semibold flex gap-10 items-center '> 
                    <h1>Available on Platform : </h1>
                    {info.watchproviders.flatrate.map((w,i) => 
                        (
                          <img
                              key={i}
                              title={w.provider_name}
                              className='w-[5vh] h-[5vh] object-cover rounded-md' 
                              src={`https://image.tmdb.org/t/p/original/${w.logo_path}`} 
                              alt="" 
                          />
                    ))}
                </div>
             )}

            {info.watchproviders && info.watchproviders.rent && (
                <div className='text-white font-semibold flex gap-10 items-center '> 
                    <h1>Available on Rent : </h1>
                    {info.watchproviders.rent.map((w,i) => 
                        (
                          <img 
                              key={i}
                              title={w.provider_name}
                              className='w-[5vh] h-[5vh] object-cover rounded-md' 
                              src={`https://image.tmdb.org/t/p/original/${w.logo_path}`} 
                              alt="" 
                            />
                        ))}
                </div>
            )}

            {info.watchproviders && info.watchproviders.buy && (
                <div className='text-white font-semibold flex gap-10 items-center '> 
                    <h1>Available to buy : </h1>
                    {info.watchproviders.buy.map((w,i) => 
                       (
                         <img 
                              key={i}
                              title={w.provider_name}
                              className='w-[5vh] h-[5vh] object-cover rounded-md' 
                              src={`https://image.tmdb.org/t/p/original/${w.logo_path}`} 
                              alt="" 
                         />
                        ))}
                </div>
            )}

      </div>

      {/* part 4 recommendation and similar things */}
      <hr className='mt-10 mb-5 bg-zinc-400 border-none h-[2px]'/>
      <h1 className='text-2xl font-bold text-white'>Recommendations And Similar</h1>
      <HorizontalCards     
        data={info.recommendations ? info.recommendations : info.similar}
      />
    
            <Outlet  />

    </div>
  )
   : (
  <Loading />
  )

}

export default MovieDetails