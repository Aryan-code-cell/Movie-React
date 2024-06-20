import React, { useEffect, useState } from 'react'
import Sidenav from './partials/Sidenav';
import Topnav from './partials/Topnav';
import axios from '../utils/axios';
import Header from './partials/Header';
import HorizontalCards from './partials/HorizontalCards';
import Dropdown from './partials/Dropdown';
import Loading from './Loading';

function Home() {

    document.title = "My | HomePage";
    const [wallpaper, setwallpaper] = useState(null);
    const [Trending, setTrending] = useState(null);
    const [category, setcategory] = useState("all");

    const GetHeaderwallpaper = async () => {
      try {

        const {data} = await axios.get(`/trending/all/day`);
        let randomdata = data.results[(Math.random() * data.results.length).toFixed()];

        setwallpaper(randomdata);
      }
      catch(error) {
        console.log("Errror: ", error);
      }
    };
  
    const GetTrending = async () => {
      try {

        const {data} = await axios.get(`/trending/${category}/day`);
        setTrending(data.results);
      }
      catch(error) {
        console.log("Errror: ", error);
      }
    };


    useEffect(() => {
      GetTrending();
      !wallpaper && GetHeaderwallpaper();
    }, [category])
    

  return wallpaper && Trending ? (
    <>
      <Sidenav />

      <div className='w-[80%] h-full overflow-auto overflow-x-hidden'>
          <Topnav />
          <Header data={wallpaper}/>

          <div className='my-2 mx-6  flex justify-between'>
              <h1 className='text-3xl font-semibold text-zinc-400'>
                Trending
              </h1>

              <Dropdown title="Filter" options={["Tv", "Movies", "All"]} func={(e)=> setcategory(e.target.value)} />
          </div>

          <HorizontalCards data={Trending} />  
    
      </div>

    </>

  ) : (
    <Loading />
  )
}

export default Home