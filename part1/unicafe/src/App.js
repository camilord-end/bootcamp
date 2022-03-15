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
    <table>
      <tbody>
        <tr>
          <StadisticsLine text="Good:" value={good} />
        </tr>
        <tr>
          <StadisticsLine text="Neutral:" value={neutral} />
        </tr>
        <tr>
          <StadisticsLine text="Bad:" value={bad} />
        </tr>
        <tr>
          <StadisticsLine text="All:" value={total} />
        </tr>
        <tr>
          <StadisticsLine text="Average:" value={(good - bad) / total} />
        </tr>
        <tr>
          <StadisticsLine
            text="Positive:"
            value={Math.round((good / total) * 1000) / 10 + "%"}
          />
        </tr>
      </tbody>
    </table>
  );
};

const StadisticsLine = ({ text, value }) => {
  return (
    <>
      <td>{text}</td>
      <td>{value}</td>
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
      <h2>Stadistics</h2>
      {good === 0 && bad === 0 && neutral === 0 ? (
        <p>No feedback given</p>
      ) : (
        <Stadistics good={good} neutral={neutral} bad={bad} />
      )}
    </div>
  );
};

export default App;
