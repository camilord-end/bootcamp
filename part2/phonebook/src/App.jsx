import { useState, useEffect } from "react";
import { Contacts } from "./components/Contacts.jsx";
import { Filter } from "./components/Filter.jsx";
import { Form } from "./components/Form.jsx";
import { Subtittle } from "./components/Subtittle.jsx";
import { Tittle } from "./components/Tittle.jsx";
import { getAllContacts } from "./services/contacts/getAllContacts.js";
import { createContact } from "./services/contacts/createContact.js";
import { deleteContact } from "./services/contacts/deleteContact.js";
import { updateContact } from "./services/contacts/updateContact.js";

const App = () => {
  const [newName, setNewName] = useState("");
  const [phone, setPhone] = useState("");
  const [filter, setFilter] = useState("");
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    getAllContacts().then((contacts) => {
      setPersons(contacts);
    });
  }, []);

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
    const msg = `${newName} is already in the phonebook,replace the old number with the new one you typed ?`;
    const newContact = {
      name: newName,
      number: phone,
    };
    const includedNames = persons.map((p) => p.name.toLowerCase());
    if (newName && phone) {
      if (includedNames.includes(newName.toLowerCase())) {
        const changedPerson = persons.find((p) => p.name === newName);
        const update = window.confirm(msg);
        const changedContact = { ...changedPerson, number: phone };
        update &&
          updateContact(changedContact).then(() => {
            getAllContacts().then((contacts) => {
              setPersons(contacts);
            });
            setNewName("");
            setPhone("");
          });
      } else {
        createContact(newContact).then((contact) => {
          setPersons([...persons, contact]);
          setNewName("");
          setPhone("");
        });
      }
    } else {
      alert("Neither name or phone can be empty");
    }
  };

  const handleDelete = (event) => {
    const id = event.target.id;
    const name = event.target.name;
    const message = `Are you sure about deleting ${name} from your contacts ?`;
    const result = window.confirm(message);

    result &&
      deleteContact(id).then(() => {
        getAllContacts().then((contacts) => {
          setPersons(contacts);
        });
        setNewName("");
        setPhone("");
      });
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
        <Contacts
          persons={persons}
          filter={filter}
          handleDelete={(event) => handleDelete(event)}
        />
      </div>
    </div>
  );
};

export default App;
