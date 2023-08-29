import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import { useEffect, useState } from 'react' 
import { makeStyles } from '@mui/styles';
import { Button } from '@mui/material'
import Todo from "../Todo/Todo";
import { useContext } from 'react'
import  {TodolistContext} from '../../Context/TodolistContext'
import swal from "sweetalert";
import { Todo as TodoType } from '../../assets/todo.Types'
const useStyles = makeStyles({
    formControl: {
        display: 'flex',
        gap: '20px',
        marginTop: '2rem'
    },
    main:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'baseline',
        flexWrap:'wrap'
    },
    emptyTodo:{
        textAlign:'center',
       display:'block',
       margin:'0 auto',
        marginTop:'4rem' 
    }
});
export default function Todoes() {
    const classes = useStyles();
    const [filter, setFilter] = useState<String>('All_Todoes');
    const [todos,seNewTodos]=useState<TodoType[]>([])
    const context = useContext(TodolistContext) 

    const deleteAllTodosHandler=()=>{
        swal({
            title:'Do you want to delete all todos?',
            icon:'success',
            buttons:['no','yes']
        }).then(result=>{
           if (result) {
            context?.todo?.map(async(data)=>{
                const res = await fetch(`http://localhost:4000/todos/${data.id}`,{
                    method:'DELETE'
                   
                  }); 
            })
            context?.setTodos([])
           }
        })
     } 
 
       useEffect(()=>{
        fetch("http://localhost:4000/todos")
        .then(res=>res.json())
        .then(data=>{
            seNewTodos(data) 
        })
       },[])
      
     useEffect(() => {
      
        if (todos) {
           switch (filter) {
        case 'All_Todoes':{
            const AllTodos=todos  
            context?.setTodos(AllTodos as TodoType[])
            break
        }
        case 'Complate_Todoes':{
            const complateTodos=todos.filter(data=>{
                return data.isComplate  
            }) 
            context?.setTodos(complateTodos as TodoType[])
            break
        } 
        case 'UnComplate_Todoes':{
            const UnComplateTodos=todos.filter(data=>{
                return !data.isComplate 
            })  
            context?.setTodos(UnComplateTodos as TodoType[])
            break
        }  
        default:throw new Error("this case not found");
            
     
        }   
        }
        
     
      
     }, [filter])
     
    return (
        <div style={{ marginBottom: '2rem' }}>
            <main id="todoesMain" className={classes.main}>
                 <div className={classes.formControl}>
                <p>Filtering:</p>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Status</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={filter}
                        label="Status"
                        onChange={(e) => setFilter(e.target.value)}>
                        <MenuItem value={'All_Todoes'}>All_Todoes</MenuItem>
                        <MenuItem value={'Complate_Todoes'}>Complate_Todoes</MenuItem>
                        <MenuItem value={'UnComplate_Todoes'}>UnComplate_Todoes</MenuItem>
                    </Select>
                </FormControl>
                 </div>
                 <Button onClick={deleteAllTodosHandler} id="deleteTodo" style={{ backgroundColor: '#0100ff70', marginTop: '1rem' }} variant="contained">Delete All Todoes</Button>
            </main>
          

            <Grid container  flexDirection={'row-reverse'} className='topbar' alignItems={'center'} spacing={5}>
              {context?.todo?.map(data=>(
                  <Grid item md={4} sm={6} xs={12}>
                    <Todo {...data} />
                </Grid>
             ) )}
              
                  {context?.todo?.length == 0 &&(
                    <div className={classes.emptyTodo}>
                        <img width={127} src="/icons8-todo-list-100.png" alt="" />
                    <p>Please make a todo :(((</p>
                    </div>
                  )}

            </Grid>


        </div>
    )
}
