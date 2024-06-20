// import React, { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import Topnav from './partials/Topnav';
// import Dropdown from './partials/Dropdown';
// import axios from '../utils/axios';
// import Cards from './partials/Cards';
// import Loading from './Loading';
// import InfiniteScroll from 'react-infinite-scroll-component';

// function Trending() {
//     const navigate = useNavigate();
    
//     const [category, setcategory] = useState("all");
//     const [duration, setduration] = useState("day");
//     const [trending, settrending] = useState([]);
//     const [page, setpage] = useState(1);
//     const [hasmore, sethasmore] = useState(true);

//     const GetTrending = async () => {
//         try {
//           const {data} = await axios.get(`/trending/${category}/${duration}?page==${page}`);
//           // settrending(data.results);
//           if(data.results.length > 0) {
//             settrending((prevState) => [...prevState, ...data.results]);
//             // console.log(data);
//             setpage(page+1);
//           }

//           else{
//             sethasmore(false);
//           }
         
//         }
//         catch(error) {
//           console.log("Errror: ", error);
//         }
//       };


//     const refreshHandler = () => {
//       if(trending.length === 0) {
//         GetTrending();
//       }
//       else{
//         setpage(1);
//         settrending([]);
//         GetTrending();
//       }
//     }


//     useEffect(() => {
//         refreshHandler();
//     }, [category, duration])
//     // py-[2%]  px-[4%] 

//   return trending.length > 0 ? (
//     <div className='w-screen h-screen '>

//         <div className='px-[5%] mt-[2%] w-full flex items-center justify-between'>
//             <h1 className='text-2xl font-semibold text-zinc-400'>
//                 <i onClick={() => navigate(-1)} className="hover:text-blue-400 ri-arrow-left-line"></i>{" "}
//                 Trending
//             </h1>

//             <div className='w-[70%] flex items-center'>
//                 <Topnav />
//                 <Dropdown title="Category" options={["movie", "tv", "all"]} func={(e)=> setcategory(e.target.value)} />

//                 <div className='w-[2%]'></div>
//                 <Dropdown title="Duration" options={["day", "week", "month"]} func={(e) => setduration(e.target.value)} />

//             </div>

//         </div>

//         <InfiniteScroll 
//           dataLength={trending.length}
//           next={GetTrending}
//           hasMore={hasmore} 
//           loader={<h1>Loading...</h1>}
//         >

//               <Cards data={trending}  title={category} />

//         </InfiniteScroll>

//            </div>
//   )
//    : (
//     <Loading />
//   )
// }

// export default Trending




import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Topnav from './partials/Topnav';
import Dropdown from './partials/Dropdown';
import axios from '../utils/axios';
import Cards from './partials/Cards';
import Loading from './Loading';
import InfiniteScroll from 'react-infinite-scroll-component';

function Trending() {
    const navigate = useNavigate();

    const [category, setCategory] = useState("all");
    const [duration, setDuration] = useState("day");
    const [trending, setTrending] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    document.title = "My | Trending - " + category.toLocaleUpperCase();

    const getTrending = async () => {
        try {
            const { data } = await axios.get(`/trending/${category}/${duration}?page=${page}`);
            if (data.results.length > 0) {
                setTrending((prevState) => [...prevState, ...data.results]);
                setPage((prevPage) => prevPage + 1);
            } else {
                setHasMore(false);
            }
        } catch (error) {
            console.error("Error: ", error);
        }
    };

    const refreshHandler = () => {
        setPage(1);
        setTrending([]);
        setHasMore(true);
    };

    useEffect(() => {
        refreshHandler();
    }, [category, duration]);

    useEffect(() => {
        getTrending();
    }, [page]);

    return trending.length > 0 ? (
        <div className='w-screen h-screen'>

            <div className='px-[5%] mt-[2%] w-full flex items-center justify-between'>
                <h1 className='text-2xl font-semibold text-zinc-400'>
                    <i onClick={() => navigate(-1)} className="hover:text-blue-400 ri-arrow-left-line"></i>{" "}
                    Trending
                </h1>

                <div className='w-[70%] flex items-center'>
                    <Topnav />
                    <Dropdown title="Category" options={["movie", "tv", "all"]} func={(e) => setCategory(e.target.value)} />

                    <div className='w-[2%]'></div>
                    <Dropdown title="Duration" options={["day", "week", "month"]} func={(e) => setDuration(e.target.value)} />
                </div>
            </div>

            <InfiniteScroll
                dataLength={trending.length}
                next={getTrending}
                hasMore={hasMore}
                loader={<h1>Loading...</h1>}
            >
                <Cards data={trending} title={category} />
            </InfiniteScroll>

        </div>
    ) : (
        <Loading />
    );
}

export default Trending;
