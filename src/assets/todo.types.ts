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