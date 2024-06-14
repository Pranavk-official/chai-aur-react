// import React from "react";

import { useParams } from "react-router-dom";

function User() {
  const { id } = useParams();
  return (
    <div className="bg-slate-700 flex flex-wrap justify-center text-white text-5xl p-5">
      User: {id}
    </div>
  );
}

export default User;
