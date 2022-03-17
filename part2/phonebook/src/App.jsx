import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas" },
    { name: "Julian Orozco" },
  ]);
  const [newName, setNewName] = useState("");

  const handleChange = (event) => {
    setNewName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const includedNames = persons.map((p) => p.name);
    if (newName) {
      if (includedNames.includes(newName)) {
        alert(`${newName} is already in the phonebook`);
      } else {
        setPersons([...persons, { name: newName }]);
        setNewName("");
      }
    }
  };

  return (
    <div className="container">
      <h2 className="tittle">Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-box">
          Name: <input onChange={handleChange} value={newName} />
        </div>
        <div className="submit-button">
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <li key={person.name}>{person.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
