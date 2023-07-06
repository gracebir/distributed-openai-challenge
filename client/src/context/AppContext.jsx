import { createContext, useState, useEffect } from "react";
import { baseUrl } from "../utils/baseUrl";

const initialState = {
    messages: [],
    setMessages: null,
    user: "",
    login: null,
    logout: null,
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

    const logout = () => {
        setUser("")
        localStorage.removeItem("user")
        localStorage.removeItem("token")
        console.log("logout")
    }

    const register = (user, token) => {
        localStorage.setItem('token', token)
        localStorage.setItem("user", user)
        setUser(user)
    }
   
    useEffect(()=> {
        const getMessages = async () => {
            const response = await baseUrl.get(`/messages/${user}`)
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
            signup: register,
            logout
        }}>
            {children}
        </AppContext.Provider>
    )
}
