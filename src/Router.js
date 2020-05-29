import React from "react";
import {BrowserRouter,Switch,Route,withRouter} from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import style from "./Router.module.scss"

import App from "./App";
import Detail from "./Component/Detail/Detail"

const Routes = withRouter(({location}) => {
    return(
        <TransitionGroup component={null}>
            <CSSTransition
                timeout={500}
                classNames={style}
                key={location.pathname}
            >
                <Switch>
                    <Route path = "/" exact component = {App} />  
                    <Route path = "/detail/:id" exact component = {Detail} />  
                </Switch>
             </CSSTransition>
         </TransitionGroup>
    )
});

const Router = () => {
    return(
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    )
};

export default Router;