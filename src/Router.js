import React from "react";
import axios from "./Common/axios"

class Router extends React.Component
{
    componentDidMount()
    {
        axios.get("https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97").then((res)=>{
            console.log(res.data.result.records)
        })
    }


    render()
    {
        
        return(
            <div>
                

            </div>
        )
    }
}

export default Router;