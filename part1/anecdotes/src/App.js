import { useState } from "react";

const Tittle = ({ text }) => {
  return <h2>Anecdote {text}</h2>;
};

const Button = ({ text, handleClick }) => {
  return <button onClick={handleClick}>{text}</button>;
};

export const Anecdote = ({ anecdote, votes }) => {
  return (
    <>
      <p>{anecdote}</p>
      <p>Has {votes} votes</p>
    </>
  );
};

const App = () => {
  const [selected, setSelected] = useState(0);
  const [voteArray, setVoteArray] = useState([0, 0, 0, 0, 0, 0, 0]);
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
  ];

  const handleClick = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };

  const handleVote = () => {
    const voteAux = [...voteArray];
    voteAux[selected] += 1;
    setVoteArray(voteAux);
  };

  const popularQuote = () => {
    const quoteAux = Math.max(...voteArray);
    const index = voteArray.indexOf(quoteAux);
    return index;
  };

  return (
    <div className="content">
      <Tittle text={"of the day."} />
      <Anecdote anecdote={anecdotes[selected]} votes={voteArray[selected]} />
      <div className="buttons">
        <Button handleClick={handleVote} text={"vote"} />
        <Button handleClick={handleClick} text={"next anecdote"} />
      </div>
      <Tittle text={"with the most votes."} />
      <Anecdote
        anecdote={anecdotes[popularQuote()]}
        votes={voteArray[popularQuote()]}
      />
    </div>
  );
};

export default App;
