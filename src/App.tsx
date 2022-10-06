import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("");
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<boolean | undefined>(undefined);

  const randomColor = () => {
    const colors = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F"
    ];
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += colors[Math.floor(Math.random() * colors.length)];
    }
    return color;
  };

  const handleAnswerClicked = (answer: string) => {
    if (answer === color) {
      setResult(false);
      pickColor();
    } else {
      setResult(true);
    }
  };

  const pickColor = () => {
    const actualColor = randomColor();
    setColor(actualColor);
    console.log(actualColor);
    setAnswers(
      [actualColor, randomColor(), randomColor()].sort(
        () => Math.random() - 0.5
      )
    );
  };

  useEffect(() => {
    pickColor();
  }, []);

  return (
    <div className="App">
      <div className="container">
        <div className="panel" style={{ background: color }}></div>
        <div className="answers">
          {answers.map((answer) => (
            <button onClick={() => handleAnswerClicked(answer)} key={answer}>
              {answer}
            </button>
          ))}
          {result === false && <p className="correct">Correct answer!</p>}
          {result === true && <p className="wrong">Wrong answer!</p>}
        </div>
      </div>
    </div>
  );
}

export default App;
