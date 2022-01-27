import { HashRouter, Route, Switch,  Redirect} from "react-router-dom";
import Create from "../pages/create";
import Login from "../pages/login";
import pageNotFound from "../pages/pageNotFound"
export default () => (<HashRouter>
    <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/404' component={pageNotFound} />
        <Route  path='/create/' component={Create} />
        <Redirect to="/404"></Redirect>
    </Switch>
</HashRouter>
);