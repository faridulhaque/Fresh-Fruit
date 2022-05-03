
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddNewItem from './components/AddNewItem/AddNewItem';
import Blog from './components/Blog/Blog';

import Home from './components/Home/Home';
import ItemDetails from './components/ItemDetails/ItemDetails';
import ManageItems from './components/ManageItems/ManageItems';


import Navbar from './components/Navbar/Navbar';
import NotFound from './components/NotFound/NotFound';
import RequireAuth from './components/RequireAuth/RequireAuth';
import SignIn from './components/SignIN/SignIn';
import SignUp from './components/SignUp/SignUp';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>} ></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/manageItems" element={<ManageItems></ManageItems>}></Route>
        <Route path="/addNewItem" element={<AddNewItem></AddNewItem>}></Route>
        <Route path="/signUp" element={<SignUp></SignUp>}></Route>
        <Route path="/signIn" element={<SignIn></SignIn>}></Route>
        <Route path="/home/:itemDetail" element={<RequireAuth><ItemDetails></ItemDetails></RequireAuth>}></Route>
        
        <Route path="/*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
