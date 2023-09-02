
import { Container } from '@mui/material';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Button } from '@mui/material'
import './TodoList.css' 
import Todoes from '../Todoes/Todoes'; 
import colors from '../../assets/data'
import { useState,useContext } from 'react'
import { TodolistContext } from '../../Context/TodolistContext';
import { Color,Todo } from '../../assets/todo.Types';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
const useStyles = makeStyles({
  input: {
    borderRadius: '10px',
    outline: '0',
    border: 'none', 
    padding: '.8rem 1rem',
    width: '-webkit-fill-available',
    color:'white'
  },
  aside:{
    width:'50px',
    height:'100%',
    position:'fixed',
    top:'0',
    left:'0', 
    display:'flex',
    justifyContent:'center',
    flexDirection:'column',
    gap:'32px',
    borderRight:'1px solid black'
  },
  asideSection:{
    width:'15px',
    height:'15px',
    borderRadius:'2px',
    margin:'0px auto',
    cursor:'pointer'
  }
});

 

export default function TodoList() {
  const classes = useStyles();
  const context=useContext(TodolistContext)
  const [allColors,setAllcolors]=useState<Color[]>(colors)
  const [todoInput,setTodoInput]=useState<string>()
  const navigate=useNavigate()
const selectColor=(obj:Color)=>{
  context?.setcolor(obj)
}

const localStorageData = JSON.parse(localStorage.getItem("user") as string)
const updateTodos=async()=>{
  if (localStorageData) {
    const res = await fetch(`http://localhost:4000/users/${localStorageData.token}/todos`);
const data = (await res.json()) as Todo[];
context?.setTodos(data);
}
}

const todoChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
  setTodoInput(e.target.value)
}

const createTodo=async()=>{

 let newId= crypto.randomUUID()
 const localStorageData = JSON.parse(localStorage.getItem("user") as string)
 
if (localStorageData) {
  let newTodo={
    id: newId , 
    content: todoInput as string,
    date: 0,
    bg:context?.color?.name as string,
    isComplate:false,
    userId:localStorageData ? localStorageData.token: null
  }
    const res = await fetch("http://localhost:4000/todos",{
    method:'POST',
    headers:{
      "Content-Type": "application/json"
    },
    body:JSON.stringify(newTodo)
  }); 
  console.log(res);
  if (res.status == 201) {
    updateTodos() 
    swal({
      title:'Todo was added',
      icon:'success'
    })
  }
}else{
  swal({

    title:'please login/register in site',
    icon:'warning',
    buttons:['lets go to login','stay']
  }).then(res=>{
    if (!res) {
        navigate('/Login')
    }
  
  })
}
 

 
 
  setTodoInput("")
  
  

  

 
    
}
  return (
    <> 

    <Container>

      <Grid container flexDirection={'row-reverse'} className='topbar'  alignItems={'center'} spacing={5}> 
       <Grid item  sm={6} xs={12}>
          <img  width={'100%'} src="/undraw_developer_activity_re_39tg.svg" alt="" />
        </Grid>
        <Grid item sm={6} xs={12}>
          <input value={todoInput} onChange={todoChange} style={{backgroundColor:context?.color?.name}} placeholder='Type Somethings...' className={classes.input} type="text" />
          <Button onClick={createTodo} style={{ backgroundColor: '#0100ff70', marginTop: '1rem' }} variant="contained">Submit</Button>
        </Grid>
      
      </Grid>


      <hr className="sep-3" />

      <Todoes/>

    </Container>

    <aside className={classes.aside}>
        {allColors.map(color=>(
          <div onClick={()=>selectColor(color)} className={classes.asideSection} style={{backgroundColor:color.name}}></div>
        ))}
    </aside>
    </>
  )
}
