import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar bg-white shadow-lg">
      <div className="flex-1">
        <a className="text-xl font-bold ml-6 text-gray-700">CS — Ticket System</a>
      </div>
      <div className="flex-none mr-4">
        <ul className="menu menu-horizontal px-1 text-gray-600">
          <li><a>Home</a></li>
          <li><a>FAQ</a></li>
          <li><a>Changelog</a></li>
          <li><a>Blog</a></li>
          <li><a>Download</a></li>
          <li><a>Contact</a></li>
        </ul>
        <button className="btn btn-primary ml-4 bg-gradient-to-r from-violet-700 to-violet-600 rounded-l">+ New Ticket</button>
      </div>
    </div>
  )
}
export default Navbar