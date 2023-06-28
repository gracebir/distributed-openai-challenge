import React, { useState, useContext } from 'react'
import sent from '../assets/send.svg'
import axios from 'axios'
import { AppContext } from '../context/AppContext'

function TextMessage() {
  const {setMessages, messages} = useContext(AppContext)
    const [text, setText] = useState("")
    const requestMessage = async () => {
      const messageData = {
        message: text
      }
      const response = await axios.post('http://localhost:4000/openai', messageData)
      const data = await response.data
      const newAnswer = {
        isAi: true,
        text: data.completion,
        user: "AI"
      }
      const newMessage = {
        isAi: false,
        text: text,
        user: "Grace Birindwa"
      }
      setMessages([...messages, newMessage ,newAnswer])
    }
    const sendMessage = (e) => {
      if(e.key === "Enter"){
        requestMessage()
        setText("")
      }
    }

  return (
    <div className='px-4 py-4'>
      <div className='border border-gray-color w-full rounded-lg flex items-center pr-4'>
        <input value={text} name="text" onKeyDown={sendMessage} onChange={(e)=> setText(e.target.value)} placeholder='Type your prompt here...' className='rounded-lg outline-none w-full py-3 px-4 placeholder:text-gray-color scroll-hidden' type="text"/>
        <button onClick={sendMessage} className='cursor-pointer'>
            <img src={sent} alt="sent" />
        </button>
      </div>
    </div>
  )
}

export default TextMessage
