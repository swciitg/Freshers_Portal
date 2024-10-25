import './App.css';
import Homepage from './pages/Homepage';
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import ListHostelPage from './pages/ListHostelPage';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/hostel-list" element={<ListHostelPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
