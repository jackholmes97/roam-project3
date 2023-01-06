import React,{useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
export default function CreateTopic({setForums, forums}){
    const [topic, setTopic] = useState("")
    const [subject, setSubject] = useState("")
function handleSubmit(e){
    e.preventDefault();
    let newForum = {
        topic: topic,
        subject: subject
    };
    fetch("/forums", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newForum)
    })
    .then((r) => r.json())
    .then(data => setForums([...forums, data]))
    setTopic("");
    setSubject("");
}
return(
    <div >
        <form onSubmit={handleSubmit}>
                <Box
                component="form"
                sx={{
                  '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                className="add-new-forum"
              >
                <TextField id="outlined-basic" label="Add Topic" variant="outlined"  type="text"
                placeholder="Forum Topic"
                value={topic}
                onChange ={(e) => setTopic(e.target.value)}/>
              </Box>
                <Box  sx={{
                  '& > :not(style)': { m: 1, width: '25ch' },
                }} onSubmit={handleSubmit}>
                <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Subject</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={subject}
                label="subject"
                onChange={(e) => setSubject(e.target.value)}
                >
            <MenuItem value="Cooking">Cooking</MenuItem>
             <MenuItem value="Gaming">Gaming</MenuItem>
             <MenuItem value="News">News</MenuItem>
            <MenuItem value="History">History</MenuItem>
            </Select>
            </FormControl>
            </Box>
            <Button variant="outlined" sx={{mb: 5, l: "45%"}} type="submit" value="Submit" >Submit Forum</Button>
            </form>
    </div>
        )
    }