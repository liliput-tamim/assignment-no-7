import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/navbar'
import Banner from './components/banner'
import TicketCards from './components/ticketcards'
import TaskStatus from './components/taskstutas'
import Footer from './components/footer'
import useTickets from './hooks/tamim'


function App() {
  const {
    tickets,
    inProgressTickets,
    resolvedTickets,
    handleTicketClick,
    handleCompleteTicket,
    getPriorityColor
  } = useTickets()

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Banner 
        inProgressCount={inProgressTickets.length} 
        resolvedCount={resolvedTickets.length} 
      />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
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

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  )
}

export default App