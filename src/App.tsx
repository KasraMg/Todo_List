import Header from './Components/Header/Header'
import './App.css' 
import  routes from './routes'
import { useRoutes } from 'react-router-dom'
import { TodolistProvider } from './Context/TodolistContext'


const App=()=> {

  let router =useRoutes(routes)

  return (
    <TodolistProvider>
    <Header/>
     {router} 
    </TodolistProvider>
  )
}

export default App
