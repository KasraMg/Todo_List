import { createContext, useState } from "react";
import { Todo,Color } from "../assets/todo.Types";


type AuthContextProviderProps = {
  children: React.ReactNode;
};

 
type TodolistContextType = {
    color: Color | null;
  setcolor: (color: Color | null) => void;
  todo:Todo[] | null;
  setTodos: (todo: Todo[] | null) => void;
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
'#0100ff70'
  return (
    <TodolistContext.Provider value={{ color, setcolor,todo,setTodos }}>
      {children}
    </TodolistContext.Provider>
  );
};
