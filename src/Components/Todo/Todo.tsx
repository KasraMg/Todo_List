 
import { makeStyles } from '@mui/styles'; 
import { AiFillDelete } from 'react-icons/ai'
import { RxUpdate } from 'react-icons/rx'
 
 const useStyles = makeStyles({
        todo: {
        backgroundColor:'#0100ff70',
        width:'90%',
        padding:'1rem 1rem 4rem 1rem',
        position:'relative',
        marginTop:'2rem',
        borderRadius:'2px',
        boxShadow:' 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)'
        
        },
        todoFooter:{
            display:'flex',
            justifyContent:'space-between',
            alignItems:'center',
            position:'absolute',
            bottom:'0px',
            width:'90%'
        },
        text:{
            wordBreak:'break-word'
        },
        icon:{
            cursor: 'pointer'
        }
      });

      
export default function Todo() {

      
    const classes = useStyles();
  
    return (
        <section id='todo' className={classes.todo}>
           <p className={classes.text}>kitrrrrrkitrrrrrrrrrrrrrrrrrrrrrrrrrkitrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr</p>

           <div className={classes.todoFooter}>
           <p>13m ago</p>

            <div>
                 <AiFillDelete className={classes.icon} style={{marginRight:'.3rem'}}/>
                 <RxUpdate className={classes.icon}/>
            </div>
                
           </div>

        </section>
    )
}
