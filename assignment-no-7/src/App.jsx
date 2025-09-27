import React, { useState } from 'react'
import Navbar from './components/navbar'
import Banner from './components/banner'
import TicketCards from './components/ticketcards'
import TaskStatus from './components/taskstutas'
import Footer from './components/footer'

function App() {
  const [tickets] = useState([
    { id: 1, title: 'Login Issue', description: 'User cannot login to account', priority: 'high', customer: 'John Doe', createdAt: '2025-01-15' },
    { id: 2, title: 'Payment Problem', description: 'Payment gateway not working', priority: 'medium', customer: 'Jane Smith', createdAt: '2025-01-14' }
  ])
  const [inProgressTickets, setInProgressTickets] = useState([])
  const [resolvedTickets, setResolvedTickets] = useState([])

  const handleTicketClick = (ticket) => {
    if (!inProgressTickets.some(t => t.id === ticket.id)) {
      setInProgressTickets([...inProgressTickets, ticket])
    }
  }

  const handleCompleteTicket = (ticketId) => {
    const ticket = inProgressTickets.find(t => t.id === ticketId)
    if (ticket) {
      setInProgressTickets(inProgressTickets.filter(t => t.id !== ticketId))
      setResolvedTickets([...resolvedTickets, ticket])
    }
  }

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'high': return 'text-red-600'
      case 'medium': return 'text-yellow-600'
      case 'low': return 'text-green-600'
      default: return 'text-gray-600'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Banner 
        inProgressCount={inProgressTickets.length} 
        resolvedCount={resolvedTickets.length} 
      />
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <TicketCards 
            tickets={tickets}
            onTicketClick={handleTicketClick}
            getPriorityColor={getPriorityColor}
            inProgressTickets={inProgressTickets}
          />
          <TaskStatus 
            inProgressTickets={inProgressTickets}
            resolvedTickets={resolvedTickets}
            onCompleteTicket={handleCompleteTicket}
          />
        </div>
      </div>

      <Footer />


    </div>
  )
}

export default App