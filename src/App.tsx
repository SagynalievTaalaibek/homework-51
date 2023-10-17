import './App.css'
import Circle from "./Circle/Circle";

function App() {
    return (
        <div className="App">
            <div>
                <button>New numbers</button>
            </div>
            <Circle number={5}/>
            <Circle number={1}/>
            <Circle number={16}/>
            <Circle number={23}/>
            <Circle number={32}/>
        </div>
    )
}

export default App
