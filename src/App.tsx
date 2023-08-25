import Header from './Components/Header/Header'
import './App.css'

import  routes from './routes'
import { useRoutes } from 'react-router-dom'

function App() {

  let router =useRoutes(routes)

  return (
    <>
    <Header/>
     {router}
    </>
  )
}

export default App
