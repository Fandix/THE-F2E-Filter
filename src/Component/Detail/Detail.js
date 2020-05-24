import React from "react";
import style from "./Detail.module.scss";
import { GoLocation } from "react-icons/go";
import { FiClock } from "react-icons/fi";

const Detail = (props) => {
    const {Name,Description,Picture1,Opentime,Add} = props;
    return(
        <div className={style.wrap}>
            <div className={style.content}>
                {/*========== Img ==========*/}
                <div className={style.img}>
                    <img src={Picture1} alt="" />
                </div>
                {/*========== Title ==========*/}
                <div className={style.title}>
                    {Name}
                </div>
                {/*========== Open Time ==========*/}
                <div className={style.open}>
                    <FiClock />
                    {Opentime}
                </div>
                {/*========== Address ==========*/}
                <div className={style.add}>
                    <GoLocation />
                    {Add}
                </div>
                {/*========== Description ==========*/}
                <div className={style.descri}>
                    {Description}
                </div>
            </div>
           
        </div>
    )
};

export default Detail;