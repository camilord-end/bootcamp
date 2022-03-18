export const Input = ({ handle, value, label }) => {
  return (
    <div className={`input-${label.toLowerCase()}`}>
      {`${label} :`}<input onChange={handle} value={value} />
    </div>
  );
};
