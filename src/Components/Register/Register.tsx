import { Container} from '@mui/material'
import { makeStyles } from '@mui/styles'; 
import './Register.css'
import { BiSolidUser } from 'react-icons/bi' 
import { AiFillLock } from 'react-icons/ai' 
import { Link,useNavigate } from 'react-router-dom'
import registerSchema from '../../Validations/rules';
import { useFormik } from 'formik';
import swal from 'sweetalert';
import {useContext} from 'react'
import { TodolistContext } from '../../Context/TodolistContext';


const useStyles = makeStyles({
  Register_icon:{
    position:'relative',
    top:'3px'
  },
   screen :{		
    background:' linear-gradient(90deg, #5D54A4, #7C78B8)',	
    position: 'relative',
    height:' 640px',
    width:' 360px',
    boxShadow: '0px 0px 24px #5C5696',
    margin:'0px auto'
  },
  screen__content :{
    zIndex: '1',
    position: 'relative',	
    height:' 100%',
  },
   screen__background__shape: {
    transform: 'rotate(45deg)',
    position: 'absolute',
  },
  screen__background__shape1: {
    height: '520px',
    width: '520px',
    background: '#FFF',	
    top: -'50px',
    right: '120px',	
   borderRadius: '0 72px 0 0',
  },
  
  screen__background__shape2: {
    height: '220px',
    width: '220px',
    background: '#6C63AC',	
    top:' -172px',
    right: '0',	
   borderRadius: '32px',
  }
  ,
  screen__background__shape3: {
    height: '540px',
    width: '190px',
    background: 'linear-gradient(270deg, #5D54A4, #6A679E)',
    top:' -24px',
    right: '0',	
   borderRadius: '32px',
  }
  ,
  screen__background__shape4: {
    height: '400px',
    width: '200px',
    background: '#7E7BB9',	
    top: '420px',
    right: '50px',	
    borderRadius: '60px',
  },
   Register :{
    width: '320px',
    padding: '30px',
    paddingTop: '116px',
  },
  
   Register__field: {
    padding: '20px 0px',	
    position: 'relative',	
  }, 
   Register__input :{
    border: 'none',
    outline:'0',
    borderBottom: '2px solid #D1D1D4',
    background: 'none',
    padding: '10px',
    paddingLeft: '5px',
    fontWeight: '700',
    width:' 75%',
    transition: '.2s',
  },
  Register__submit :{
    background:' #fff',
    fontSize: '14px',
    marginTop: '30px',
    padding: '16px 20px',
    borderRadius: '26px',
    border: '1px solid #D4D3E8',
    textTransform: 'uppercase',
    fontWeight: '700',
    display: 'flex',
    alignItems: 'center',
    width:' 100%',
    color:' #4C489D',
    boxShadow: '0px 2px 2px #5C5696',
    cursor: 'pointer',
    transition: '.2s',
    marginBottom:'3rem'
  },
  Login: {
    color:'black',
    textDecoration:'none',
    fontFamily:'cursive'
  },
  
   
});


