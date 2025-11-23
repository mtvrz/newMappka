import { Button, ButtonGroup, FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import classes from "./styles.module.css"
import { type Actions } from "../types"
import { useState } from "react"

const Step_update_handler = () =>{

let action_values: Actions
const [selectBoxValue, setSelectBoxValue] = useState("OK")
action_values = [{
    id: 0,
    value: "OK",
    description: "Klient je pojistitelný"
},
{
    id: 1,
    value: "OKv",
    description: "Klient je pojistitelný s výlukou"
},
{
    id: 2,
    value: "NOK2",
    description: "Klient je nepojistitelný - smlouvu nelze dokončit"
},
{
    id: 3,
    value: "NOK8",
    description: "Klient je nepojistitelný - smlouvu lze dokončit"
}]





    return <div className={classes.flexColumn}>
        <h2>Action</h2>
      <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Action</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={selectBoxValue}
    label="Action"
    onChange={(x)=>{setSelectBoxValue(x.target.value)}}
  >
    {action_values.map(x=>{
        return <MenuItem value={x.value}>{x.description}</MenuItem>
    })}
  </Select>
</FormControl>  
<ButtonGroup fullWidth variant="contained" aria-label="Basic button group">
    <Button disabled={(selectBoxValue !== "OKv")} color="primary" variant="contained">Exceptions</Button>
    <Button color="error" variant="contained">Generate</Button>
</ButtonGroup>
    </div>
}

export default Step_update_handler