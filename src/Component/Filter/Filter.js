/*
    Date : 2020/05/06
    Decription : Filter Component
    Author : Fandix Huang
*/

import React from "react";
import style from "./Filter.module.scss"
import { LocationFilter,DateFilter,CategoriesFilter } from "../../Store/Action"
import { connect } from "react-redux";

class Filter extends React.Component
{

    /*
        Date : 2020/05/17
        Discrbption : 當Location Filter發生改變時觸發，傳遞改變的內容給store
    */
    onLocationChange = (e) => {
        const value = e.target.value;
        this.props.dispatch(LocationFilter(value))
    }

    //===========================================================
    /*
        Date : 2020/05/17
        Discrbption : 當Location Filter發生改變時觸發，傳遞改變的內容給store
    */
    onDateChange = (e) => {
        const value = e.target.value;
        this.props.dispatch(DateFilter(value))
    }

    //===========================================================
    /*
        Date : 2020/05/17
        Discrbption : 當Categories Filter發生改變時觸發，傳遞改變的內容給store
    */
    onCategoriesChange = (e) => {
        const name = e.target.name;
        const value = e.target.checked;
        
        this.props.dispatch(CategoriesFilter(name,value))
    }



    render()
    {
        return(
            <div className={ style.wrap }>
                {/******** Location ********/}
                <div className={ style.location }>
                    <div className={ style.box }>
                        <p>Location</p>
                        <select onChange={this.onLocationChange}>
                            <option>全部</option>
                            <option>三民區</option>
                            <option>大樹區</option>
                            <option>六龜區</option>
                            <option>仁武區</option>
                            <option>小港區</option>
                            <option>內門區</option>
                        </select>
                    </div>
                </div>
                {/******** Data ********/}
                <div className={ style.data }>
                    <div className={ style.box }>
                        <p>Date</p>
                        <div className={ style.dateWrap }>
                            <div className={ style.date }>
                                <label>from</label>
                                <input type="date" onChange={this.onDateChange}/>
                            </div>
                            <div className={ style.date }>
                                <label>to</label>
                                <input type="date" onChange={this.onDateChange}/>
                            </div>
                        </div>
                    </div>
                </div>
                {/******** Categories ********/}
                <div className={ style.cate }>
                    <div className={ style.box }>
                        <p>Categories</p>
                        <div className={ style.check }>
                            {/*=======================*/}
                            <label>
                                <input type="checkbox" id="checkbox" name="All" onClick = {this.onCategoriesChange}/>
                                <span className={ style.checkbox }></span>
                                All
                            </label>
                            {/*=======================*/}
                            <label>
                                <input type="checkbox" id="checkbox" name="free" onClick = {this.onCategoriesChange}/>
                                <span className={ style.checkbox }></span>
                                免費參觀
                            </label>
                            {/*=======================*/}
                            <label>
                                <input type="checkbox" id="checkbox" name="allDayOpen" onClick = {this.onCategoriesChange}/>
                                <span className={ style.checkbox }></span>
                                全天候開放
                            </label>
                            {/*=======================*/}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect((state)=>{console.log(state)})(Filter)