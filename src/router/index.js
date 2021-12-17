import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from "../pages/create";
export default ()=>(<BrowserRouter>
    <Routes>
        <Route
            exact
            path='/create'
            element={<Create/> }
        />
    </Routes>
</BrowserRouter>
);