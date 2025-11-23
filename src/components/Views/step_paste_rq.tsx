import { Button, TextField } from "@mui/material"
import classes from "./styles.module.css"

const Step_paste_rq = () =>{
    return <div className={classes.flexColumn}>
        <h2>Request</h2>
      <TextField fullWidth id="outlined-basic" label="Request" variant="outlined" />
      <Button sx={{width:"70%"}} color="error" variant="contained">Load</Button>
    </div>
}

export default Step_paste_rq