import React from "react";
import DashCard from "./DashCard";

export default function DashList({arr}) {

    return(
        <div className="topicList">
            {arr.map((x) => {
                return <DashCard key={arr.id} forum= {x}/>
            })}
        </div>
    )
}