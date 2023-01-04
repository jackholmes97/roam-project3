import React, {useEffect, useState} from "react";
import DashCard from "./DashCard";

export default function Search({browse}) {

    const [search, setSearch] = useState("")
    
    const filteredForums = browse.filter((forum) => {
        return forum.topic.toLowerCase().includes(search.toLowerCase())
    })

    return (
        <div className="browse">
            <input id="search" type="text" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)}/>
            {filteredForums.map((f) => {
                return <DashCard key={browse.id} forum={f}/>
            })}
        </div>
    )
}