import {  Route } from "react-router-dom";
import One from "../pages/one";
import Test from "../pages/test";
export default () => (
    <>
       <Route exact path='/create/one' component={One} ></Route>
        <Route exact path='/create/test' component={Test} ></Route>
    </>

);