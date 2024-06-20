import React from 'react'
import { useNavigate } from 'react-router-dom';

function About() {
  const navigate = useNavigate()
    document.title = "My | About";
  return (
    // <div>About</div>
    <div className="w-full text-white p-6 bg-gradient-to-t from-blue-300 to-indigo-400 h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold mb-8">
        <i onClick={() => navigate(-1)} className="hover:text-red-500 ri-arrow-left-line"></i>{" "}
        About MoViEst
      </h1>
      <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg max-w-3xl text-center">
        <p className="text-xl mb-4">
          Welcome to <span className="font-bold text-red-500">MoViEst</span>, your ultimate destination for exploring movies and TV shows!
        </p>
        <p className="text-lg mb-4">
          Our mission is to provide you with the latest trends, popular movies, and detailed information about your favorite films and TV series.
        </p>
        <p className="text-lg mb-4">
          At MoViEst, we strive to create a comprehensive platform where you can discover new movies, read about trending shows, and stay updated with the entertainment world.
        </p>
        <p className="text-lg">
          Thank you for visiting MoViEst. We hope you enjoy your time here!
        </p>
      </div>
    </div>
  )
}

export default About