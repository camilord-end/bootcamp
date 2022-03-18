export const Contacts = ({ persons, filter }) => {
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
              {person.name + " - "}
              <span className="phone-span">{person.phone}</span>
            </p>
          );
        })}
    </div>
  );
};
