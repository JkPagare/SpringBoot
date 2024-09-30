import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HeaderComponent } from './components/HeaderComponent';
import { Prods } from './components/Prods';
import { FooterComponent } from './components/FooterComponent';
import  AddProductComponent  from './components/AddProductComponent';

function App() {
  return (
        <BrowserRouter>
          <HeaderComponent />
          <Routes>
            <Route path="/" element={<Prods />} />
            <Route path="/addProd" element={<AddProductComponent />} />
          </Routes>
          <FooterComponent />
        </BrowserRouter>
      );
    }
    // <>
    // <HeaderComponent/> <br/>
    //   <Prods/>
    //   <AddProductComponent/>
    //   <br></br>
    // <FooterComponent/>
     
    // </>
export default App;