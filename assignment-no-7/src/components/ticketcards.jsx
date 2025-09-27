import React from 'react'

const TicketCards = ({ tickets, onTicketClick, getPriorityColor, inProgressTickets }) => {
  return (
    <div className="lg:col-span-2">
      <h2 className="text-2xl font-bold mb-6 text-gray-700">Customer Tickets</h2>
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
                <p className="text-gray-600 text-sm mb-3">{ticket.description}</p>
                
                <div className="flex justify-between items-end">
                  <div className="flex flex-wrap gap-2 items-center">
                    <span className={`text-xs font-semibold uppercase ${getPriorityColor(ticket.priority)}`}>
                      {ticket.priority} PRIORITY
                    </span>
                    
                  </div>
                  
                  <div className="text-xs text-gray-500 text-right flex gap-2">
                    <p>{ticket.customer}</p>
                    <p>{ticket.createdAt}</p>
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