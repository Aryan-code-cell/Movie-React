import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Topnav from './partials/Topnav';
import Dropdown from './partials/Dropdown';
import Loading from './Loading';
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from '../utils/axios';
import Cards from './partials/Cards';

function TVshows() {
    const navigate = useNavigate();

    const [category, setCategory] = useState("airing_today");
    const [tv, settv] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    document.title = "My | TV Shows";

    const GetTv = async () => {
        try {
            const { data } = await axios.get(`/tv/${category}?page=${page}`);
            if (data.results.length > 0) {
                settv((prevState) => [...prevState, ...data.results]);
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
        settv([]);
        setHasMore(true);
    };

    useEffect(() => {
        refreshHandler();
    }, [category]);

    useEffect(() => {
        GetTv();
    }, [page]);

    return tv.length > 0 ? (
        <div className='w-screen h-screen'>

            <div className='px-[5%] mt-[2%] w-full flex items-center justify-between'>
                <h1 className='text-2xl font-semibold text-zinc-400'>
                    <i onClick={() => navigate(-1)} className="hover:text-blue-400 ri-arrow-left-line"></i>{" "}
                    TV <small className='ml-1 text-sm text-zinc-500 '>({category.toLocaleUpperCase()})</small>
                </h1>

                <div className='w-[70%] flex items-center'>
                    <Topnav />
                    <Dropdown title="Category" options={["on_the_air", "popular", "top-rated", "airing_today"]} func={(e) => setCategory(e.target.value)} />

                    <div className='w-[2%]'></div>
                </div>
            </div>

            <InfiniteScroll
                dataLength={tv.length}
                next={GetTv}
                hasMore={hasMore}
                loader={<h1>Loading...</h1>}
            >
                <Cards data={tv} title="tvshows" />
            </InfiniteScroll>

        </div>
    ) : (
        <Loading />
    );
}

export default TVshows