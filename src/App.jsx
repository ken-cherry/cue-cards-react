import { useState } from "react";
import "./App.css";
import questions from "./data";

function App() {
  const [index, setIndex] = useState(0);
  const { showAnswer, setShowAnswer } = useState(false);

  const { id, question, answer } = questions[index];

  const nextQuestion = () => {
    setIndex((currentIndex) => {
      const newIndex = (currentIndex + 1) % question.length;
      return newIndex;
    });
  };
  const prevQuestion = () => {
    setIndex((currentIndex) => {
      const newIndex = (currentIndex - 1 + question.length) % question.length;
      return newIndex;
    });
  };
  const randomQuestion = () => {
    let randomNumber = Math.floor(Math.random() * question.length);
    if (randomNumber === index) {
      randomNumber + 1;
    }
    const newIndex = randomNumber % question.length;
    setIndex(newIndex);
  };
  // const toggleAnswer = () => {
  //   if (showAnswer) {
  //     setShowAnswer(false);
  //     return;
  //   }
  //   setShowAnswer(true);
  // };

  return (
    <>
      <article className="card">
        <section className="section">
          <div className="question" key={id}>
            <p>{question}</p>
            <button
              className="answer btn"
              onClick={() => setShowAnswer(!showAnswer)}
            >
              answer
            </button>
            {showAnswer && <Answer />}
          </div>
          <div className="answer"></div>
        </section>
        <div className="buttons">
          <button className="prev btn" onClick={prevQuestion}>
            prev
          </button>
          <button className="next btn" onClick={nextQuestion}>
            next
          </button>
          <div className="randomBtn btn">
            <button className="random" onClick={randomQuestion}>
              random question
            </button>
          </div>
        </div>
      </article>
    </>
  );
}
const Answer = () => {
  return <div>hello world</div>;
};
export default App;
