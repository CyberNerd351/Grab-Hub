import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import GetProducts from './components/GetProducts';
import AddProducts from './components/AddProducts';
import MakePayments from './components/MakePayments';
import MyFooter from './components/MyFooter';
import Navbar from './components/Navbar';
import Marquee from './components/marquee';
import AboutUs from './components/AboutUs';


function App() {
  return (
    <div className="App bg-dark">
      <Router>
      <header className="App-header">

      <h1 className='mt-3'>GRAB HUB-Order and Eat ChapChap</h1>

      </header>

      <Navbar/>
      <br />      

      <Routes>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/' element={<GetProducts/>}/>
        <Route path='/addproducts' element={<AddProducts/>}/>
        <Route path='/makepayments' element={<MakePayments/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>

      </Routes>

      </Router>

      <Marquee/>

      <MyFooter/>
    </div>
  );
}

export default App;


