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
        return(
            <div className={ style.wrap }>
                <div className={ style.box }>
                    <div className={ style.resultCount }>
                        Showing <div className={ style.searchCount }>15</div> results by...
                    </div>
                    <div className={ style.categories }>
                        <Categories 
                            value="全天候開放"
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default FilterBar;