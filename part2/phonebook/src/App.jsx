import { useState } from "react";

const App = () => {
  const [newName, setNewName] = useState("");
  const [phone, setPhone] = useState("");
  const [persons, setPersons] = useState([
    {
      name: "Arto Hellas",
      phone: "3214567898",
    },
    {
      name: "Julian Orozco",
      phone: "3124990523",
    },
  ]);

  const handleChange = (event) => {
    setNewName(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const includedNames = persons.map((p) => p.name);
    //console.log(includedNames);
    if (newName && phone) {
      if (includedNames.includes(newName)) {
        alert(`${newName} is already in the phonebook`);
      } else {
        setPersons([...persons, { name: newName, phone: phone }]);
        setNewName("");
        setPhone("");
      }
    } else {
      alert("Neither name or phone can be empty");
    }
  };

  return (
    <div className="container">
      <h2 className="tittle">Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-name-box">
          Name: <input onChange={handleChange} value={newName} />
        </div>
        <div className="input-number-box">
          Number: 
          <input onChange={handlePhoneChange} value={phone} type="text" />
        </div>
        <div className="submit-button">
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => {
          return (
            <li key={person.name}>
              {person.name} - {person.phone}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
