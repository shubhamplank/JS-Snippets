import { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'

const useRBAC = (allowedRoles) => {
  const [isAllowed, setIsAllowed] = useState(true) // Assume default allowed

  useEffect(() => {
    const checkAccess = () => {
      const userRole = localStorage.getItem('userRole') // Fetch user's role from localStorage
      if (!allowedRoles.includes(userRole)) {
        setIsAllowed(false) // User does not have access
      }
    }

    checkAccess() // Initial check when component mounts or allowedRoles change
  }, [allowedRoles]) // Re-run effect if allowedRoles change

  // Function to render component or redirect to unauthorized page
  const renderComponent = (component) => {
    return isAllowed ? component : <Redirect to="/unauthorized" />
  }

  return { renderComponent }
}

export default useRBAC
