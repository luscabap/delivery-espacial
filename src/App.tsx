import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CreateAdress from './pages/createAdress'
import Header from './components/Header'

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<CreateAdress />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
