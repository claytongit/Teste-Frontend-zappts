import React from "react";
import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';

import { isAuthenticated } from './utils/auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route { ...rest } render={ props => (
        isAuthenticated() ? 
        ( <Component { ...rest } /> ) :
        ( <Redirect to={{ pathname: '/', state: { from: props.location } }} /> )
    ) } />
);

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <PrivateRoute path="/home" component={ Home } />
            <Route exact path="/" component={ SignIn } />
            <Route path="/signup" component={ SignUp } />
            <Route path="/*" component={ PageNotFound } />
        </Switch>
    </BrowserRouter>
);

export default Routes;