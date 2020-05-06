/*
    Date : 2020/05/06
    Decription : Filter Component
    Author : Fandix Huang
*/

import React from "react";
import style from "./Filter.module.scss"

class Filter extends React.Component
{
    render()
    {
        return(
            <div className={ style.wrap }>
                {/******** Location ********/}
                <div className={ style.location }>
                    <div className={ style.box }>
                        <p>Location</p>
                        <select>
                            <option>三民區</option>
                            <option>大樹區</option>
                            <option>六龜區</option>
                            <option>仁武區</option>
                            <option>小港區</option>
                        </select>
                    </div>
                </div>
                {/******** Data ********/}
                <div className={ style.data }>
                    <div className={ style.box }>
                        <p>Data</p>
                        <div className={ style.dateWrap }>
                            <div className={ style.date }>
                                <label>from</label>
                                <input type="date" />
                            </div>
                            <div className={ style.date }>
                                <label>to</label>
                                <input type="date" />
                            </div>
                        </div>
                    </div>
                </div>
                {/******** Categories ********/}
                <div className={ style.cate }>
                    <div className={ style.box }>
                        <div className={ style.check }>
                            <label>
                                <input type="checkbox" id="checkbox" />
                                <span></span>
                                異國料理
                            </label>
                        </div>
                       
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Filter