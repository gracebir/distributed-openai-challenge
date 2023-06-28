import { createContext, useState, useEffect } from "react";
import axios from "axios";

const initialState = {
    messages: [],
    setMessages: null,
    user: "",
    setUser: null
}

export const AppContext = createContext(initialState)

export const AppProvider = ({children}) => {
    const [messages, setMessages] = useState([])
    const [user, setUser] = useState("")
    useEffect(()=> {
        const getMessages = async () => {
            const response = await axios.get(`http://localhost:4000/messages/${user ? user : 'Grace Birindwa'}`)
            const data = await response.data
            setMessages(data)
        }
        getMessages()
    }, [user])
    return (
        <AppContext.Provider value={{
            messages: messages,
            setMessages: setMessages,
            user: user, 
            setUser: setUser
        }}>
            {children}
        </AppContext.Provider>
    )
}
