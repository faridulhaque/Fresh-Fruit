
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './Blog/Blog';

import Home from './Home/Home';
import Inventories from './Inventories/Inventories';
import Navbar from './Navbar/Navbar';
import NotFound from './NotFound/NotFound';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>} ></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/inventories" element={<Inventories></Inventories>}></Route>
        <Route path="/*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
