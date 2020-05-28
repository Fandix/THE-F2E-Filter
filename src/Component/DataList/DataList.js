/*
    Date : 2020/05/23
    Decription : 將接收到的Element Datas傳遞給子層渲染
    Author : Fandix Huang
*/

import React from "react";
import Data from "../Data/Data";
import style from "./DataList.module.scss"
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Link } from "react-router-dom"

class DataList extends React.Component {
    state = {
        datas: []
    }

    //==========================================================
    /*
        Date : 2020/05/23
        Discrbption : 當props發生改變時觸發 -> 將符合頁面的datas放進state中
    */
    componentDidUpdate(prevProps) {
        if (this.props.outputData !== prevProps.outputData) {
            this.setState({
                datas: this.props.VisibleData
            })
        }
    }


    render() {
        const datas = this.state.datas
        let key = 0;
        return (
            <div>
                <TransitionGroup component={null}>
                    {
                        datas === undefined ? "" :
                            datas.map(data => {
                                return (
                                    <CSSTransition classNames={style} timeout={500} key={key}>
                                        <Link to={{
                                            pathname: `/detail/${data.Id}`,
                                            state: {data:data}
                                        }}>
                                            <div>
                                                <Data
                                                    data={data}
                                                    key={key++}
                                                />
                                            </div>
                                        </Link>
                                    </CSSTransition>

                                )
                            })
                    }
                </TransitionGroup>

            </div>
        )
    }
}

export default DataList