import {useNavigate} from 'react-router';

function ProtectedRoute({ children }) {
  const navigate = useNavigate();  
  const token = localStorage.getItem('token');

  if (!token) {
    return navigate('/login');
  }

  return children;
}

export default ProtectedRoute;