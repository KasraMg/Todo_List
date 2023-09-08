import { makeStyles } from '@mui/styles';
const useStyles = makeStyles({
  loader: {
    width: '48px',
    height: '48px',
    border:' 3px solid #FFF',
    borderRadius: '50%', 
    position: 'relative',  
     marginLeft: 'auto',
     display: 'block', 
     marginRight: 'auto',
     marginTop:'20rem',
  },  
  LoaderBg:{
    position:'fixed',
    top: '0',
    left: '0',
    backgroundColor: '#000000b5 !important',
    width:' 100%',
    zIndex: '3',
    height: '100%',
  }
});

export default function Loader() {
  
  const classes = useStyles();
  return (
    <div>
      <div className={classes.LoaderBg}>
        <span id='loader' className={classes.loader}></span>

      </div>

    </div>
  )
}
