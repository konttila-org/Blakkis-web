import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/home';
import { JoinGroupPage } from './pages/join-group';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/group/join/:id" element={<JoinGroupPage />} />
    </Routes>
  );
};

export default App;
