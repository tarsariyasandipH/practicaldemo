import React from 'react'
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <div className=" flex flex-col  md:flex-row h-20 w-screen bg-gray-300 items-center justify-between p-5">
        <div >
            <h1 className={'text-2xl font-bold'}> Practical Task</h1>
        </div>
      <nav>
          <ul className={'list-none flex space-x-5'}>
            <li className="list-none hover:text-red-300  rounded-full">
              <Link to="/">Home</Link>
            </li>
            
            <li className="list-none hover:text-red-300 rounded-full">
          
              <Link to="/head-tail">Head & Tail</Link>
            </li>
            <li className="list-none hover:text-red-300  rounded-full">
           
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
    </div>
  )
}
