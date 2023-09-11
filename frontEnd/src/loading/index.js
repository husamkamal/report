import React from 'react';
import './style.css'; // Import your CSS for styling

const LoadingSpinner = ({ loading }) => {
  return loading ? (
    <div className="loading-spinner">
      {/* You can use any loading animation or spinner library here */}
      <div className="spinner"></div>
    </div>
  ) : null;
};

export default LoadingSpinner;
