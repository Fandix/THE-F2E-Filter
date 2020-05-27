/*
    Date : 2020/05/27
    Decription : When in Broser version, show this Component 
    Author : Fandix Huang
*/

import React from "react";
import style from "./Browser.module.scss";

const WebPage = ({ onLocationChange, onCateChange,
    LocationValue, CateFreeValue, CateOpenValue
}) => {
    return (
        <div className={style.wrap}>
            {/******** Location ********/}
            <div className={style.location}>
                <div className={style.box}>
                    <p>Location</p>
                    <select onChange={onLocationChange} value={LocationValue}>
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
            {/******** Categories ********/}
            <div className={style.cate}>
                <div className={style.box}>
                    <p>Categories</p>
                    <div className={style.check}>
                        {/*=======================*/}
                        <label>
                            <input 
                                type="checkbox" 
                                id="checkbox" 
                                name="免費參觀" 
                                onClick={onCateChange} 
                                checked={CateFreeValue} 
                            />
                            <span className={style.checkbox}></span>
                                免費參觀
                        </label>
                        {/*=======================*/}
                        <label>
                            <input 
                                type="checkbox" 
                                id="checkbox" 
                                name="全天候開放" 
                                onClick={onCateChange} 
                                checked={CateOpenValue} 
                            />
                            <span className={style.checkbox}></span>
                                全天候開放
                        </label>
                        {/*=======================*/}
                    </div>
                </div>
            </div>
        </div>
    )

};

export default WebPage;