export default function Register() {
  const classes = useStyles();
  const context=useContext(TodolistContext)
  const navigate = useNavigate()
  const registerform = useFormik({
    initialValues: { password: "", email: "", name: "", reapetPassword:"" },
    validationSchema: registerSchema,
    onSubmit: (data) => {
      console.log(JSON.stringify(data, null, 2));
    },
  });

  const formClickHandle =async (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
   
    if (registerform.values.email.length == 0) {
      swal({
          title: 'Please Type Your Email',
          icon: 'error',
          
      })
    }
    else if (registerform.values.name.length == 0) {
      swal({
          title: 'Please Type Your Name',
          icon: 'error',
          
      })
   
    } 
    else if (registerform.values.password.length == 0) {
      swal({
          title: 'Please Type Your Password',
          icon: 'error',
          
      })
   
    } 
    else if(registerform.values.reapetPassword.length == 0){
      swal({
        title: 'Please Type Your Password',
        icon: 'error',
        
    })
    } 
    else if (registerform.errors.email) {
        swal({
            title: registerform.errors.email && registerform.errors.email,
            icon: 'error',
            
        })
    } 
    else if (registerform.errors.name) {
      swal({
          title: registerform.errors.name && registerform.errors.name,
          icon: 'error',
          
      })
  } 
    else if (registerform.errors.password) {
      swal({
          title: registerform.errors.email && registerform.errors.email,
          icon: 'error',
          
      })
    } 
    else if (registerform.errors.reapetPassword) {
        swal({
            title: registerform.errors.reapetPassword && registerform.errors.reapetPassword,
            icon: 'error',
            
        })
    }
     else if(registerform.values.reapetPassword !== registerform.values.password){
      swal({
        title: 'Passwords is not same !',
        icon: 'error',
        
    })
    } 
     else {

      const newUser={
        id:crypto.randomUUID(),
        email:registerform.values.email,
        pass:registerform.values.password,
        name:registerform.values.name
      }

      const res = await fetch("http://localhost:4000/users",{
        method:'POST',
        headers:{
          "Content-Type": "application/json"
        },
        body:JSON.stringify(newUser)
      }); 
      console.log(res);
      
      if (res.status == 201) {  
        context?.setUserInfos({
          email:registerform.values.email,  
          pass:registerform.values.password ,
          name:registerform.values.name,
          id:newUser.id
        })
        const token =newUser.id
        context?.setTodos(null)
        localStorage.setItem("user", JSON.stringify({ token }));
        swal({
          title: 'Register SuccessFull !',
          icon: 'success',
          
      }).then(res=>{
        navigate('/')
      }) 
      }

      
    } 



}

  return (
    <Container> 
      <div id='screen' className={classes.screen}>
        <div className={classes.screen__content}>
          <form className={classes.Register}>
          <div className={classes.Register__field}>
              <BiSolidUser className={classes.Register_icon}/>
              <input  name="name"
                value={registerform.values.name}
                onChange={registerform.handleChange}
                onBlur={registerform.handleBlur} type="text" className={classes.Register__input} placeholder=" Name" />
            </div>
            <div className={classes.Register__field}>
              <BiSolidUser className={classes.Register_icon}/>
              <input  name="email"
                value={registerform.values.email}
                onChange={registerform.handleChange}
                onBlur={registerform.handleBlur} type="email" className={classes.Register__input} placeholder=" Email" />
            </div>
            <div className={classes.Register__field}>
             <AiFillLock className={classes.Register_icon}/>
              <input name="password"
                value={registerform.values.password}
                onChange={registerform.handleChange}
                onBlur={registerform.handleBlur} type="password" className={classes.Register__input} placeholder="Password" />
            </div>
            <div className={classes.Register__field}>
             <AiFillLock className={classes.Register_icon}/>
              <input name="reapetPassword"
                value={registerform.values.reapetPassword}
                onChange={registerform.handleChange}
                onBlur={registerform.handleBlur} type="password" className={classes.Register__input} placeholder="Repeat Password" />
            </div>
            <button onClick={formClickHandle} className={classes.Register__submit}>
              <span className="button__text">Register Now</span>
              <i className="button__icon fas fa-chevron-right"></i>
            </button>
          </form>
          <div>
            <Link className={classes.Login} to={'/Login'}>Login</Link>
             
          </div>
        </div>
        <div className="screen__background">
          <span className={classes.screen__background__shape +' ' + classes.screen__background__shape4} ></span>
          <span className={classes.screen__background__shape +' ' + classes.screen__background__shape3}></span>
          <span className={classes.screen__background__shape +' ' + classes.screen__background__shape2}></span>
          <span className={classes.screen__background__shape +' ' + classes.screen__background__shape1}></span>
        </div>
      </div>
    </Container>
  )
}
