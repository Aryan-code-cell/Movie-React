import axios from '../utils/axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Topnav from './partials/Topnav';
import Dropdown from './partials/Dropdown';
import Loading from './Loading';
import InfiniteScroll from 'react-infinite-scroll-component';
import Cards from './partials/Cards';

function Popular() {

    const navigate = useNavigate();

    const [category, setCategory] = useState("movie");
    const [popular, setpopular] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    document.title = "My | Popular - " + category.toLocaleUpperCase();

    const GetPopular = async () => {
        try {
            const { data } = await axios.get(`${category}/popular?page=${page}`);
            console.log(data);
            if (data.results.length > 0) {
                setpopular((prevState) => [...prevState, ...data.results]);
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
        setpopular([]);
        setHasMore(true);
    };

    useEffect(() => {
        refreshHandler();
    }, [category]);

    useEffect(() => {
        GetPopular();
    }, [page]);



    return popular.length > 0 ? (
        <div className='w-screen h-screen'>

            <div className='px-[5%] mt-[2%] w-full flex items-center justify-between'>
                <h1 className='text-2xl font-semibold text-zinc-400'>
                    <i onClick={() => navigate(-1)} className="hover:text-blue-400 ri-arrow-left-line"></i>{" "}
                    Popular
                </h1>

                <div className='w-[70%] flex items-center'>
                    <Topnav />
                    
                    <Dropdown title="Category" options={["movie", "tv", "all"]} func={(e) => setCategory(e.target.value)} />

                    <div className='w-[2%]'></div>
                    {/* <Dropdown title="Duration" options={["day", "week", "month"]} func={(e) => setDuration(e.target.value)} /> */}
                </div>
            </div>

            <InfiniteScroll
                dataLength={popular.length}
                next={GetPopular}
                hasMore={hasMore}
                loader={<h1>Loading...</h1>}
            >
                <Cards data={popular} title={category} />
            
            </InfiniteScroll>

        </div>
    ) : (
        <Loading />
    );
}

export default Popular