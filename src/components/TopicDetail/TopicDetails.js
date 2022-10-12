import React from "react";
import { useLoaderData } from "react-router-dom";

const TopicDetails = () => {
  const topic = useLoaderData();

  console.log(topic.data.questions.options);

  return (
    <div>
      <div>
        <h1 className="text-xl">{topic.data.questions[0].question}</h1>
        <h3 className=" ">{topic.data.questions[0].options}</h3>
      </div>
      <div>
        <h1>{topic.data.questions[1].question}</h1>
        <h3>{topic.data.questions[1].options}</h3>
      </div>
      <div>
        <h1>{topic.data.questions[2].question}</h1>
        <h3>{topic.data.questions[2].options}</h3>
      </div>
      <div>
        <h1>{topic.data.questions[3].question}</h1>
        <h3>{topic.data.questions[3].options}</h3>
      </div>
      <div>
        <h1>{topic.data.questions[4].question}</h1>
        <h3>{topic.data.questions[4].options}</h3>
      </div>
      <div>
        <h1>{topic.data.questions[5].question}</h1>
        <h3>{topic.data.questions[5].options}</h3>
      </div>
      <div>
        <h1>{topic.data.questions[6].question}</h1>
        <h3>{topic.data.questions[6].options}</h3>
      </div>
      <div>
        <h1>{topic.data.questions[7].question}</h1>
        <h3>{topic.data.questions[7].options}</h3>
      </div>
    </div>
  );
};

export default TopicDetails;
