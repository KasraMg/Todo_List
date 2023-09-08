import { createContext, useEffect, useState } from "react";
import { Todo,Color,User } from "../Types/Todo.types";


type AuthContextProviderProps = {
  children: React.ReactNode;
};

 
 
type TodolistContextType = {
  color: Color | null;
  setcolor: (color: Color | null) => void;
  todo:Todo[] | null; 
  setTodos:  React.Dispatch<React.SetStateAction<Todo[] | null>>,
  filter:String,
  setFilter:  React.Dispatch<React.SetStateAction<String>>,
  userInfos:User | null ,
  setUserInfos:React.Dispatch<React.SetStateAction<User | null>>,
};

export const TodolistContext = createContext<TodolistContextType | null>(null);

export const TodolistProvider = ({ children }: AuthContextProviderProps) => {
  const [color, setcolor] = useState<Color | null>(
    {
        id:99,
        name:'#0100ff70'
    }
  ); 
 
 const [userInfos,setUserInfos]=useState<User | null >(null) 
const [todo,setTodos]=useState <Todo[] | null>(null) 
const [filter, setFilter] = useState<String>('All_Todoes');

useEffect(() => {
  
  const localStorageData = JSON.parse(localStorage.getItem("user") as string)
 

  if (localStorageData) {
    fetch(`https://todo-backend.iran.liara.run/users?id=${localStorageData.token}`)
    .then(res=>res.json() )
    .then(data=>{ 
      if (data) { 
        setUserInfos(data[0] as User)
      }
    })


    fetch(`https://todo-backend.iran.liara.run/users/${localStorageData.token}/todos`)
    .then(res=>res.json())
    .then(data=>{ 
      if (data) {
        setTodos(data as Todo[]) 
      }
    })

  }else{
    fetch(`https://todo-backend.iran.liara.run/firstTodos`)
    .then(res=>res.json())
    .then(data=>{ 
      if (data) {
        setTodos(data  as Todo[]) 
      }
    })
  }
}, []);

useEffect(() => {
  const localStorageData = JSON.parse(localStorage.getItem("user") as string)

  if (localStorageData) {
    fetch(`https://todo-backend.iran.liara.run/users?id=${localStorageData.token}`)
    .then(res=>res.json())
    .then(data=>{ 
      if (data) {
        setUserInfos(data[0]  as User)
      }
    })


    fetch(`https://todo-backend.iran.liara.run/users/${localStorageData.token}/todos`)
    .then(res=>res.json())
    .then(data=>{ 
      if (data) {  
        setTodos(data  as Todo[])
      }
    })

  }else{
    fetch(`https://todo-backend.iran.liara.run/firstTodos`)
    .then(res=>res.json())
    .then(data=>{ 
      if (data) {
        setTodos(data  as Todo[]) 
      }
    })
  }
}, [location.href])

  return (
    <TodolistContext.Provider value={{ color, setcolor,todo,setTodos,filter, setFilter,userInfos,setUserInfos}}>
      {children}
    </TodolistContext.Provider>
  );
};

