import { useState } from "react";

const Button = ({ name, handleClick }) => {
  return (
    <>
      <button onClick={handleClick}>{name}</button>
    </>
  );
};

const Stadistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  return (
    <>
      <h2>Stadistics</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>All: {total}</p>
      <p>Average: {(good - bad) / total}</p>
      <p>Positive: {good / total}</p>
    </>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => {
    setGood(good + 1);
  };
  const handleBadClick = () => {
    setBad(bad + 1);
  };
  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  };

  return (
    <div>
      <h1 className="Tittle">Give Feedback</h1>
      <Button name={"good"} handleClick={handleGoodClick} />
      <Button name={"neutral"} handleClick={handleNeutralClick} />
      <Button name={"bad"} handleClick={handleBadClick} />
      <Stadistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
