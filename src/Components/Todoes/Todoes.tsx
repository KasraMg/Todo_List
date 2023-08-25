import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from 'react' 
import { makeStyles } from '@mui/styles';
import { Button } from '@mui/material'
import Todo from "../Todo/Todo";

const useStyles = makeStyles({
    formControl: {
        display: 'flex',
        gap: '20px',
        marginTop: '2rem'
    },
    main:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'baseline',
        flexWrap:'wrap'
    }
});
export default function Todoes() {
    const classes = useStyles();
    const [filter, setFilter] = useState<String>('All_Todoes');



    return (
        <div style={{ marginBottom: '2rem' }}>
            <main id="todoesMain" className={classes.main}>
                 <div className={classes.formControl}>
                <p>Filtering:</p>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Status</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={filter}
                        label="Status"
                        onChange={(e) => setFilter(e.target.value)}>
                        <MenuItem value={'All_Todoes'}>All_Todoes</MenuItem>
                        <MenuItem value={'Complate_Todoes'}>Complate_Todoes</MenuItem>
                        <MenuItem value={'UnComplate_Todoes'}>UnComplate_Todoes</MenuItem>
                    </Select>
                </FormControl>
                 </div>
                 <Button id="deleteTodo" style={{ backgroundColor: '#0100ff70', marginTop: '1rem' }} variant="contained">Delete All Todoes</Button>
            </main>
          

            <Grid container  flexDirection={'row-reverse'} className='topbar' alignItems={'center'} spacing={5}>
                <Grid item md={4} sm={6} xs={12}>
                    <Todo />
                </Grid>
                <Grid item md={4} sm={6} xs={12}>
                    <Todo />
                </Grid>
                <Grid item md={4} sm={6} xs={12}>
                    <Todo />
                </Grid>

            </Grid>


        </div>
    )
}
