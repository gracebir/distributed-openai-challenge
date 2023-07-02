import React, { useState, useContext } from 'react'
import sent from '../assets/send.svg'
import {baseUrl} from '../utils/baseUrl'
import { AppContext } from '../context/AppContext'

function TextMessage() {
  const { setMessages, messages, user } = useContext(AppContext)
  const [text, setText] = useState("")
  const requestMessage = async () => {
    const newMessage = {
      isAi: false,
      text: text,
      user: user
    }
    let newMessageData = [...messages, newMessage]
    setMessages(newMessageData)
    const messageData = {
      isAi: false,
      text: text,
      user: user
    }
    const response = await baseUrl.post('/openai', messageData)
    const data = response.data
    const newAnswer = {
      isAi: true,
      text: data.completion,
      user: user
    }

    await setMessages([...newMessageData, newAnswer])
  }
  const sendMessage = (e) => {
    e.preventDefault()
    requestMessage()
    setText("")
    console.log("submit")
  }

  return (
    <div className='px-4 py-4'>
      <form onSubmit={sendMessage} className='border border-gray-color w-full rounded-lg flex items-center pr-4'>
        <input value={text} name="text" onChange={(e) => setText(e.target.value)} placeholder='Type your prompt here...' className='rounded-lg outline-none w-full py-3 px-4 placeholder:text-gray-color scroll-hidden' type="text" />
        <button className='cursor-pointer'>
          <img src={sent} alt="sent" />
        </button>
      </form>
    </div>
  )
}

export default TextMessage
