import React from "react";
import { Link } from "react-router-dom";

const Topic = ({ topic }) => {
  const { id, name, total, logo } = topic;

  return (
    <div className="  drop-shadow-2xl	border-white border-8 rounded">
      <img className="	bg-orange-200 w-56" src={logo} alt="" />
      <div className="flex justify-between p-2">
        <h3 className="text-orange-600 text-xl font-semibold p-2">{name}</h3>
        <h5 className="text-orange-600 text-xl font-semibold p-2">{total}</h5>
        <button className="bg-orange-600  rounded px-2 text-white	">
          <Link to={`topic/${id}`}> Start Quiz</Link>
        </button>
      </div>
    </div>
  );
};

export default Topic;
