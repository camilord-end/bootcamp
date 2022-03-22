export const Contacts = ({ persons, filter, handleDelete }) => {
  return (
    <div className="contacts-container">
      {persons
        .filter((person) => {
          if (person.name.toLowerCase().includes(filter.toLowerCase()))
            return true;
        })
        .map((person) => {
          return (
            <p key={person.name}>
              {person.name + "  "}
              <span className="phone-span">{person.number}</span>{" "}
              <button id={person.id} name={person.name} onClick={handleDelete}>
                remove
              </button>
            </p>
          );
        })}
    </div>
  );
};
