import React, {useState} from "react";
import DashCard from "./DashCard";
import TopicForm from "./TopicForm";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';

export default function Search({forums, setForums}) {

    const [search, setSearch] = useState("")
    
    const filteredForums = forums.filter((forum) => {
        return forum.topic.toLowerCase().includes(search.toLowerCase())
    })

    return (
        <div className="browse">
            <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField sx={{minWidth: "70%",left:"3px", background: "white"}} id="outlined-basic" label={<SearchIcon/>} variant="outlined" type="text" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
    </Box>
            {filteredForums.map((f) => {
                return <DashCard key={f.id} forum={f}/>
            })}
            <TopicForm forums={forums} setForums={setForums}/>
        </div>
    )
}