import { createContext, useEffect, useState } from "react";
import { Todo,Color } from "../assets/todo.Types";


type AuthContextProviderProps = {
  children: React.ReactNode;
};

 
type TodolistContextType = {
    color: Color | null;
  setcolor: (color: Color | null) => void;
  todo:Todo[] | null; 
  setTodos:  React.Dispatch<React.SetStateAction<Todo[] | null>>
};

export const TodolistContext = createContext<TodolistContextType | null>(null);

export const TodolistProvider = ({ children }: AuthContextProviderProps) => {
  const [color, setcolor] = useState<Color | null>(
    {
        id:99,
        name:'#0100ff70'
    }
  ); 
 
 


const [todo,setTodos]=useState <Todo[] | null>([
  {
  id: 1, 
  content: "I've heard good things.",
  date: 1,
  bg:'red',
  isComplate:true
  },
  {
    id: 2, 
    content: "I've heard good things.",
    date: 1,
    bg:'blue',
    isComplate:false
    },
]
  
  
)
useEffect(() => {
  (async () => {
    const res = await fetch("http://localhost:4000/todos");
    const data = (await res.json()) as Todo[];
    setTodos(data);
  })();
}, []);

  return (
    <TodolistContext.Provider value={{ color, setcolor,todo,setTodos }}>
      {children}
    </TodolistContext.Provider>
  );
};
