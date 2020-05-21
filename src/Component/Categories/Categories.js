/*
    Date : 2020/05/06
    Update : 2020/05/21
    Decription : Categories Component(show message when filter information)
    Author : Fandix Huang
*/

import React from "react";
import style from "./Categories.module.scss"

class Categories extends React.Component
{
    render()
    {
        const Value = this.props.value;
        return(
            <div className={ style.wrap }>
                <div className={ style.box }>
                    <p>{ Value }</p>
                    <div className={ style.cancel }>
                        <input type="checkbox" id={this.props.id} onClick={this.props.onClick}/>
                        <label htmlFor={this.props.id} className={ style.categ }></label>
                    </div>
                </div>
            </div>
        )
    }
}

export default Categories