import React from "react";
import Header from "./Component/Header/Header";
import Main from "./Component/Main/Main"

class App extends React.Component
{
    render()
    {
        return(
            <div>
                {/* ---------- Header ----------- */}
                <Header />
                {/* --------- Data Area ---------- */}
                <Main />
            </div>
        )
    }
}

export default App;