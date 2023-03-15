import { useLocation, useNavigate } from 'react-router-dom';

export const BackButton = () => {
  const location = useLocation();
  const navigation = useNavigate();

  return (
    <header>
      <button
        type="button"
        onClick={() => navigation(location?.state?.from || '/characters')}
      >
        GO BACK
      </button>
    </header>
  );
};
