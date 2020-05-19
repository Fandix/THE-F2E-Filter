import Filter from "../Component/Filter/Filter"
import { connect } from "react-redux"

const FilterBtn = (state) => {
    const Btn = [];
    for (let props in state) {
        Btn.push(state[props])
    }
    return Btn
}

const mapStateToProps = (state) => {
    return {
        Btn:FilterBtn(state)
    }
};

const ShowFilterBtn = connect(
    mapStateToProps
)(Filter)

export default ShowFilterBtn;