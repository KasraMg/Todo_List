
import { Container } from '@mui/material';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Button } from '@mui/material'
import './TodoList.css' 
import Todoes from '../Todoes/Todoes'; 
import colors from '../../assets/data'
import { useState,useContext } from 'react'
import { TodolistContext } from '../../Context/todolistContext';

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

type colorType={
  id:number,
  name:string
}


export default function TodoList() {
  const classes = useStyles();
  const context=useContext(TodolistContext)
  const [allColors,setAllcolors]=useState<colorType[]>(colors)

const selectColor=(obj:colorType)=>{
  context?.setcolor(obj)
}

  return (
    <> 

    <Container>

      <Grid container flexDirection={'row-reverse'} className='topbar'  alignItems={'center'} spacing={5}> 
       <Grid item  sm={6} xs={12}>
          <img  width={'100%'} src="/undraw_developer_activity_re_39tg.svg" alt="" />
        </Grid>
        <Grid item sm={6} xs={12}>
          <input style={{backgroundColor:context?.color?.name}} placeholder='Type Somethings...' className={classes.input} type="text" />
          <Button style={{ backgroundColor: '#0100ff70', marginTop: '1rem' }} variant="contained">Submit</Button>
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
