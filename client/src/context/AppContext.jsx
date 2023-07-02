import { createContext, useState, useEffect } from "react";
import axios from "axios";

const initialState = {
    messages: [],
    setMessages: null,
    user: "",
    login: null,
    signup: null,
    setUser: null,
    isLogged: false,
    setIsLogged: null
}

export const AppContext = createContext(initialState)

export const AppProvider = ({children}) => {
    const [messages, setMessages] = useState([])
    const [isLogged, setIsLogged] = useState(false)
    const [user, setUser] = useState("")

    const login = (user, token) => {
        localStorage.setItem("token", token)
        localStorage.setItem("user", user)
        setUser(user)
    }

    const register = (user, token) => {
        localStorage.setItem('token', token)
        localStorage.setItem("user", user)
        setUser(user)
    }
   
    useEffect(()=> {
        const getMessages = async () => {
            const response = await axios.get(`http://localhost:4000/messages/${user}`)
            const data = await response.data
            setMessages(data)
        }
        getMessages()
        setUser(localStorage.getItem("user"))
        setIsLogged(!!localStorage.getItem("isLogged"))
    }, [user])
    return (
        <AppContext.Provider value={{
            messages: messages,
            setMessages: setMessages,
            user: user, 
            setUser: setUser,
            isLogged: isLogged,
            setIsLogged: setIsLogged,
            login,
            signup: register
        }}>
            {children}
        </AppContext.Provider>
    )
}
