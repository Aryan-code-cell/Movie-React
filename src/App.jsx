import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './component/Home'
import Trending from './component/Trending'
import Popular from './component/Popular'
import Movie from './component/Movie'
import TVshows from './component/TVshows'
import People from './component/People'
import About from './component/About'
import Contact from './component/Contact'
import MovieDetails from './component/MovieDetails'
import TvDetails from './component/TvDetails'
import PersonDetails from './component/PersonDetails'
import Trailer from './component/partials/Trailer'
import Notf from './component/Notf'


function App() {
  return (
    <div className='bg-[#1F1E24] w-screen h-screen flex'>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />

        <Route path="/movie" element={<Movie />} />
        <Route path="/movie/detail/:id" element={<MovieDetails />} >
          <Route path="/movie/detail/:id/trailer" element={<Trailer />} />
        </Route>

        <Route path="/tvshows" element={<TVshows />} /> 
        <Route path="/tv/detail/:id" element={<TvDetails />} >
          <Route path="/tv/detail/:id/trailer" element={<Trailer />} />
        </Route>

        <Route path="/people" element={<People />} />
        <Route path="/person/detail/:id" element={<PersonDetails />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Notf />} />
      </Routes>

    </div>
  )
}

export default App