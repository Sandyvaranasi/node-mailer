import Email from '../components/Email'
import Otp from '../components/Otp'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'

function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Email/>}/>
      <Route exact path='/otp' element={<Otp/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
