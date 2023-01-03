
import './App.css';
import Header from './Header';
import { Routes, Route} from 'react-router-dom';
function App() {
  return (
    <div className='App'>
      <Header/>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/activity' element={<Activity/>}/>
        <Route path='/topicForm' element={<TopicForm/>}/>
        <Route path="/saved" element={<Saved/>}/>
      </Routes>
    </div>
  );
}

export default App;
