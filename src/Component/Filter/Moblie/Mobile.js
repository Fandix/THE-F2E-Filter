/*
    Date : 2020/05/27
    Decription : When in Mobile version, show this Component 
    Author : Fandix Huang
*/

import React from "react";
import style from "./Moblie.module.scss"
import { AiOutlinePlus,AiOutlineMinus } from "react-icons/ai";

const Mobile = ({ onLocationClick, onCateClick,
    onLocationChange, onCateChange,
    LocationValue, CateFreeValue,CateOpenValue,
    mobLacFilterState,mobCatFilterState }) => {
    return (
        <div className={style.mobWrap}>
            {/******** Location ********/}
            {
                mobLacFilterState ?
                    <div className={style.mobLocationAvtive}>
                        <div className={style.mobLocBox}>
                            {/******* Head *******/}
                            <div className={style.mobLocAvtHead}>
                                <p>Location</p>
                                <AiOutlineMinus onClick={onLocationClick} />
                            </div>
                            {/******* 選單 *******/}
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
                    </div> :
                    <div className={style.mobLocation}>
                        <p>Location</p>
                        <AiOutlinePlus onClick={onLocationClick} />
                    </div>
            }
            {/******** Categories ********/}
            {
                mobCatFilterState ?
                    <div className={style.mobCateAvtive}>
                        <div className={style.mobCateBox}>
                            {/******* Head *******/}
                            <div className={style.mobLocAvtHead}>
                                <p>Categories</p>
                                <AiOutlineMinus onClick={onCateClick} />
                            </div>
                            {/******* Check Box *******/}
                            <div className={style.mobCheck}>
                                {/*=======================*/}
                                <label>
                                    <input 
                                        type="checkbox" 
                                        id="checkbox" 
                                        name="免費參觀" 
                                        onClick={onCateChange} checked={CateFreeValue} 
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
                    </div> :
                    <div className={style.mobLocation}>
                        <p>Categories</p>
                        <AiOutlinePlus onClick={onCateClick} />
                    </div>
            }
        </div>
    )

};

export default Mobile;