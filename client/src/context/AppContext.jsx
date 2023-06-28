import { createContext, useState } from "react";

const initialState = {
    messages: [],
    setMessages: null
}

export const AppContext = createContext(initialState)

export const AppProvider = ({children}) => {
    const [messages, setMessages] = useState([])
    return (
        <AppContext.Provider value={{
            messages: messages,
            setMessages: setMessages
        }}>
            {children}
        </AppContext.Provider>
    )
}
