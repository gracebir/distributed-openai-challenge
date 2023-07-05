import React from 'react'

function Chat({ isAi = false, text, user }) {
    return (
        <div className='w-full'>
            <div className={`${isAi ? "float-left flex-row-reverse" : "float-right"}  flex items-start gap-2`}>
                <div className='py-2 px-4 rounded-md bg-gray-color'>
                    <span className='text-text-color font-normal'>{text}</span>
                </div>
                <div className='bg-head-color px-3 py-2 text-white font-semibold rounded-lg'>{isAi ? "AI" : user.split('').slice(0,2).join('').toUpperCase()}</div>
            </div>
        </div>
    )
}

export default Chat
