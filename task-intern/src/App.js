import './App.css';
import { BrowserRouter, Route,  Routes } from 'react-router-dom';
import ShowsData from './components/ShowsData/ShowsData';
import Shows from './components/Shows/Shows';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Shows/>}/> 
        <Route path="/show/:id" element={<ShowsData/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
