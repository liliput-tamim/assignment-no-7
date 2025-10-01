import React from 'react'
import vector1 from '../assets/vector1.png'

const Banner = ({ inProgressCount, resolvedCount }) => {
  return (
    <div className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* In Progress */}
          <div className="relative min-h-[200px] bg-gradient-to-r from-violet-700 to-violet-400 rounded-lg overflow-hidden">
            <img src={vector1} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />
            <div className="relative z-10 p-8 text-center text-white">
              <h2 className="text-2xl md:text-3xl mb-2 font-semibold">In Progress</h2>
              <div className="text-5xl md:text-6xl font-bold">{inProgressCount}</div>
            </div>
          </div>

          {/* Resolved */}
          <div className="relative min-h-[200px] bg-gradient-to-r from-green-500 to-green-700 rounded-lg overflow-hidden">
            <img src={vector1} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />
            <div className="relative z-10 p-8 text-center text-white">
              <h2 className="text-2xl md:text-3xl mb-2 font-semibold">Resolved</h2>
              <div className="text-5xl md:text-6xl font-bold">{resolvedCount}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner