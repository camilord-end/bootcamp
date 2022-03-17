const Header = ({ id,text }) => <h1 key={id}>{text}</h1>

const Total = ({ parts }) => {
  return (
    <p>Total of {parts[0].exercises + parts[1].exercises + parts[2].exercises} exercises</p>
  )
}

const Part = ({ part }) => 
  <>
    {part.name} {part.exercises}
  </>



const Content = ({parts}) => {
  return (
    <>
      {parts.map((p)=>{
        return (
          <p key={p.id}>
            <Part part={p}/>
          </p>
        )
      })}   
    </>
  )
}

const Course = ({course}) => {
  return (
    <div className="course">
      <Header text={course.name} id={course.id}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

export default Course