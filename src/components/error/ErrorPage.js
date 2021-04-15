import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="error-page">
      <h1 className="error-header">Oops!</h1>
      <p className="error-msg">Something went wrong.</p>
      <Link className="error-link" to={'/'}>
        <i className="fas fa-home"></i> Go back to home page.
      </Link>
    </div>
  );
};

export default ErrorPage;
