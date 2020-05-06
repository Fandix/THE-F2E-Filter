/*
    Date : 2020/05/06
    Decription : DataList Component
    Include : Filter,DataContnt,
    Author : Fandix Huang
*/

import React from "react";
import style from "./DataList.module.scss";
import Filter from "../Filter/Filter";

class DataList extends React.Component
{
    render()
    {
        return(
            <div className={ style.wrap }>
                <div className={ style.box }>
                    {/******* Filter ********/}
                    <Filter />
                    {/******* Data List ********/}
                </div>
            </div>
        )
    }
}

export default DataList