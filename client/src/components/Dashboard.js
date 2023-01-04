import React from "react";
import DashList from "./DashList";

export default function Dashboard({favs, forums}) {


    const frms = [...forums]

    const gamingFrms = frms.filter(forum => forum.subject === "gaming")

    const historyFrms = frms.filter(forum => forum.subject === "history")

    const cookingFrms = frms.filter(forum => forum.subject === "cooking")

    const newsFrms = frms.filter(forum => forum.subject === "news")

    return(
      <div className="Dash">
        <h1>My Forums</h1>
        <DashList arr={favs}/>
        <h1>Gaming</h1>
        <DashList arr={gamingFrms}/>
        <h1>History</h1>
        <DashList arr={historyFrms}/>
        <h1>Cooking</h1>
        <DashList arr={cookingFrms}/>
        <h1>News</h1>
        <DashList arr={newsFrms}/>
      </div>  
    )
}
