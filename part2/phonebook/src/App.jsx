import { useState } from "react";
import { Contacts } from "./components/Contacts.jsx";
import { Filter } from "./components/Filter.jsx";
import { Form } from "./components/Form.jsx";
import { Subtittle } from "./components/Subtittle.jsx";
import { Tittle } from "./components/Tittle.jsx";

const App = () => {
  const [newName, setNewName] = useState("");
  const [phone, setPhone] = useState("");
  const [filter, setFilter] = useState("");
  const [persons, setPersons] = useState([
    {
      name: "Arto Hellas",
      phone: "3214567898",
    },
    {
      name: "Julian Orozco",
      phone: "3124990523",
    },
    {
      name: "Pepito Perez",
      phone: "9876543210",
    },
  ]);

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
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
      <Tittle text="Phonebook" />
      <Filter handler={handleFilterChange} filter={filter} />
      <div className="form-container">
        <Subtittle text="Add new Contact" />
        <Form
          handleSubmit={handleSubmit}
          handleName={handleNameChange}
          handlePhone={handlePhoneChange}
          name={newName}
          phone={phone}
        />
      </div>
      <div className="contact-container">
        <Subtittle text="Contacts" />
        <Contacts persons={persons} filter={filter} />
      </div>
    </div>
  );
};

export default App;
