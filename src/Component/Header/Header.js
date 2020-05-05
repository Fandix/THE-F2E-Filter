/*
    Date : 2020/05/05
    Decription : Header Component
    Author : Fandix Huang
*/

import React from "react";
import style from "./Header.module.scss"
import { AiOutlineSearch } from "react-icons/ai";

class Header extends React.Component
{
    render()
    {
        return(
            <div className={ style.wrap }>
                <div className={ style.box }>
                    {/************* Home *************/}
                    <div className={ style.home }>
                        <a href="/">HaveFun</a>
                    </div>
                    {/************* Search *************/}
                    <div className={ style.search }>
                        {/*========= Search icon =========*/}
                        <div className={ style.searchIcon }>
                            <AiOutlineSearch />
                        </div>
                        {/*========= Search input =========*/}
                        <div className={ style.searchInput }>
                            <input placeholder="Explore your owm activities"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;