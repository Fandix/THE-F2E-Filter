/*
    Date : 2020/05/06
    Decription : Filter Component
    Author : Fandix Huang
*/

import React,{ Fragment  } from "react";
import style from "./Filter.module.scss"
import { LocationFilter,
        CategoriesFreeFilter,CategoriesOpenFilter,
        PageNumber
} from "../../Store/Action"
import Media from 'react-media';
import { AiOutlinePlus,AiOutlineMinus } from "react-icons/ai";

class Filter extends React.Component
{
    state = {
        免費參觀:false,
        全天候開放:false,
        Location : "全部",
        mobLacFilterState : false,
        mobCatFilterState : false
    }

    //==========================================================

    /*
        Date : 2020/05/21
        Discrbption : 當props發生改變時調用 -> 當FilterBtn.js回傳新的props時更改Filter State
    */
    componentDidUpdate(prevProps,prevState){
        const Btn = this.props.Btn;
        
        //Step 1 : 判斷上一個props與這次傳遞的props是否不相等 => 若沒有會造成無限循環
        if(prevProps.Btn !== this.props.Btn){

            //Step 2 : 將props(Object)中所有元素進行判斷
            for (let props in Btn) {
                if(props === "FreeShowState" && Btn[props] === false){
                    this.setState({
                        免費參觀:false
                    })
                }else if(props === "OpenShowState" && Btn[props] === false){
                    this.setState({
                        全天候開放:false
                    })
                }else if(props === "LocationShowState" && Btn[props] === "全部"){
                    this.setState({
                        Location : "全部"
                    })
                }
            }
        }
    }

    //==========================================================

    /*
        Date : 2020/05/17
        Discrbption : 當Location Filter發生改變時觸發，傳遞改變的內容給store
    */
    onLocationChange = (e) => {
        const value = e.target.value;
        this.setState({
            Location:value
        })
        this.props.dispatch(LocationFilter(value));
        this.props.dispatch(PageNumber(1));
    }

    //===========================================================
    /*
        Date : 2020/05/17
        Discrbption : 當Categories Filter發生改變時觸發，傳遞改變的內容給store
    */
    onCategoriesChange = (e) => {
        const name = e.target.name;
        const value = e.target.checked;
        this.setState({
            [name]:value
        })

        if(name === "免費參觀"){
            this.props.dispatch(CategoriesFreeFilter(name,value));
            this.props.dispatch(PageNumber(1));
            return;
        }
        this.props.dispatch(CategoriesOpenFilter(name,value))
        this.props.dispatch(PageNumber(1));
    }

    //===========================================================
    /*
        Date : 2020/05/25
        Discrbption : 在手機模式下，點擊Filter的+符號觸發 -> 打開該Filter頁面
    */
    onMobLocationFilter = () => {
        const LocState = this.state.mobLacFilterState;
        this.setState({
            mobLacFilterState : !LocState
        })
    }

    //===========================================================
    /*
        Date : 2020/05/25
        Discrbption : 在手機模式下，點擊Filter的+符號觸發 -> 打開該Filter頁面
    */
    onMobCateFilter = () => {
        const CateState = this.state.mobCatFilterState;
        this.setState({
            mobCatFilterState : !CateState
        })
    }

    render()
    {
        return(
            <div>
                <Media queries={{
                    small: "(max-width: 959px)",
                    medium: "(min-width: 960px)"
                }}>
                    {matches => (
                        <Fragment>
                            {/******* mobile *******/}
                            {matches.small && 
                                <div className={style.mobWrap}>
                                    {/******** Location ********/}
                                    {
                                        this.state.mobLacFilterState?
                                        <div className={style.mobLocationAvtive}>
                                            <div className={style.mobLocBox}>
                                                {/******* Head *******/}
                                                <div className={style.mobLocAvtHead}>
                                                    <p>Location</p>
                                                    <AiOutlineMinus onClick={this.onMobLocationFilter}/>
                                                </div>
                                                {/******* 選單 *******/}
                                                <select onChange={this.onLocationChange} value={this.state.Location}>
                                                    <option>全部</option>
                                                    <option>三民區</option>
                                                    <option>大樹區</option>
                                                    <option>六龜區</option>
                                                    <option>仁武區</option>
                                                    <option>小港區</option>
                                                    <option>內門區</option>
                                                </select>
                                            </div>
                                        </div>:
                                        <div className={style.mobLocation}>
                                            <p>Location</p>
                                            <AiOutlinePlus onClick={this.onMobLocationFilter}/>
                                        </div>
                                    }
                                    {/******** Categories ********/}
                                    {
                                        this.state.mobCatFilterState?
                                        <div className={style.mobCateAvtive}>
                                            <div className={style.mobCateBox}>
                                                {/******* Head *******/}
                                                <div className={style.mobLocAvtHead}>
                                                    <p>Categories</p>
                                                    <AiOutlineMinus onClick={this.onMobCateFilter}/>
                                                </div>
                                                {/******* Check Box *******/}
                                                <div className={style.mobCheck}>
                                                    {/*=======================*/}
                                                    <label>
                                                        <input type="checkbox" id="checkbox" name="免費參觀" onClick = {this.onCategoriesChange} checked={this.state.免費參觀}/>
                                                        <span className={ style.checkbox }></span>
                                                        免費參觀
                                                    </label>
                                                    {/*=======================*/}
                                                    <label>
                                                        <input type="checkbox" id="checkbox" name="全天候開放" onClick = {this.onCategoriesChange} checked={this.state.全天候開放}/>
                                                        <span className={ style.checkbox }></span>
                                                        全天候開放
                                                    </label>
                                                    {/*=======================*/}
                                                </div>
                                            </div>
                                        </div>:
                                        <div className={style.mobLocation}>
                                            <p>Categories</p>
                                            <AiOutlinePlus onClick={this.onMobCateFilter}/>
                                        </div>
                                    }
                                    
                                </div>
                            }

                            {/******* browser *******/}
                            {matches.medium && 
                                <div className={ style.wrap }>
                                {/******** Location ********/}
                                <div className={ style.location }>
                                    <div className={ style.box }>
                                        <p>Location</p>
                                        <select onChange={this.onLocationChange} value={this.state.Location}>
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
                                <div className={ style.cate }>
                                    <div className={ style.box }>
                                        <p>Categories</p>
                                        <div className={ style.check }>
                                            {/*=======================*/}
                                            <label>
                                                <input type="checkbox" id="checkbox" name="免費參觀" onClick = {this.onCategoriesChange} checked={this.state.免費參觀}/>
                                                <span className={ style.checkbox }></span>
                                                免費參觀
                                            </label>
                                            {/*=======================*/}
                                            <label>
                                                <input type="checkbox" id="checkbox" name="全天候開放" onClick = {this.onCategoriesChange} checked={this.state.全天候開放}/>
                                                <span className={ style.checkbox }></span>
                                                全天候開放
                                            </label>
                                            {/*=======================*/}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            }
                        </Fragment>
                    )}
                </Media>
            </div>





            
        )
    }
}

export default Filter