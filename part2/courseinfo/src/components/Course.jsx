import Content from "./Content";
import Total from "./Total";
import Header from "./Header";


const Course = ({ course }) => {
  //console.log(course);
  return (
    <>
      {course.map((c) => {
        return (
          <div key={c.id} className="courses">
            <Header text={c.name} id={c.id} />
            <Content parts={c.parts} />
            <Total parts={c.parts} />
          </div>
        );
      })}
    </>
  );
};

export default Course;
