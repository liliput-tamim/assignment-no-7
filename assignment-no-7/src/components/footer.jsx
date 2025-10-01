import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
const Footer = () => {
  return (
    <div>
      <footer className="p-10 bg-black text-base-content">
        <div className="flex flex-wrap gap-8">
          <div className='flex-1 min-w-64'>
            <h2 className='text-2xl font-bold'>CS — Ticket System</h2>
            <p className='text-gray-400'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>

          <div>
            <h3 className='font-bold'>Company</h3>
            <ul className='space-y-2 text-gray-400'>
              <li><a href="">About Us</a></li>
              <li><a href="">Our Mission</a></li>
              <li><a href="">Contact Saled</a></li>
            </ul>
          </div>

          <div>
            <h3 className='font-bold'>Services</h3>
            <ul className='space-y-2 text-gray-400'>
              <li><a href="">Products & Services</a></li>
              <li><a href="">Customer Stories</a></li>
              <li><a href="">Download Apps</a></li>
            </ul>
          </div>

          <div>
            <h3 className='font-bold'>Information</h3>
            <ul className='space-y-2 text-gray-400'>
              <li><a href="">Privacy Policy</a></li>
              <li><a href="">Terms & Conditions</a></li>
              <li><a href="">Join Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className='font-bold'>Social Links</h3>
            <ul className='space-y-2 text-gray-400'>
              <li><a href="" className='flex items-center gap-2'><FaFacebook />@CS — Ticket System</a></li>
              <li><a href="" className='flex items-center gap-2'><FaSquareXTwitter />@CS — Ticket System</a></li>
              <li><a href="" className='flex items-center gap-2'><FaLinkedin />@CS — Ticket System</a></li>
              <li><a href="" className='flex items-center gap-2'><MdOutlineEmail />support@cst.com</a></li>
            </ul>
          </div>
        </div>
      </footer>
      
      <div className="bg-black text-center py-4 border-t border-gray-500">
        <p>© 2025 CS — Ticket System. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer