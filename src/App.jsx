import { useState } from "react";
import "./App.css";
import questions from "./data";

function App() {
  const [index, setIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const { id, question, answer } = questions[index];

  const checkNumber = (number) => {
    if (number > questions.length - 1) {
      return 0;
    }
    if (number < 0) {
      return questions.length - 1;
    }
    return number;
  };
  const nextQuestion = () => {
    setShowAnswer(false);
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevQuestion = () => {
    setShowAnswer(false);
    setIndex((index) => {
      let newIndex = index - 1 + question.length;
      return checkNumber(newIndex);
    });
  };
  const randomQuestion = () => {
    setShowAnswer(false);
    let randomNumber = Math.floor(Math.random() * question.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    let newIndex = randomNumber % question.length;
    setIndex(checkNumber(randomNumber));
  };

  return (
    <>
      <main>
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
            </div>
            <div className="answer">{showAnswer && <p>{answer}</p>}</div>
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
      </main>
    </>
  );
}
export default App;
