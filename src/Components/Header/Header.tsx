import { makeStyles } from '@mui/styles';
import { Button } from '@mui/material' 
import { Link } from 'react-router-dom'
import {useContext} from 'react'
import { TodolistContext } from '../../Context/TodolistContext';
import { BiSolidUser } from 'react-icons/bi'
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
    },
    buttonWithIcon:{
        backgroundColor: '#0100ff70 !important',
         marginTop: '1rem !important',
         fontSize:'1.5rem !important',
         position:'relative',
        bottom:'10px'
    },
    buttonWithText:{
        backgroundColor: '#0100ff70 !important',
         marginTop: '1rem !important',
         fontSize:'1.1rem !important',
         position:'relative',
        bottom:'10px'
    }
     
});
export default function Header() {
    const classes = useStyles();
    const context = useContext(TodolistContext) 



    return (
     <header className={classes.header}>
       <Link to={context?.userInfos?.name ? '' :'/Login'}>
        {context?.userInfos?.name ?(
     <Button className={classes.buttonWithText} variant="contained">{context?.userInfos?.name}</Button> 
        ):(
            <Button className={classes.buttonWithIcon} variant="contained"><BiSolidUser/></Button> 
        )}
    
       </Link>
       <Link style={{textDecoration:'none',color:'black'}} to='/'>
       <p className={classes.title}>Todo_List</p>
       </Link>  
     </header>
    )
}
