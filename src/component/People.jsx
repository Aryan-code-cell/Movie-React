import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Topnav from './partials/Topnav';
import Dropdown from './partials/Dropdown';
import Loading from './Loading';
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from '../utils/axios';
import Cards from './partials/Cards';
function People() {
    const navigate = useNavigate();

    const [category, setCategory] = useState("popular");
    const [person, setperson] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    document.title = "My | Persons";

    const GetPerson = async () => {
        try {
            const { data } = await axios.get(`/person/${category}?page=${page}`);
            if (data.results.length > 0) {
                setperson((prevState) => [...prevState, ...data.results]);
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
        setperson([]);
        setHasMore(true);
    };

    useEffect(() => {
        refreshHandler();
    }, [category]);

    useEffect(() => {
        GetPerson();
    }, [page]);

    return person.length > 0 ? (
        <div className='w-screen h-screen'>

            <div className='px-[5%] mt-[2%] w-full flex items-center justify-between'>
                <h1 className='text-2xl font-semibold text-zinc-400'>
                    <i onClick={() => navigate(-1)} className="hover:text-blue-400 ri-arrow-left-line"></i>{" "}
                    People 
                </h1>

                <div className='w-[30%] flex items-center'>
                    <Topnav />
                </div>
            </div>

            <InfiniteScroll
                dataLength={person.length}
                next={GetPerson}
                hasMore={hasMore}
                loader={<h1>Loading...</h1>}
            >
                <Cards data={person} title="person" />
            </InfiniteScroll>

        </div>
    ) : (
        <Loading />
    );
}

export default People