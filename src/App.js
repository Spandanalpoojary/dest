import './App.css';
import ArrowFunction from './component/ArrowFunction'
import Spandana from './component/Spandana'
import ArrayMethod from './component/ArrayMethod'
import SpreadOperator from './component/SpreadOperator'
import Destructuring from './component/Destructuring'
import TernaryOperator from './component/TernaryOperator'
import Imp from './component/Imp'
import Home from './component/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Error from './component/Error'
import Props from './component/Props'
import MUITable from './component/MUITable'
import Card from './component/Card'
import State from './component/State'
import Effect from './component/Effect'
import LocalStorage from './component/LocalStorage'
import Api from './component/Api'
import Reciepe from './component/Reciepe';



function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/Spandana" element={<Spandana/>} />
      <Route exact path="/Arrow" element={<ArrowFunction/>} />
      <Route exact path="/Array" element={<ArrayMethod/>} />
      <Route exact path="/Spread" element={<SpreadOperator/>} />
      <Route exact path="/Destruct" element={<Destructuring/>} />
      <Route exact path="/Ternary" element={<TernaryOperator/>} />
      <Route exact path="/Imp" element={<Imp/>} />
      <Route exact path="/Props" element={<Props/>} />
      <Route exact path="/MUITable" element={<MUITable/>} />
      <Route exact path="/Card" element={<Card/>} />
      <Route exact path="/State" element={<State/>} />
      <Route exact path="/Effect" element={<Effect/>} />
      <Route exact path="/LocalStorage" element={<LocalStorage/>} />
      <Route exact path="/Api" element={<Api/>} />
      <Route exact path="/Reciepe" element={<Reciepe/>} />
      
      <Route exact path="/*" element={<Error/>} />

      </Routes>
      </BrowserRouter>
      

 
  );
}

export default App;
