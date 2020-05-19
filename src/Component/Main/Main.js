/*
    Date : 2020/05/06
    Decription : Main Component
    Include : Filter,DataContnt,
    Author : Fandix Huang
*/

import React from "react";
import style from "./Main.module.scss";
import FilterBtn from "../../Containet Component/FilterBtn"
import ShowFilter from "../../Containet Component/ShowFilter"

class Main extends React.Component
{
    render()
    {
        return(
            <div className={ style.wrap }>
                <div className={ style.box }>
                    {/******* Filter ********/}
                    <div className={ style.filter }>
                        <FilterBtn />
                        {/* <Filter /> */}
                    </div>
                    {/******* Data List ********/}
                    <div className={ style.datalist }>
                        <ShowFilter />
                    </div>
                </div>
            </div>
        )
    }
}

export default Main