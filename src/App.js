import Labs from "../src/labs";

import Tuiter from "./tuiter";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
        <div className="container">
            <Routes>
                <Route path="/*"
                       element={<Labs/>}/>

                <Route path="/tuiter/*"
                       element={<Tuiter/>}/>
            </Routes>

        </div>
        </BrowserRouter>
    );
}
export default App;

