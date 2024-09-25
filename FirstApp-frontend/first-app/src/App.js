import './App.css';
import { HeaderComponent } from './components/HeaderComponent';
import { Prods } from './components/Prods';
import { FooterComponent } from './components/FooterComponent';
import  AddProductComponent  from './components/AddProductComponent';

function App() {
  return (
    <>
    <HeaderComponent/> <br/>
      <Prods/>
      <AddProductComponent/>
      <br></br>
    <FooterComponent/>
     
    </>
  )
}
export default App;