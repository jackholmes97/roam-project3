import React, {useState} from "react";
import DashCard from "./DashCard";
import TopicForm from "./TopicForm";

export default function Search({forums, setForums}) {

    const [search, setSearch] = useState("")
    
    const filteredForums = forums.filter((forum) => {
        return forum.topic.toLowerCase().includes(search.toLowerCase())
    })

    return (
        <div className="browse">
            <input id="search" type="text" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)}/>
            {filteredForums.map((f) => {
                return <DashCard key={f.id} forum={f}/>
            })}
            
            <TopicForm forums={forums} setForums={setForums}/>
        </div>
    )
}