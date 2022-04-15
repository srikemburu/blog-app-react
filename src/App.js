
// import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Blogs from "./components/Blogs"
import OneBlog from "./components/OneBlog"
import NewBlog from "./components/NewBlog"
import DeleteBlog from './components/DeleteBlog';
import UpdateBlog from './components/UpdateBlog';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Blogs/>} />
          <Route path="/:id" element={<OneBlog/>} />
          <Route path="/new" element={<NewBlog/> } /> 
          <Route path="/delete/:id" element={<DeleteBlog/> } />
          <Route path="/:id/update" element={<UpdateBlog/> } />           
        </Routes>
      </Router>
    </div>
  )
}

export default App


