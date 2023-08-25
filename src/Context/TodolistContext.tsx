import { createContext, useState } from "react";

type AuthContextProviderProps = {
  children: React.ReactNode;
};

type Color = {
  name: string;
  id: number;
};

type TodolistContextType = {
    color: Color | null;
  setcolor: (color: Color | null) => void;
};

export const TodolistContext = createContext<TodolistContextType | null>(null);

export const TodolistProvider = ({ children }: AuthContextProviderProps) => {
  const [color, setcolor] = useState<Color | null>(
    {
        id:99,
        name:'#0100ff70'
    }
  );
'#0100ff70'
  return (
    <TodolistContext.Provider value={{ color, setcolor }}>
      {children}
    </TodolistContext.Provider>
  );
};
