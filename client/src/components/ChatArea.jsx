import React, {useContext} from 'react'
import Chat from './Chat'
import { AppContext } from '../context/AppContext'

function ChatArea() {
  const {messages} = useContext(AppContext)
  console.log(messages)
  return (
    <div className='flex flex-col w-full flex-1 gap-4 overflow-y-scroll scroll-hidden relative p-4'>
      {messages?.map(({text, isAi, user}, i)=> (
        <Chat key={i} text={text} user={user} isAi={isAi}/>
      ))}
    </div>
  )
}

export default ChatArea
