import React from "react";

const NotFound = (props) => {
  return (
    <div className="container">
      <div className="row text-center">
        <div className="col-lg-6 offset-lg-3 col-sm-6 offset-sm-3 col-12 p-3 error-main">
          <div className="row">
            <div className="col-lg-8 col-12 col-sm-10 offset-lg-2 offset-sm-1">
              <h1 className="m-0">404</h1>
              <h6>Page not found</h6>
              <p>
                The page you are looking for might have been removed had ts name
                changes or is temporarilt unavailable
              </p>
              <button
                className="btn btn-primary"
                onClick={() => props.history.replace("/")}
              >
                Back to Home Page
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
