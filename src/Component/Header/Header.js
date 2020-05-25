/*
    Date : 2020/05/05
    Decription : Header Component
    Author : Fandix Huang
*/

import React from "react";
import style from "./Header.module.scss"
import { AiOutlineSearch } from "react-icons/ai";
import { connect } from "react-redux";
import { inputFilter } from "../../Store/Action"

class Header extends React.Component
{

    state = {
        inputValue:""
    }

    //===========================================================
    /*
        Date : 2020/05/17
        Discrbption : 當Categories Filter發生改變時觸發，傳遞改變的內容給store
    */
    handleChange = (e) => {
        const Value = e.target.value;
       
        this.setState({
            inputValue:Value
        })

        this.props.dispatch(inputFilter(Value))
    }

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
                        <div className={style.rwdSearch}>
                             {/*========= Search icon =========*/}
                            <div className={ style.searchIcon }>
                                <AiOutlineSearch />
                            </div>
                            {/*========= Search input =========*/}
                            <div className={ style.searchInput }>
                                <input 
                                    placeholder="Explore your owm activities"
                                    value={this.state.value}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect()(Header);