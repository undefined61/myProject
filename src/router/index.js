import { HashRouter, Route, Switch } from "react-router-dom";
import Create from "../pages/create";
import Login from "../pages/login";

export default () => (<HashRouter>
    <Switch>
        <Route exact path='/' component={Login} />
        <Route  path='/create/' component={Create} />
    </Switch>
</HashRouter>
);