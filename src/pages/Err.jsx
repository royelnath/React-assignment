
import { Link } from 'react-router-dom';

export default function Err() {
  return (
    <div className="error-container">
      <h2>Oops! Page Not Found</h2>
      <p>
        The page you are looking for might have been removed,
        had its name changed, or is temporarily unavailable.
      </p>
      <Link to="/" className="back-home-btn">
        Back to Home</Link>

    </div>
  );
}