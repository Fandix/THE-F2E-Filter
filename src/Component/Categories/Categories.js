/*
    Date : 2020/05/06
    Decription : Categories Component(show message when filter information)
    Author : Fandix Huang
*/

import React from "react";
import style from "./Categories.module.scss"

const Categories = (props) => {

    return(
        <div className={ style.wrap }>
            <div className={ style.box }>
                <p>{ props.value }</p>
                <div className={ style.cancel }>
                    <input type="checkbox" id="cate"/>
                    <label for="cate" className={ style.categ }></label>
                </div>
            </div>
        </div>
    )
}

export default Categories