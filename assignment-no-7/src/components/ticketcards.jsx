import React from 'react'

const TicketCards = ({ tickets, onTicketClick, getPriorityColor, inProgressTickets }) => {
  return (
    <div className="lg:col-span-2">
      <h2 className="text-2xl font-bold mb-6 text-gray-700">Customer Tickets ({tickets.length})</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tickets.map((ticket) => {
          const isInProgress = inProgressTickets.some(t => t.id === ticket.id)
          
          return (
            <div 
              key={ticket.id} 
              className="card bg-white shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => onTicketClick(ticket)}
            >
              <div className="card-body">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="card-title text-lg text-gray-800">{ticket.title}</h3>
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
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{ticket.description}</p>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className={`text-xs font-semibold px-2 py-1 rounded ${getPriorityColor(ticket.priority)}`}>
                      {ticket.priority} PRIORITY
                    </span>
                    <span className="text-xs text-gray-500">{ticket.status}</span>
                  </div>
                  
                  <div className="flex justify-between items-center text-xs text-gray-500">
                    <span>👤 {ticket.customer}</span>
                    <span>📅 {ticket.createdAt}</span>
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