// import { useState } from "react";
// import "./App.css";
// import questions from "./data";
// import Questions from "./Questions";
// import { useState } from "react";
// import "./App.css";
// import questions from "./data";

// function App() {
//   const [index, setIndex] = useState(0);
//   const { showAnswer, setShowAnswer } = useState(true);

//   const { id, question, answer } = questions[index];

//   const nextQuestion = () => {
//     setIndex((currentIndex) => {
//       const newIndex = (currentIndex + 1) % question.length;
//       return newIndex;
//     });
//   };
//   const prevQuestion = () => {
//     setIndex((currentIndex) => {
//       const newIndex = (currentIndex - 1 + question.length) % question.length;
//       return newIndex;
//     });
//   };
//   const randomQuestion = () => {
//     let randomNumber = Math.floor(Math.random() * question.length);
//     if (randomNumber === index) {
//       randomNumber + 1;
//     }
//     const newIndex = randomNumber % question.length;
//     setIndex(newIndex);
//   };
//   return (
//     <>
//       <main>
//         <article className="card">
//           {/* <Questions /> */}
//           <section className="section">
//             <div className="question" key={id}>
//               <p>{question}</p>
//               <button className="answer btn">answer</button>
//             </div>
//             <div className="answer ">
//               {/* <p>{answer}</p> */}
//               {/* {showAnswer && <p>{answer}</p>} */}
//             </div>
//           </section>
//           <div className="buttons">
//             <button className="prev btn" onClick={prevQuestion}>
//               prev
//             </button>
//             <button className="next btn" onClick={nextQuestion}>
//               next
//             </button>
//             <div className="randomBtn btn">
//               <button className="random" onClick={randomQuestion}>
//                 random question
//               </button>
//             </div>
//           </div>
//         </article>
//       </main>
//     </>
//   );
// }

// export default App;
