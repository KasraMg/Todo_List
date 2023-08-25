
import { Container } from '@mui/material';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Button } from '@mui/material'
import './TodoList.css' 
import Todoes from '../Todoes/Todoes';
const useStyles = makeStyles({
  input: {
    borderRadius: '10px',
    outline: '0',
    border: 'none',
    backgroundColor: '#0100ff70',
    padding: '.8rem 1rem',
    width: '-webkit-fill-available',
    color:'white'
  },
});



export default function TodoList() {
  const classes = useStyles();
  return (
    <> 

    <Container>

      <Grid container flexDirection={'row-reverse'} className='topbar'  alignItems={'center'} spacing={5}> 
       <Grid item  sm={6} xs={12}>
          <img  width={'100%'} src="/undraw_developer_activity_re_39tg.svg" alt="" />
        </Grid>
        <Grid item sm={6} xs={12}>
          <input placeholder='Type Somethings...' className={classes.input} type="text" />
          <Button style={{ backgroundColor: '#0100ff70', marginTop: '1rem' }} variant="contained">Submit</Button>
        </Grid>
      
      </Grid>


      <hr className="sep-3" />

      <Todoes/>

    </Container>
    </>
  )
}
