/*
    Date : 2020/05/24
    Decription : 顯示景點Detail的Component 
    Author : Fandix Huang
*/

import React from "react";
import style from "./ShowDetail.module.scss";
import { render } from "react-dom";

class ShowDatail extends React.Component
{
    state = {
        active:false,
        component:null,
        data:{}
    }


    //==========================================================
    /*
        Date : 2020/05/24
        Discrbption : 打開指定景點的Detail頁面
    */
    open = (options={
        props:{},
        component:null,
        callback : () => {}
    }) => {
        const {props,component} = options;
        const key = new Date().getTime();
        const _component = React.createElement(component,{
            ...props,
            close : this.close,
            key
        })
        this.setState({
            active:true,
            component:_component,
            data:props
        })
    };

    //==========================================================
    /*
        Date : 2020/05/24
        Discrbption : 關閉指定景點的Detail頁面
    */
    close = () => {
        this.setState({
            active:false
        })
    };


    render()
    {
        const _class = {
            true : style.active,
            false : style.nonactive
        }
        return(
            <div className={_class[this.state.active]}>
                <div className={style.OverLayer} onClick={() => this.close()}>
                    <div className = {style.panel}>
                        {/********* Head *********/}
                        <div className={style.head}>
                            <span className={style.close} onClick={()=>{this.close()}}>回上一頁</span>
                            <div className={style.break}>
                                <div className={style.home}>
                                    <p>首頁</p>
                                </div>
                                <div className={style.itemName}>{this.state.data.Name}</div>
                            </div>
                        </div>
                        {/********* Context *********/}
                        <div className={style.contest}>
                            {this.state.component}
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}

const _div = document.createElement("div");
document.body.appendChild(_div);

const _ShowDatail = render(<ShowDatail />,_div)

export default _ShowDatail