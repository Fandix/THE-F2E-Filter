/*
    Date : 2020/05/07
    Update : 2020/05/21
    Decription : FilterBar Component (ResultCount,Categories,Data )
    Author : Fandix Huang
*/

import React from "react";
import style from "./DataWrap.module.scss";
import Categories from "../Categories/Categories";
import VisiblePage from "../../Containet Component/VisiblePage";
import VisibleData from "../../Containet Component/VisibleData";

class DataWrap extends React.Component {

    //==========================================================
    /*
        Date : 2020/05/21
        Discrbption : 將被選種的Filter作為參數傳遞給子層渲染(Categories)
    */
    FilterItem = () => {
        const Items = this.props.ShowFilter;
        const ShowFilter = [];
        let key = 0;

        if (Items !== undefined) {
            Items.forEach(item => {
                ShowFilter.push(
                    <Categories
                        value={item}
                        key={key++}
                        onClick={() => this.props.onCancelClick(item)}
                        id={key}
                    />
                )
            });

            return ShowFilter;
        }
    }


    render() {
        let OutputData = this.props.ShowData.OutputData;
        let ShowDataCount = this.props.ShowData.showDataCount;

        return (
            <div className={style.wrap}>
                <div className={style.box}>
                    {/***************** Visible Count *****************/}
                    <div className={style.resultCount}>
                        Showing <div className={style.searchCount}>{ShowDataCount}</div> results by...
                    </div>
                    {/**************** Categories Items ****************/}
                    <div className={style.categories}>
                        {this.FilterItem()}
                    </div>
                    {/****************** Visible Data ******************/}
                    <div className={style.data}>
                        <VisibleData outputData={OutputData} />
                    </div>
                    {/********************** Page **********************/}
                    <div className={style.Page}>
                        <VisiblePage totalPage={this.props.ShowData.ElememtCount} />
                    </div>
                </div>
            </div>
        )
    }
}

export default DataWrap;