import Pagination from "../Component/Pagination/Pagination";
import { connect } from "react-redux";


const VisiPage = (CurrentPage,TotalPage) => {
    return{
        CurrentPage,
        TotalPage
    }
};

const mapStateToProps = (state,ownProps) => {
    let Currentpage = state.VisibleData.CurrentPage;
    let Totalpage = ownProps.totalPage;
    return{
        VisiblePage:VisiPage(Currentpage,Totalpage)
    }
};


const VisiblePage = connect(
    mapStateToProps
)(Pagination);

export default VisiblePage;