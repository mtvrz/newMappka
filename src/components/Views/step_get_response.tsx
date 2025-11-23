import { Button, TextField } from "@mui/material"
import classes from "./styles.module.css"
import {type StepInfo } from "../types"


const Step_get_response = ({isStepActive}:StepInfo) =>{
    return <div className={classes.flexColumn}>
        <h2>Response</h2>
      <TextField disabled={!isStepActive} fullWidth id="outlined-basic" label="Response" variant="outlined" />
      <Button disabled={!isStepActive} sx={{width:"70%"}} color="error" variant="contained">Copy result</Button>
    </div>
}

export default Step_get_response