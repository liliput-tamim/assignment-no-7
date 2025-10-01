import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-gray-800">CS — Ticket System</h1>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">FAQ</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Changelog</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Blog</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Download</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Contact</a>
            <button className="bg-gradient-to-r from-violet-700 to-violet-600 text-white px-4 py-2 rounded-lg hover:from-violet-800 hover:to-violet-700">
              + New Ticket
            </button>
          </div>
          <div className="md:hidden">
            <button className="bg-gradient-to-r from-violet-700 to-violet-600 text-white px-3 py-1 rounded text-sm">
              + New
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar