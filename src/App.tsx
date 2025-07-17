import { Routes, Route } from 'react-router-dom';
import { HomePage, JoinGroupPage, NotFound404Page } from './pages';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/group/join/:id" element={<JoinGroupPage />} />
      <Route path="*" element={<NotFound404Page />} />
    </Routes>
  );
};

export default App;
