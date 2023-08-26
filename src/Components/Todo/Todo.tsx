 
import { makeStyles } from '@mui/styles'; 
import { AiFillDelete, AiOutlineCheck } from 'react-icons/ai'
import { RxUpdate } from 'react-icons/rx'
import { sub } from 'date-fns';
 import TimeAgo from '../TimeAgo'
 import { Todo as todoType } from '../../assets/todo.types';
 const useStyles = makeStyles({
        todo: { 
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
            bottom:'7px',
            width:'90%'
        },
        text:{
            wordBreak:'break-word'
        },
        icon:{
            cursor: 'pointer'
        },
        todoComplate:{
            opacity:.5,
        },
        complateIcon:{
            fontSize:'3rem',
            position:'absolute', 
            margin:'0px auto',
            right: '-16px',
            zIndex:'999',
            top: '-13px',
            color:'blue'
        },
        checkInput:{
            width:'30px',
            height:'30px',
            background:'white',
            borderRadius:'3px',
            position:'absolute', 
            top:'0px',
            right:'0px'
        }
      });
   
      
      
export default function Todo(props:todoType) {

      
    const classes = useStyles(); 
    return (
        <section style={{backgroundColor:props.bg}} id='todo' className={props.isComplate ? `${classes.todo} ${classes.todoComplate}` : `${classes.todo}`}>
           <p className={classes.text}>{props.content}</p>

           <div className={classes.todoFooter}>
           <TimeAgo timestamp={sub(new Date(), { minutes: props.date }).toISOString()} />
           
            <div>
            {props.isComplate ?(
                <>
                 <AiFillDelete  style={{marginRight:'.3rem'}}/>
                 <RxUpdate  style={{marginRight:'.3rem'}}/>
                 <AiOutlineCheck />
                </>
            ):(
                <>
                <AiFillDelete className={classes.icon} style={{marginRight:'.3rem'}}/>
                <RxUpdate className={classes.icon} style={{marginRight:'.3rem'}}/>
                <AiOutlineCheck className={classes.icon}/>
                </>
            )}
             
            </div>
                
           </div>

            {props.isComplate &&(
                <>
                 <AiOutlineCheck className={classes.complateIcon}/>
                 <div className={classes.checkInput}></div>
                </> 
            )}
        </section>
    )
}
