import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CreateBlog from './pages/CreateBlog';
import EditBlog from './pages/EditBlog';
import { BrowserRouter, Routes , Route, Link } from "react-router-dom"


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />



        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/createblog' element={<CreateBlog/>} />
          <Route path='/editblog' element={<EditBlog/>} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
