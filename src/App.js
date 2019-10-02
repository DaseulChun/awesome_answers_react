import React from 'react';
import QuestionShowPage from './components/QuestionShowPage';
import './App.css';

const numbers = [1, 2, 3, 4];

function App() {
  return (
    <div class="ui container">
    {/* in JSX, self-closing tags must be closed, for example <img> doesn't work  */}
    {/* instead <img /> must be used */}
      {/* <QuestionShowPage author="Daseul" created_at="yesterday" /> */}
      
      <QuestionShowPage />
      {/* We can use map to generate lists */}
      {numbers.map(number => (
        <QuestionShowPage key={number} number={number} />
      ))}
    </div>
  );
}


// A react Component is a function that returns a React Element.
// By Convention, react components use PascalCase naming
// Components whose names does not begin with a Capital letter
// will be interpreted as plain HTML tags

// View Question Component
// function QuestionDetails(props) {
//   return(
//     <div>
//       <h2>{props.title}</h2>
//       <p>
//         {props.body} <br />
//       </p>
//       <p>
//         <small>Seen {props.view_count} time(s)</small>
//         <ShowAttribution author={props.author.full_name} created_at={props.created_at} />
//       </p>
//     </div>
//   );
// }

// AnswerDetails Component
// function AnswerDetails(props) {
//   return(
//     <div className="ui segment">
//       <div className="ui header">Answer Details</div>
//       <p>
//         {props.body} <br />
//         <ShowAttribution author={props.author.full_name} created_at={props.created_at} />
//       </p>
//     </div>
//   )
// }

// ShowAttribution
// function ShowAttribution(props) {
//   return(
//     <small>
//       By: {props.author} - Created {props.created_at.toLocaleDateString()}
//     </small>
//   )
// }

// Question Show Component
// function QuestionShowPage(props) {
//   return (
//     <div>
//       <QuestionDetails 
//         title="What is your favourite colur?"
//         body="Red, White, blue, gray?"
//         // 10 is a number, using {} is to put javascript 
//         view_count={10}
//         // By using first {}, is to put javascript, and 2nd {} is telling it's an object
//         author={{ full_name: "Eden Hazard" }}
//         created_at={new Date()}
//       />
//       <AnswerDetails 
//         body="Red"
//         author={{ full_name: 'Michael Owen' }}
//         created_at={new Date()}
//       />
//     </div>
//   );
// }

export default App;
// module.exports = App;
