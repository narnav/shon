import { useEffect, useState } from "react";
import MySamp from "./MySamp";

const App = () => {
    const [clr, setclr] = useState("red")
    const [count, setcount] = useState(0)
    
    useEffect(() => {
        console.log(clr);
    }, [clr])
    
    useEffect(() => {
        if (count >10)
        console.log("winnnnn");
    }, [count])

    return (
        <div className="App" style={{ backgroundColor: clr }}>
            {clr}
            <button onClick={(e)=>setcount(count+1)}>{count}</button>
            <MySamp setclr={setclr} waga="4444"></MySamp>
        </div>
    );
}

export default App;
