import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    <li><a>Item 1</a></li>
                    <li>
                    <a>Parent</a>
                    <ul className="p-2">
                        <li><a>Submenu 1</a></li>
                        <li><a>Submenu 2</a></li>
                    </ul>
                    </li>
                    <li><a>Item 3</a></li>
                </ul>
                </div>
                <a className="btn btn-ghost text-xl">Career Hub</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                <li><NavLink to={'/'} className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-bold underline"
              : "text-green-600 hover:text-blue-500"}>Statistics</NavLink></li>
                <li><NavLink to={'/appliedjobs'} className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-bold underline"
              : "text-green-600 hover:text-blue-500"}>Applied Jobs</NavLink></li>
              <li><NavLink to={'/blog'} className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-bold underline"
              : "text-green-600 hover:text-blue-500"}>Blog</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                <Link to={'/Login'} className="btn">Login</Link>
            </div>
            </div>
    </nav>
  )
}

export default NavBar