import React from 'react'

const TaskStatus = ({ inProgressTickets, resolvedTickets, onCompleteTicket }) => {
  return (
    <div className="lg:col-span-1">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Task Status</h2>
      <div className="bg-white rounded-lg shadow-lg p-6">
        {inProgressTickets.length === 0 ? (
          <p className="text-gray-500 text-center py-8">No tickets in progress</p>
        ) : (
          <div className="space-y-4">
            {inProgressTickets.map((ticket) => (
              <div key={progress-${ticket.id}} className="border rounded-lg p-4">
                <h4 className="font-semibold mb-2 text-gray-700">{ticket.title}</h4>
                
                <button 
                  className="btn-sm w-full bg-green-600 p-1 rounded-[5px] text-white"
                  onClick={() => onCompleteTicket(ticket.id)}
                >
                  Complete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {resolvedTickets.length > 0 && (
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-4 text-gray-800">Resolved Task</h3>
          <div className="space-y-3">
            {resolvedTickets.map((ticket) => (
              <div key={resolved-${ticket.id}} className="bg-gray-200 border rounded-lg p-4">
                <h4 className="font-semibold text-gray-700 mb-1">{ticket.title}</h4>
                
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default TaskStatus