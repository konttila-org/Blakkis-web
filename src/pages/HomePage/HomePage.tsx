import { useNavigate } from 'react-router-dom';

export const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="text-center">
      <h1>Blakkis 1</h1>

      <button
        onClick={() => navigate('/group/join/123')}
        className="rounded-lg bg-blue-500 px-6 py-2 font-medium text-white transition-colors hover:bg-blue-600"
      >
        Open Blakkis App
      </button>
    </div>
  );
};
