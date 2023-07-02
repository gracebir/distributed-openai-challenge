import { Routes, Route } from 'react-router-dom'
import SignIn from './pages/SignIn'
import Message from './pages/Message' 
import SignUp from './pages/SignUp'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/chat' element={
          <Message />
        } />
      </Routes>
    </>
  )
}

export default App
