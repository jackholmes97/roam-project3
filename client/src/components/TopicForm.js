import React,{useState} from 'react';
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
        <div className="new-forum">
            <form className="add-new-forum" onSubmit={handleSubmit}>
            <input type="text"
            placeholder="Forum Topic"
            value={topic}
            onChange ={(e) => setTopic(e.target.value)}
            />
            <select
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            >
                <option value="choose">Choose Subject</option>
                <option value="cooking">Cooking</option>
                <option value="news">News</option>
                <option value="gaming">Gaming</option>
                <option value="history">History</option>
            </select>
            <input type="submit" value="Submit"/>
            </form>
        </div>
    )
    }