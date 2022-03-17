const Total = ({ parts }) => {
  const total = parts.reduce((a, b) => {
    return { exercises: a.exercises + b.exercises };
  });
  return <p>Total of {total.exercises} exercises</p>;
};
export default Total;
