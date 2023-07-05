import React from 'react'
import Header from '../components/Header'
import ChatArea from '../components/ChatArea'
import TextMessage from '../components/TextMessage'

function Message() {
  return (
    <div className='bg-gray-950 h-screen w-full'>
      <main className='w-full bg-white mx-auto font-inter flex flex-col h-screen relative'>
        <Header />
        <ChatArea />
        <TextMessage />
      </main>
    </div>
  )
}

export default Message
