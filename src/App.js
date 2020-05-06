import React from "react";
import Header from "./Component/Header/Header";
import DataList from "./Component/DataList/DataList";

class App extends React.Component
{
    render()
    {
        return(
            <div>
                {/* ---------- Header ----------- */}
                <Header />
                {/* --------- Data Area ---------- */}
                <DataList />
            </div>
        )
    }
}

export default App;