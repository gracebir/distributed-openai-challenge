import { Routes, Route } from 'react-router-dom'
import SignIn from './pages/SignIn'
import Message from './pages/Message'
import SignUp from './pages/SignUp'
import Protected from './components/Protected'

function App() {

  return (
    <>
      <Routes>
        <Route path='/login' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/' element={
          <Protected>
            <Message />
          </Protected>
        } />
      </Routes>
    </>
  )
}

export default App
