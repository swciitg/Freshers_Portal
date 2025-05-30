import './App.css';
import Homepage from './pages/Homepage';
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import ListHostelPage from './pages/ListHostelPage';
import InterHostel from './pages/InterHostel';
import HostelFacilities from './pages/HostelFacilities';
import FacilitiesPage from './pages/FacilitiesPage';
import InfoPage from './pages/InfoPage';
import DeparmentPage from './pages/DeparmentPage';
import BranchChange from './pages/BranchChange';
import MinorPage from './pages/MinorPage';
import WelfarePage from './pages/WelfarePage';
import CulturalPage from './pages/CulturalPage';
import TechBoard from './pages/TechBoard';
import SportsBoard from './pages/SportsBoard';
import HabPage from './pages/HabPage';
import FestPage from './pages/FestPage';
import SGCPage from './pages/SGCPage';
import FaqsPage  from './pages/FaqsPage';
import ContactPage from './pages/ContactPage';
import SaathiPage from './components/SaathiPage/Main';

function App() {
  return (
    <div>
      <BrowserRouter basename={"/freshers"}>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/hostel-list" element={<ListHostelPage/>}/>
        <Route path="/hostel-events" element={<InterHostel/>}/>
        <Route path="/hostel-fac" element={<HostelFacilities/>}/>
        <Route path="/facilities" element={<FacilitiesPage/>}/>
        <Route path="/info" element={<InfoPage/>}/>
        <Route path="/department" element={<DeparmentPage/>}/>
        <Route path="/branch-change" element={<BranchChange/>}/>
        <Route path="/minor" element={<MinorPage/>}/>
        <Route path="/swb" element={<WelfarePage/>}/>
        <Route path="/cult" element={<CulturalPage/>}/>
        <Route path="/tech" element={<TechBoard/>}/>
        <Route path="/sports" element={<SportsBoard/>}/>
        <Route path="/hab" element={<HabPage/>}/>
        <Route path="/fests" element={<FestPage/>}/>
        <Route path="/sgc" element={<SGCPage/>}/>
        <Route path="/faqs" element={<FaqsPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/saathi" element={<SaathiPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;