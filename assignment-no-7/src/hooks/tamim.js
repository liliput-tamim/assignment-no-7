import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'

const useTickets = () => {
  const [tickets, setTickets] = useState([])
  const [inProgressTickets, setInProgressTickets] = useState([])
  const [resolvedTickets, setResolvedTickets] = useState([])
  
  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await fetch('/fake-data.json')
        const data = await response.json()
        setTickets(data)
      } catch (error) {
        console.error('Error fetching tickets:', error)
        toast.error('Failed to load tickets')
      }
    }
    
    fetchTickets()
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
    const ticketToComplete = inProgressTickets.find(t => t.id === ticketId)
    
    if (!ticketToComplete) return
    
    const newInProgress = inProgressTickets.filter(t => t.id !== ticketId)
    const newResolved = [...resolvedTickets, { ...ticketToComplete, status: 'Resolved' }]
    const newTickets = tickets.filter(t => t.id !== ticketId)
    
    setInProgressTickets(newInProgress)
    setResolvedTickets(newResolved)
    setTickets(newTickets)
    toast.success(`Ticket "${ticketToComplete.title}" completed and resolved!`)
  }

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'Critical': return 'text-blue-600'
      case 'High': return 'text-red-600'
      case 'Medium': return 'text-yellow-600'
      case 'Low': return 'text-green-600'
      default: return 'text-gray-600'
    }
  }

  return {
    tickets,
    inProgressTickets,
    resolvedTickets,
    handleTicketClick,
    handleCompleteTicket,
    getPriorityColor
  }
}

export default useTickets