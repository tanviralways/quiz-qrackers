import React from "react";
import { useLoaderData } from "react-router-dom";
import Topic from "../Topic/Topic";

const Home = () => {
  const topics = useLoaderData();
  console.log(topics.data.length);

  return (
    <div>
      <h2>home page: {topics.data.length}</h2>
      <h2>
        Attend the quiz and test Your web development skill. You will know how
        much expet you are!{" "}
      </h2>
      <div className="grid md:row">
        {topics.data.map((topic) => (
          <Topic key={topic.id} topic={topic}></Topic>
        ))}
      </div>
    </div>
  );
};

export default Home;
