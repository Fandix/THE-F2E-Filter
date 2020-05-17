/*
    Date : 2020/05/06
    Decription : Main Component
    Include : Filter,DataContnt,
    Author : Fandix Huang
*/

import React from "react";
import style from "./Main.module.scss";
import Filter from "../Filter/Filter";
import FilterBar from "../FilterBar/FilterBar"
import { createStore } from "redux";
import { Provider } from 'react-redux';

class Main extends React.Component
{
    render()
    {
        return(
            <div className={ style.wrap }>
                <div className={ style.box }>
                    {/******* Filter ********/}
                    <div className={ style.filter }>
                        <Filter />
                    </div>
                    {/******* Data List ********/}
                    <div className={ style.datalist }>
                        <FilterBar />
                    </div>
                </div>
            </div>
        )
    }
}

export default Main