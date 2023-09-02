import { Routes, Route } from 'react-router-dom';
import { CardNews } from './pages/cardnews';
import {DetailCard} from './pages/detailCard';

function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<CardNews />} />
        <Route path="/detail" element={<DetailCard />} />
      </Routes>
    </div>
  );
}

export default App;
