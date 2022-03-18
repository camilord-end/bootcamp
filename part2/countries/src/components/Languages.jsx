export const Languages = ({ languages }) => {
  const langArray = Object.entries(languages);
  //console.log(langArray);
  return (
    <div className="languages-container">
      <p>Languages: </p>
      <ul>
        {langArray.map((lang) => {
          //console.log(lang);
          return <li key={lang[1]}>{lang[1]}</li>;
        })}
      </ul>
    </div>
  );
};
