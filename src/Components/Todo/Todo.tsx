
import { makeStyles } from '@mui/styles';
import { AiFillDelete, AiOutlineCheck } from 'react-icons/ai' 
import { NewTodo, Todo as todoType } from '../../assets/todo.Types';
import swal from 'sweetalert';
import { useContext } from 'react'
import { TodolistContext } from '../../Context/TodolistContext';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles({
    todo: {
        width: '90%',
        padding: '1rem 1rem 4rem 1rem',
        position: 'relative',
        marginTop: '2rem',
        direction: 'ltr',
        borderRadius: '2px',
        boxShadow: ' 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)'

    },
    todoFooter: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        bottom: '7px',
        width: '90%'
    },
    text: {
        wordBreak: 'break-word',
        height: '30px'
    },
    icon: {
        cursor: 'pointer'
    },
    todoComplate: {
        opacity: .5,
    },
    complateIcon: {
        fontSize: '3rem',
        position: 'absolute',
        margin: '0px auto',
        right: '-16px',
        zIndex: '999',
        top: '-13px',
        color: 'blue'
    },
    checkInput: {
        width: '30px',
        height: '30px',
        background: 'white',
        borderRadius: '3px',
        position: 'absolute',
        top: '0px',
        right: '0px'
    },
    time:{
        display:'flex',
        justifyContent:'left',
        gap:'10px',
        alignItems:'center'
    }
});


const Todo:JSX.ElementType=(props: todoType)=> {
 
    const navigate = useNavigate()
    const context = useContext(TodolistContext)
    const classes = useStyles();
 
    const localStorageData = JSON.parse(localStorage.getItem("user") as string)

    const updateTodos = async () => {
        if (localStorageData) {
            const res = await fetch(`http://localhost:4000/users/${localStorageData.token}/todos`);
            const data = (await res.json()) as todoType[];
            context?.setTodos(data);
        }

    }

    const deleteTodoHandler = async () => {
        swal({
            title: 'Do you want to delete this todo?',
            icon: 'success',
            buttons: ['no', 'yes']
        })
        .then(async (result:boolean) => {
            if (result) {
                const res = await fetch(`http://localhost:4000/todos/${props.id}`, {
                    method: 'DELETE' 
                }); 
                if (res.status == 200) {
                    updateTodos()
                    swal({
                        title: 'Todo was Delete',
                        icon: 'success'
                    })
                }

            }
        })

    }

    const complateTodoHandler = async () => {

        swal({
            title: props.isComplate ? 'Do you want to unComplate this todo?' : 'Do you want to complate this todo?',
            icon: 'success',
            buttons: ['no', 'yes']
        })
        .then(async (result:boolean) => {
            if (result) {

                const newTodo:NewTodo = {
                    id: props.id,
                    content: props.content,
                    date: props.date,
                    bg: props.bg,
                    isComplate: !props.isComplate,
                    userId: localStorageData ? localStorageData.token : null,
                    time:props.time
                }

                const res = await fetch(`http://localhost:4000/todos/${props.id}`, {
                    method: 'PUT',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(newTodo)
                })
                context?.setFilter('All_Todoes')
                updateTodos()  
            }
        })
    }

    const signSwal = () => {

        swal({ 
            title: 'please login/register in site',
            icon: 'warning',
            buttons: ['lets go to login', 'stay']
        })
        .then((res:boolean) => {
            if (!res) {
                navigate('/Login')
            }

        })
    }


    let date = new Date();
        
    let year = date.getFullYear();
    let month = date.getMonth() + 1;  
    let day = date.getDate(); 

    const newDate:any=year + '/' + month + '/' + day 
    return (
        <section style={{ backgroundColor: props.bg }} id='todo' className={props.isComplate ? `${classes.todo} ${classes.todoComplate}` : `${classes.todo}`}>
            <p className={classes.text}>{props.content}</p>

            <div className={classes.todoFooter}>
                <div className={classes.time}>
                  <p>{newDate == props.date ?(
                    <>
                      today
                    </> 
                  ):(
                    <>
                   { props.date}
                  </> 
                  )} 
                   </p>
                   |
                  <p> {props.time}</p>
                </div>
             

                <div>
                    {localStorageData ? (
                        <>
                            <AiFillDelete onClick={deleteTodoHandler} className={classes.icon} style={{ marginRight: '.3rem' }} />
                            <AiOutlineCheck onClick={complateTodoHandler} className={classes.icon} />
                        </>
                    ) : (
                        <>
                            <AiFillDelete onClick={signSwal} className={classes.icon} style={{ marginRight: '.3rem' }} />
                            <AiOutlineCheck onClick={signSwal} className={classes.icon} />
                        </>
                    )}


                </div>

            </div>

            {props.isComplate && (
                <>
                    <AiOutlineCheck className={classes.complateIcon} />
                    <div className={classes.checkInput}></div>
                </>
            )}
        </section>
    )
}
export default Todo