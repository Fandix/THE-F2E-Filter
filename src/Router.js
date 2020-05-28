import React from "react";
import {BrowserRouter,Switch,Route} from "react-router-dom";

import App from "./App";
import Detail from "./Component/Detail/Detail"

const Router = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path = "/" exact component = {App} />  
                <Route path = "/detail/:id" exact component = {Detail} />  
            </Switch>
        </BrowserRouter>
    )
};

export default Router;