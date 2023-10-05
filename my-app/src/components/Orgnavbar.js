import React from 'react'
import { Link } from 'react-router-dom';
const Orgnavbar = () => {
  return (
    <nav className= "bg-black p-4">
    <div className="container mx-auto flex justify-between items-center">
      <div className="text-white font-bold text-lg">Organisers Portal</div>
      <ul className="flex space-x-4">
        <li>
          <Link
            to='/SellerHome' // Replace with actual links or React Router links
            className="text-white hover:text-blue-200 mr-5"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to='/productupload' // Replace with actual links or React Router links
            className="text-white hover:text-blue-200 mr-5"
          >
List Events          </Link>
        </li>
        <li>
          <a
            href="/payment" // Replace with actual links or React Router links
            className="text-white hover:text-blue-200 mr-10"
          >
            Payment
          </a>
          <Link to='/' type='button' className='text-black p-1 bg-blue-500 p-1/2 rounded'>customer's view</Link>
        </li>
      </ul>
    </div>
  </nav>
  )
}

export default Orgnavbar
