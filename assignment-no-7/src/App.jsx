import React, { useState, useEffect } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/navbar'
import Banner from './components/banner'
import TicketCards from './components/ticketcards'
import TaskStatus from './components/taskstutas'
import Footer from './components/footer'

function App() {
  const [tickets, setTickets] = useState([])
  const [inProgressTickets, setInProgressTickets] = useState([])
  const [resolvedTickets, setResolvedTickets] = useState([])

  useEffect(() => {
    fetch('/fake-data.json')
      .then(response => response.json())
      .then(data => setTickets(data))
      .catch(error => console.error('Error loading tickets:', error))
  }, [])

  const handleTicketClick = (ticket) => {
    if (inProgressTickets.some(t => t.id === ticket.id)) {
      toast.info('Ticket is already in progress!')
      return
    }
    setInProgressTickets([...inProgressTickets, ticket])
    toast.success(`Ticket "${ticket.title}" added to Task Status!`)
  }

  const handleCompleteTicket = (ticketId) => {
    const ticket = inProgressTickets.find(t => t.id === ticketId)
    if (ticket) {
      setInProgressTickets(inProgressTickets.filter(t => t.id !== ticketId))
      setResolvedTickets([...resolvedTickets, ticket])
      toast.success(`Ticket "${ticket.title}" completed and resolved!`)
    }
  }

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'Critical': return 'text-red-600 bg-red-100'
      case 'High': return 'text-red-600 bg-red-100'
      case 'Medium': return 'text-yellow-600 bg-yellow-100'
      case 'Low': return 'text-green-600 bg-green-100'
      default: return 'text-gray-600 bg-gray-100'
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
            tickets={tickets.filter(ticket => !resolvedTickets.some(r => r.id === ticket.id))}
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
      
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        theme="light"
      />
    </div>
  )
}

export default App