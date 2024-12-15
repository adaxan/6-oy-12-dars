import React from "react";
import { useNavigate } from "react-router-dom";

function Pagee({ children }) {
  const navigate = useNavigate();
  return (
    <div>
      <div className="container mx-auto bg-blue-500 flex justify-around p-4 rounded-md">
        <button
          onClick={() => {
            navigate("/timer");
          }}
          className="btn btn-primary"
        >
          Timer
        </button>
        <button
          onClick={() => {
            navigate("/");
          }}
          className="btn btn-error"
        >
          Food
        </button>
      </div>
      {children}
    </div>
  );
}

export default Pagee;
