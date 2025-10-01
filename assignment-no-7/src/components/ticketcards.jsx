import React from 'react'
import { CiCalendar } from "react-icons/ci";
const TicketCards = ({ tickets, onTicketClick, getPriorityColor, inProgressTickets }) => {
  return (
    <div className="lg:col-span-2">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Customer Tickets</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tickets.map((ticket) => {
          const isInProgress = inProgressTickets.some(t => t.id === ticket.id)
          
          return (
            <div 
              key={ticket.id} 
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer border border-gray-200 hover:border-violet-300"
              onClick={() => onTicketClick(ticket)}
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold text-gray-800">{ticket.title}</h3>
                  <button 
                    className={`px-3 py-1 text-xs rounded ${isInProgress ? 'bg-yellow-200 text-yellow-800' : 'bg-green-100 text-green-700'}`}
                    onClick={(e) => {
                      e.stopPropagation()
                      onTicketClick(ticket)
                    }}
                  >
                    {isInProgress ? 'In Progress' : 'Open'}
                  </button>
                </div>
                <p className="text-gray-600 text-base mb-3 line-clamp-2 leading-relaxed">{ticket.description}</p>
                
                <div className="flex justify-between items-end">
                  <div className="flex flex-wrap gap-2 items-center">
                    <span className={`text-xs font-semibold uppercase ${getPriorityColor(ticket.priority)}`}>
                      {ticket.priority} PRIORITY
                    </span>
                    
                  </div>
                  
                  <div className="text-xs text-gray-500 text-right flex items-center gap-2">
                    <p>{ticket.customer}</p>
                    <p className="flex items-center gap-1"><CiCalendar />{ticket.createdAt}</p>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TicketCards