import './App.css'
import { Outlet } from 'react-router-dom'
import MyNavBar from './components/MyNavBar'

function App() {
  return (
    <>
      <MyNavBar/>
      <Outlet />
    </>
  )
}

export default App
