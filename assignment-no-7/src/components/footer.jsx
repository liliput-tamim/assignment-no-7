import React from 'react'

const Footer = () => {
  return (
    <div className="bg-black text-white">
      <footer className="p-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className='lg:col-span-2'>
              <h2 className='text-2xl font-bold text-white mb-4'>CS — Ticket System</h2>
              <p className='text-gray-400 leading-relaxed'>Professional customer support ticket management system. Streamline your support workflow and enhance customer satisfaction with our comprehensive solution.</p>
            </div>

            <div>
              <h3 className='font-bold text-white mb-4'>Company</h3>
              <ul className='space-y-3 text-gray-400'>
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Our Mission</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Sales</a></li>
              </ul>
            </div>

            <div>
              <h3 className='font-bold text-white mb-4'>Services</h3>
              <ul className='space-y-3 text-gray-400'>
                <li><a href="#" className="hover:text-white transition-colors">Ticket Management</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Customer Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Analytics</a></li>
              </ul>
            </div>

            <div>
              <h3 className='font-bold text-white mb-4'>Support</h3>
              <ul className='space-y-3 text-gray-400'>
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Support</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      
      <div className="bg-gray-900 text-center py-4 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-gray-400">© 2025 CS — Ticket System. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
