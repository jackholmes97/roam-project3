import React, {useState, useEffect} from "react";
import DashList from "./DashList";

export default function Dashboard({forums}) {
    const [forums, setForums] = useState([]);

    useEffect(() => {
        fetch("/forums")
          .then((r) => r.json())
          .then(setForums);
      }, []);


    const frms = [...forums]

    const gamingFrms = frms.filter(forum => forum.subject === "gaming")
    console.log(gamingFrms);

    const historyFrms = frms.filter(forum => forum.subject === "history")
    console.log(historyFrms);

    const cookingFrms = frms.filter(forum => forum.subject === "cooking")
    console.log(cookingFrms);

    const newsFrms = frms.filter(forum => forum.subject === "news")
    console.log(newsFrms);

    return(
      <div className="Dash">
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














