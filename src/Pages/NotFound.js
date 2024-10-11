import React from 'react'
import errorImg from "../Assets/404.png"
import { useNavigate } from 'react-router'

const NotFound = () => {
    const navigate = useNavigate()

  return (
    <div className='container text-center mt-4'>
        <img src={errorImg} className='w-75' />
        <div>
        <button className="btn btn-success me-3" onClick={() => navigate("/")}>
          Go Home
        </button>
        <button className="btn btn-warning" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
    </div>
  )
}

export default NotFound