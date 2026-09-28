import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import GaragePage from './pages/GaragePage'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/garage" element={<GaragePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
