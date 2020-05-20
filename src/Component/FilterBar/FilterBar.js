/*
    Date : 2020/05/07
    Decription : FilterBar Component (ResultCount,Categories )
    Author : Fandix Huang
*/

import React from "react";
import style from "./FilterBar.module.scss"
import Categories from "../Categories/Categories"

class FilterBar extends React.Component
{
    FilterItem = () => {
        // const Items = this.props.ShowFilter;
        const Items = ["a","b"]
        const ShowFilter = [];
        let key = 0;

        if(Items !== undefined){
            Items.forEach(item => {
                ShowFilter.push(
                    <Categories 
                        value = {item} 
                        key={key++} 
                        onClick = {() => this.props.onCancelClick(item)}
                    />
                )
            });
    
            return ShowFilter;
        }
    }


    render()
    {
        console.log(this.props.onCancelClick)
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