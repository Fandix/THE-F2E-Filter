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
import axios from "../../Common/axios"

class Main extends React.Component
{
    state = {
        ShowData : [],
    }

    //==========================================================
    /*
        Date : 2020/05/23
        Discrbption : 在Component被創建時獲取網路數據
    */
    componentDidMount(){
        axios.get("https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97").then((res)=>{
                this.setState({
                    ShowData : res.data.result.records
                })
        })
    }

    render()
    {
        return(
            <div className={ style.wrap }>
                <div className={ style.box }>
                    {/******* Filter ********/}
                    <div className={ style.filter }>
                        <FilterBtn />
                    </div>
                    {/******* Data List ********/}
                    <div className={ style.datalist }>
                        <ShowFilter ShowData = {this.state.ShowData} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Main