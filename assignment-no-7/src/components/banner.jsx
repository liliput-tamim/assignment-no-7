const Banner = ({ inProgressCount, resolvedCount }) => {
  return (
    <div className="min-h-[300px] mt-[50px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
        {/* In Progress  */}
        <div className="relative min-h-[200px] bg-gradient-to-r from-violet-700 to-violet-400 rounded-lg overflow-hidden">
          <div 
            className="absolute inset-0 bg-contain bg-left bg-no-repeat"
            style={{
              backgroundImage: "url('/vector1.png')"
            }}
          ></div>
          <div 
            className="absolute inset-0 bg-contain bg-right bg-no-repeat rotate-[270deg]"
            style={{ 
              backgroundImage: "url('/vector1.png')"
            }}
          ></div>
          <div className="relative z-10 p-8 text-center text-white">
            <h2 className="text-3xl mb-2">In Progress</h2>
            <div className="text-6xl font-bold">{inProgressCount}</div>
          </div>
        </div>

        {/* Resolved */}
        <div className="relative min-h-[200px] bg-gradient-to-r from-green-500 to-green-700 rounded-lg overflow-hidden">
          <div 
            className="absolute inset-0 bg-contain bg-left bg-no-repeat"
            style={{
              backgroundImage: "url('/vector1.png')"
            }}
          ></div>
          <div 
            className="absolute inset-0 bg-contain bg-right bg-no-repeat"
            style={{ 
              backgroundImage: "url('/vector1.png')"
            }}
          ></div>
          <div className="relative z-10 p-8 text-center text-white">
            <h2 className="text-3xl mb-2">Resolved</h2>
            <div className="text-6xl font-bold">{resolvedCount}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Banner
