import React from "react";
import style from "./Detail.module.scss";
import { Link } from "react-router-dom";
import { GoLocation } from "react-icons/go";
import { FiClock } from "react-icons/fi";
import { BsSlash } from "react-icons/bs";

const Detail = (props) => {
    const data = props.location.state.data;
    console.log(data)
    return(
        <div className={style.wrap}>  
          {/****************** Header ******************/}
            <div className={style.Header}>
                <div className={style.HeaderBox}>
                    <Link to="/">Home</Link>
                </div>
            </div>
            {/****************** Content ******************/}
            <div className={style.contentBox}>
                {/************ Break ************/}
                <div className={style.contentHeader}>
                    <div className={style.lastPage}>
                        <Link to="/">回上一頁</Link>
                    </div>
                    <div className={style.break}>
                        <div className={style.home}>
                            <Link to="/">首頁</Link>
                        </div>
                        <BsSlash />
                        <div className={style.dataName}>{data.Name}</div>
                    </div>
                </div>
                {/************ Content ************/}
                <div className={style.content}>
                    {/******* Picture *******/}
                    <div className={style.pic}>
                        <img src={data.Picture1} alt="data" />
                    </div>
                    {/******* Text *******/}
                    <div className={style.text}>
                         {/**** Title ****/}
                        <div className={style.title}>
                            <p>{data.Name}</p>
                        </div>
                        {/**** Open Time ****/}
                        <div className={style.opentime}>
                            <FiClock />
                            <p>{data.Opentime}</p>
                        </div>
                        {/**** Address ****/}
                        <div className={style.address}>
                            <GoLocation />
                            <p>{data.Add}</p>
                        </div>
                        {/**** Description ****/}
                        <div className={style.des}>
                            <p>{data.Description}</p>
                        </div>
                    </div>
                   



                </div>





            </div>    
        </div>
    )
    
};

export default Detail;