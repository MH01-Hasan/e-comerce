
import Header from './component/Header/Header';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import AuthProvider from './contex/AuthProvider';
import Regester from './component/Regester/Regester';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cart from './component/Cart/Cart';
import Details from './component/Details/Details';
import Order from './component/Order/Order';
import Allorder from './component/Allorder/Allorder';

function App() {
  return (
   <div>
     < AuthProvider>
       <BrowserRouter>
       <ToastContainer></ToastContainer>
     <Header/>
     <Switch>
       <Route exact path="/">
      <Home></Home>
       </Route>
       <Route exact path="/home">
         <Home></Home>
        </Route>

       <Route  path="/cart">
        <Cart/>
        </Route>
       <Route exact  path="/order">
       <Order></Order>
        </Route>
       <Route  path="/allorder">
        <Allorder></Allorder>
        </Route>

       <Route  path="/order/:id">
        <Details></Details>
        </Route>
       

       <Route  path="/login">
      <Login></Login>
        </Route>

       <Route  path="/regester">
      <Regester></Regester>
        </Route>
        
     </Switch>
     </BrowserRouter>
     </AuthProvider>
   </div>
  );
}

export default App;
