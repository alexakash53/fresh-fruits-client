import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import AllFruits from './Pages/AllFruites/AllFruits';
import Home from './Pages/Home/Home/Home';
import ProductDetails from './Pages/Home/Product/ProductDetails';
import Products from './Pages/Home/Products/Products';
import AddItem from './Pages/Inventory/AddItem/AddItem';
import Inventory from './Pages/Inventory/Inventory/Inventory';
import MyItem from './Pages/Inventory/MyItem/MyItem';
import UpdateItem from './Pages/Inventory/UpdateItem/UpdateItem';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import Blog from './Pages/Shared/Blog/Blog';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header'
import NotFound from './Pages/Shared/NotFound/NotFound';

function App() {
  return (
    <div className="App">
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/blog' element={<Blog></Blog>}></Route>
          <Route path='/inventory' element={<RequireAuth><Inventory></Inventory></RequireAuth>}></Route>
          <Route path='/my-item' element={<RequireAuth>
            <MyItem></MyItem>
          </RequireAuth>}></Route>
          <Route path='/add-item' element={<RequireAuth>
            <AddItem></AddItem>
          </RequireAuth>}></Route>
          <Route path='/update-item' element={<RequireAuth>
            <UpdateItem></UpdateItem>
          </RequireAuth>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/product-details/:id" element={<RequireAuth><ProductDetails></ProductDetails></RequireAuth>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/fruits' element={<AllFruits></AllFruits>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
        <Footer></Footer>
    </div>
  );
}

export default App;
