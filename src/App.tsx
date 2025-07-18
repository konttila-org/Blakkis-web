import { Routes, Route } from 'react-router-dom';
import {
  HomePage,
  JoinGroupPage,
  NotFound404Page,
  PrivacyPolicyPage,
  ContactPage,
} from './pages';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/group/join/:id" element={<JoinGroupPage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<NotFound404Page />} />
    </Routes>
  );
};

export default App;
