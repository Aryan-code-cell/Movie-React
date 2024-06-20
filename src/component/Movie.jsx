import axios from '../utils/axios';
import React, { useEffect, useState } from 'react'
import Topnav from './partials/Topnav';
import Dropdown from './partials/Dropdown';
import InfiniteScroll from 'react-infinite-scroll-component';
import Cards from './partials/Cards';
import { useNavigate } from 'react-router-dom';
import Loading from './Loading';

function Movie() {
    const navigate = useNavigate();

    const [category, setCategory] = useState("now_playing");
    const [movie, setmovie] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    document.title = "My | Movies";

    const GetMovie = async () => {
        try {
            const { data } = await axios.get(`/movie/${category}?page=${page}`);
            if (data.results.length > 0) {
                setmovie((prevState) => [...prevState, ...data.results]);
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
        setmovie([]);
        setHasMore(true);
    };

    useEffect(() => {
        refreshHandler();
    }, [category]);

    useEffect(() => {
        GetMovie();
    }, [page]);

    return movie.length > 0 ? (
        <div className='w-screen h-screen'>

            <div className='px-[5%] mt-[2%] w-full flex items-center justify-between'>
                <h1 className='text-2xl font-semibold text-zinc-400'>
                    <i onClick={() => navigate(-1)} className="hover:text-blue-400 ri-arrow-left-line"></i>{" "}
                    Movie <small className='ml-1 text-sm text-zinc-500 '>({category.toLocaleUpperCase()})</small>
                </h1>

                <div className='w-[70%] flex items-center'>
                    <Topnav />
                    <Dropdown title="Category" options={["popular", "top-rated", "upcoming", "now-playing"]} func={(e) => setCategory(e.target.value)} />

                    <div className='w-[2%]'></div>
                </div>
            </div>

            <InfiniteScroll
                dataLength={movie.length}
                next={GetMovie}
                hasMore={hasMore}
                loader={<h1>Loading...</h1>}
            >
                <Cards data={movie} title="movie" />
            </InfiniteScroll>

        </div>
    ) : (
        <Loading />
    );
}

export default Movie