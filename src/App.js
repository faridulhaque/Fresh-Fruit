
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';

import Home from './components/Home/Home';
import ItemDetails from './components/ItemDetails/ItemDetails';


import Navbar from './components/Navbar/Navbar';
import NotFound from './components/NotFound/NotFound';
import ManageItems from './ManageItems/ManageItems';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>} ></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/manageItems" element={<ManageItems></ManageItems>}></Route>
        <Route path="/home/:itemDetail" element={<ItemDetails></ItemDetails>}></Route>
        
        <Route path="/*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
