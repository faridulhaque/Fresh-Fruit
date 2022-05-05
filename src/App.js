
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddNewItem from './components/AddNewItem/AddNewItem';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';

import Home from './components/Home/Home';
import ItemDetails from './components/ItemDetails/ItemDetails';
import ManageItems from './components/ManageItems/ManageItems';
import MyItems from './components/MyItems/MyItems';


import Navbar from './components/Navbar/Navbar';
import NotFound from './components/NotFound/NotFound';
import RequireAuth from './components/RequireAuth/RequireAuth';
import SignIn from './components/SignIN/SignIn';
import SignUp from './components/SignUp/SignUp';
import Supplier from './components/Supplier/Supplier';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Toaster></Toaster>
      <Routes>
        <Route path="/" element={<Home></Home>} ></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/supplier" element={<Supplier></Supplier>}></Route>
        <Route path="/manageItems" element={<RequireAuth><ManageItems></ManageItems></RequireAuth>}></Route>
        <Route path="/addNewItem" element={<RequireAuth><AddNewItem></AddNewItem></RequireAuth>}></Route>
        <Route path="/myItems" element={<RequireAuth><MyItems></MyItems></RequireAuth>}></Route>
        <Route path="/register" element={<SignUp></SignUp>}></Route>
        <Route path="/signIn" element={<SignIn></SignIn>}></Route>
        <Route path="/home/:itemDetail" element={<RequireAuth><ItemDetails></ItemDetails></RequireAuth>}></Route>
        
        <Route path="/*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
