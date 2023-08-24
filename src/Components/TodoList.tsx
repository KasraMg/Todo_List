 
import { Container } from '@mui/material';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Button } from '@mui/material'
const useStyles = makeStyles({
    input: {
      borderRadius: '10px',
      outline:'0',
      border:'none',
      backgroundColor:'#0100ff70',
      padding:'.5rem 1rem',
      width:'-webkit-fill-available'
    },
  });
  

  
export default function TodoList() {
    const classes = useStyles();
  return (
    <Container>

<Grid container alignItems={'center'} spacing={5}>
  <Grid item xs={6}>
   <input className={classes.input} type="text" />
   <Button style={{backgroundColor:'#0100ff70',marginTop:'1rem'}} variant="contained">Submit</Button>
  </Grid>
  <Grid item xs={6}>
    <img width={500} src="/undraw_developer_activity_re_39tg.svg" alt="" />
  </Grid>
</Grid>
      
    </Container>
  )
}
