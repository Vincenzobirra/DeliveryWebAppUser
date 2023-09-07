import { Route, Routes} from 'react-router-dom';
import '../style/App.css';
import { LogIn } from './LogIn';
import { Intro_Logo } from './IntroLogo';
import { BrowserRouter } from "react-router-dom";
import { Register } from './Register';
import { DeliverCollection } from './deliveryCollection';
import { Menu } from './menu';
import { Products } from './products';
import { Product } from './product';
function App() {

  return (
    <div className="App">
      <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Intro_Logo/> }/>
          <Route path="/logIn" element={ <LogIn/> }/>
          <Route path="/register" element={ <Register/> }/>
          <Route path="/deliveryOrCollection" element={ <DeliverCollection/> }/>
          <Route path="/menu" element={ <Menu/> }/>
          <Route path='/products/:idParent/' element={<Products/>}/>
          <Route path='/product/:idProduct/' element={<Product/>}/>
          <Route path="/selectRestaurant" element={ <DeliverCollection/> }/>
        </Routes>
      </BrowserRouter>
      </>
    </div>
  );
}

export default App;
