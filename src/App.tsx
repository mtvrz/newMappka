import { Avatar } from '@mui/material';
import './App.css'
import Block from "./components/UI/Block.tsx";
import Step_paste_rq from './components/Views/step_paste_rq.tsx';
import lisa from "./assets/avatar_hu_b49c6fea3aaa1ec5.png"
import Step_update_handler from './components/Views/step_update_handler.tsx';
import Step_get_response from './components/Views/step_get_response.tsx';

function App() {

    return (
        <>
            <div className={"app"}>
                <Block ><Step_paste_rq/></Block>
                <div>{">"}</div>
                <Block isActive><Step_update_handler/></Block>
                <div>{">"}</div>
                <Block><Step_get_response isStepActive={false}/></Block>
            </div>
            <div className={"headline"}>
                <div className={"typewriter"}>
                    <h1>new Mappka </h1>
                </div>
            </div>
            <div className={"avatar"}><Avatar sx={{width:"80px",height:"80px"}} alt="Remy Sharp" src={lisa} /></div>
        </>
    )
}

export default App
