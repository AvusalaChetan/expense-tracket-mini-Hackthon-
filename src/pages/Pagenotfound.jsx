import React from "react";
import {useNavigate} from "react-router";

const Pagenotfound = () => {
  const navigate = useNavigate();
  return (
    <p>
      404
      <button onClick={() => navigate("/auth/register")}>
        go register page
      </button>
      <button onClick={() => navigate("/auth/login")}>go login page</button>
    </p>
  );
};

export default Pagenotfound;
