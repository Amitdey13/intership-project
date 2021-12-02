import React from 'react'
import { Link } from "react-router-dom";


function Button({ path, value }) {
  return (
    <Link to={path || '/'}>
      <div className="my-3 mx-3 px-3 f-2 py-2 app-btn rounded">
        {value}
      </div>
    </Link>
  );
}

export default Button
