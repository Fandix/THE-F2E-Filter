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
    render()
    {
        let count = 0
        const FilterUI = this.props.ShowFilter;

        return(
            <div className={ style.wrap }>
                <div className={ style.box }>
                    <div className={ style.resultCount }>
                        Showing <div className={ style.searchCount }>15</div> results by...
                    </div>
                    <div className={ style.categories }>
                        {
                            FilterUI.map(Filter => {
                                return(
                                    <Categories 
                                        value = {Filter} 
                                        key={count++} 
                                        onClick = {()=> this.props.onClick(Filter)}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default FilterBar;