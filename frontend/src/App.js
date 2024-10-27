import './App.css';
import Homepage from './pages/Homepage';
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import ListHostelPage from './pages/ListHostelPage';
import InterHostel from './pages/InterHostel';
import HostelFacilities from './pages/HostelFacilities';
import InfoPage from './pages/InfoPage';
import BranchChange from './pages/BranchChange';
import MinorPage from './pages/MinorPage';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/hostel-list" element={<ListHostelPage/>}/>
        <Route path="/hostel-events" element={<InterHostel/>}/>
        <Route path="/hostel-fac" element={<HostelFacilities/>}/>
        <Route path="/info" element={<InfoPage/>}/>
        <Route path="/branch-change" element={<BranchChange/>}/>
        <Route path="/minor" element={<MinorPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
