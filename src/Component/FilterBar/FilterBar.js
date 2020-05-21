/*
    Date : 2020/05/07
    Update : 2020/05/21
    Decription : FilterBar Component (ResultCount,Categories )
    Author : Fandix Huang
*/

import React from "react";
import style from "./FilterBar.module.scss"
import Categories from "../Categories/Categories"

class FilterBar extends React.Component
{
    
    //==========================================================
    /*
        Date : 2020/05/21
        Discrbption : 將被選種的Filter作為參數傳遞給子層渲染(Categories)
    */
    FilterItem = () => {
        const Items = this.props.ShowFilter;
        const ShowFilter = [];
        let key = 0;

        if(Items !== undefined){
            Items.forEach(item => {
                ShowFilter.push(
                    <Categories 
                        value = {item} 
                        key={key++} 
                        onClick = {() => this.props.onCancelClick(item)}
                        id = {key}
                    />
                )
            });
    
            return ShowFilter;
        }
    }


    render()
    {
        return(
            <div className={ style.wrap }>
                <div className={ style.box }>
                    <div className={ style.resultCount }>
                        Showing <div className={ style.searchCount }>15</div> results by...
                    </div>
                    <div className={ style.categories }>
                        {this.FilterItem()}
                    </div>
                </div>
            </div>
        )
    }
}

export default FilterBar;