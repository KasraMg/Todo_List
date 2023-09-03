import { createContext, useEffect, useState } from "react";
import { Todo,Color,User } from "../assets/todo.Types";


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
console.log(localStorageData);

  if (localStorageData) {
    fetch(`http://localhost:4000/users?id=${localStorageData.token}`)
    .then(res=>res.json())
    .then(data=>{ 
      if (data) {
        console.log(data); 
        setUserInfos(data[0])
      }
    })


    fetch(`http://localhost:4000/users/${localStorageData.token}/todos`)
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      if (data) {
        setTodos(data)
        console.log(data);
      }
    })

  }else{
    fetch(`http://localhost:4000/firstTodos`)
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      if (data) {
        setTodos(data)
        console.log(data);
      }
    })
  }
}, []);

useEffect(() => {
  const localStorageData = JSON.parse(localStorage.getItem("user") as string)

  if (localStorageData) {
    fetch(`http://localhost:4000/users?id=${localStorageData.token}`)
    .then(res=>res.json())
    .then(data=>{ 
      if (data) {
        setUserInfos(data[0])
      }
    })


    fetch(`http://localhost:4000/users/${localStorageData.token}/todos`)
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      if (data) {
        console.log(data);
        
        setTodos(data)
      }
    })

  }else{
    fetch(`http://localhost:4000/firstTodos`)
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      if (data) {
        setTodos(data)
        console.log(data);
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
