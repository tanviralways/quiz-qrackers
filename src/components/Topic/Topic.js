import React from "react";

const Topic = ({ topic }) => {
  console.log(topic);
  const { name, total, logo } = topic;

  return (
    <div>
      <img className="bg-slate-400" src={logo} alt="" />
      <h3>{name}</h3>
      <h5>{total}</h5>
    </div>
  );
};

export default Topic;
