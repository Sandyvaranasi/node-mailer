import Email from '../components/Email'
import Otp from '../components/Otp'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import './index.css'
import LoginSuccess from '../components/LoginSuccess'

function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Email/>}/>
      <Route exact path='/otp' element={<Otp/>}/>
      <Route exact path='/hurrah' element={<LoginSuccess/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
