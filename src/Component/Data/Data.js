import React from "react";
import style from "./Data.module.scss"
import { GoLocation } from "react-icons/go";
import { FiClock } from "react-icons/fi";

const Data = ({data,onclick}) => {
    return(
        <div className={style.wrap} onClick={onclick}>
            {/*********** img ***********/}
            <div className={style.pic}>
                <img src={data.Picture1} alt={data.Id} />
            </div>
            {/*********** Text ***********/}
            <div className={style.text}>
                <div className={style.textWrap}>
                    {/******* Title *******/}
                    <p>{data.Name}</p>
                    {/******* Description *******/}
                    <div className={style.Des}>
                        {
                            data.Description.length>=20?
                            data.Description.slice(0,80) + "...":
                            data.Description
                        }
                    </div>
                    {/******* classification *******/}
                    <div className={style.classification}>
                        {/******* Zone *******/}
                        <div className={style.zone}>
                            <GoLocation />
                            {data.Zone}
                        </div>
                        {/******* Free *******/}
                        <div className={data.Ticketinfo === ""?
                                null:
                                style.free}>
                            {
                                data.Ticketinfo === ""?
                                null:
                                data.Ticketinfo
                            }
                        </div>
                        {/******* Open *******/}
                        <div className={data.Opentime !== "全天候開放"?
                        null:style.AllDatOpen}>
                            {
                                data.Opentime !== "全天候開放"?
                                null:
                                data.Opentime
                            }
                        </div>
                    </div>
                    {/******* Opentime *******/}
                    <div className={data.Opentime === "全天候開放"?null:style.openTime}>
                        {
                            data.Opentime === "全天候開放"?null: <FiClock />
                        }
                        {
                            data.Opentime === "全天候開放"?null: data.Opentime
                        }
                    </div>
                </div>
            </div> 
        </div>
    )
};

export default Data;