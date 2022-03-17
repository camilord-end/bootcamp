import Part from "./Part";

const Content = ({ parts }) => {
  return (
    <>
      {parts.map((p) => {
        return (
          <p key={p.id}>
            <Part part={p} />
          </p>
        );
      })}
    </>
  );
};

export default Content;
