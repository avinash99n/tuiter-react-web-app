import Nav from "../nav";

import Assignment7 from "./a7";
import {Routes, Route} from "react-router";

function Labs() {
    return (
        <div>
            <Nav/>
            <Routes>

                <Route path="a7"
                       element={<Assignment7/>}/>
            </Routes>
        </div>
    );
}

export default Labs;