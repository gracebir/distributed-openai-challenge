import {Routes, Route} from 'react-router-dom'
import SignIn from './pages/SignIn'
import Protected from './components/Protected'
import Message from './pages/Message'
import { useContext} from 'react'
import { AppContext } from './context/AppContext'
import SignUp from './pages/SignUp'

function App() {
  const {isLogged} = useContext(AppContext)

  return (
    <>
    <Routes>
      <Route path='/' element={<SignIn/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/chat' element={
          <Message/>
      }/>
    </Routes>
    </>
  )
}

export default App
