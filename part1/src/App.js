import "./App.css";
import Message from "./Message";
import Description from "./Description";

const App = () => {
  const a = 5;
  const b = 8;
  return (
    <div className="App">
      <h1>Titulo de la app</h1>
      <strong>Trabajando en esho</strong>
      <div>
        <p>{"El resultado de sumar " + a + " + " + b + " es: " + (a + b)}</p>
      </div>
      <Message text={"Juan"} color={"yellow"}/>
      <Message text={"Pepe"} color={"blue"}/>
      <Message text={"Dana"} color={"red"}/>
      <Description />
    </div>
  );
};

export default App;
