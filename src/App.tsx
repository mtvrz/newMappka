import './App.css'
import Block from "./components/UI/Block.tsx";

function App() {

    return (
        <>
            <div className={"app"}>
                <Block isActive/>
                <Block/>
                <Block/>
            </div>
            <div className={"headline"}>
                <div className={"typewriter"}>
                    <h1>new Mappka </h1>
                </div>
            </div>
        </>
    )
}

export default App
