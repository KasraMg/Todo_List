 import TodoList from './Components/TodoList/TodoList'
 import Login from './Components/Login/Login'
 import Register from './Components/Register/Register'
let routes =[
   {
         path:'/' ,element:<TodoList/>
   },
   {
         path:'/Login' ,element:<Login/>
   },
   {
         path:'/Register' ,element:<Register/>
   },
    
]


export default routes