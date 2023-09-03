export type Todo ={
    [x: string]: any;
    id:number,
    content:string,
    date:number,
    bg:string,
    isComplate:boolean
  }

  export type Color = {
    name: string;
    id: number;
  };

  export type User = {
    email: string;  
    pass: number | string;
    name:string,
    id:string | null
  };

  export type NewTodo = {
    id: number | string,
    content:  string,
    date: number | string,
    bg: string,
    isComplate: boolean,
    userId: null | number
    time:number | string
  }