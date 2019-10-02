import React from "react";
import QuestionDetails from "./QuestionDetails";
import AnswerDetails from "./AnswerDetails";

// Question Show 
function QuestionShowPage(props) {
  return (
    <div>
      <h1>Question Number {props.number}</h1>
      <QuestionDetails 
        title="What is your favourite colur?"
        body="Red, White, blue, gray?"
        // 10 is a number, using {} is to put javascript 
        view_count={10}
        // By using first {}, is to put javascript, and 2nd {} is telling it's an object
        author={{ full_name: "Eden Hazard" }}
        created_at={new Date()}
      />
      <AnswerDetails 
        body="Red"
        author={{ full_name: 'Michael Owen' }}
        created_at={new Date()}
      />
    </div>
  );
}
export default QuestionShowPage;