import React from 'react'
import { useNavigate } from 'react-router-dom';

function Contact() {
  const navigate = useNavigate();
    document.title = "My | Contact us";
  return (
    // <div>Contact</div>
    <div className="text-white w-screen p-6 bg-gradient-to-b from-indigo-400 to-blue h-screen flex flex-col items-center justify-center">
      
      <h1 className="text-5xl font-bold mb-8">
        <i onClick={() => navigate(-1)} className="hover:text-yellow-400 ri-arrow-left-line"></i>{" "}
        Contact Us 
      </h1>

      <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg max-w-3xl text-center">
        <p className="text-xl mb-4">We'd love to hear from you! If you have any questions, feedback, or suggestions, please feel free to reach out to us:</p>
        <div className="text-lg mb-4">
          <p className="mb-2">
            <strong>Email:</strong> <a href="mailto:support@movist.com" className="text-yellow-400">support@moviest.com</a>
          </p>
          <p className="mb-2">
            <strong>Phone:</strong> <span className="text-yellow-300">+1 (555) 123-4567</span>
          </p>
          <p>
            <strong>Address:</strong> <span className="text-yellow-300">123 Movie Lane, Film City, CA 90210</span>
          </p>
        </div>
        <p className="text-lg">We look forward to hearing from you and will get back to you as soon as possible.</p>
      </div>
    </div>
  )
}

export default Contact