import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

function Protected({ children }) {
   const { user } = useContext(AppContext)
   if (!user) {
      return <Navigate to={"/login"} />
   } else {
      return children
   }
}


export default Protected
