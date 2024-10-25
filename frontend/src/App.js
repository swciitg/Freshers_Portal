import './App.css';
import Homepage from './pages/Homepage';
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import ListHostelPage from './pages/ListHostelPage';
import InterHostel from './pages/InterHostel';
import HostelFacilities from './pages/HostelFacilities';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/hostel-list" element={<ListHostelPage/>}/>
        <Route path="/hostel-events" element={<InterHostel/>}/>
        <Route path="/hostel-fac" element={<HostelFacilities/>}/>
        <Route path="/facilities" element={<HostelFacilities/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
