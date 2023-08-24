import { makeStyles } from '@mui/styles';
import { Button } from '@mui/material' 

const useStyles = makeStyles({
    header: {
        display: 'flex',
        justifyContent:'space-between', 
        alignItems:'flex-start'
    },
    title:{
        fontSize:'2rem',
        position:'relative',
        bottom:'30px'
    }
     
});
export default function Header() {
    const classes = useStyles();
     



    return (
     <header className={classes.header}>
        <Button style={{ backgroundColor: '#0100ff70', marginTop: '1rem' }} variant="contained">Login / Register</Button> 
        <p className={classes.title}>Todo_List</p>
     </header>
    )
}
