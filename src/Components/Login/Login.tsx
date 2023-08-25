import { Container} from '@mui/material'
import { makeStyles } from '@mui/styles'; 
import './Login.css'
import { BiSolidUser } from 'react-icons/bi' 
import { AiFillLock } from 'react-icons/ai' 
import { Link } from 'react-router-dom'
const useStyles = makeStyles({
  login_icon:{
    position:'relative',
    top:'3px'
  },
   screen :{		
    background:' linear-gradient(90deg, #5D54A4, #7C78B8)',	
    position: 'relative',
    height:' 600px',
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
   login :{
    width: '320px',
    padding: '30px',
    paddingTop: '156px',
  },
  
   login__field: {
    padding: '20px 0px',	
    position: 'relative',	
  }, 
   login__input :{
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
  login__submit :{
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
  register: {
    color:'black',
    textDecoration:'none',
    fontFamily:'cursive'
  }
   
});


export default function Login() {
  const classes = useStyles();
  return (
    <Container>
      <div id='screen' className={classes.screen}>
        <div className={classes.screen__content}>
          <form className={classes.login}>
            <div className={classes.login__field}>
              <BiSolidUser className={classes.login_icon}/>
              <input type="text" className={classes.login__input} placeholder="User name / Email" />
            </div>
            <div className={classes.login__field}>
             <AiFillLock className={classes.login_icon}/>
              <input type="password" className={classes.login__input} placeholder="Password" />
            </div>
            <button className={classes.login__submit}>
              <span className="button__text">Log In Now</span>
              <i className="button__icon fas fa-chevron-right"></i>
            </button>
          </form>
          <div>
            <Link className={classes.register} to={'/Register'}>Register</Link>
             
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
