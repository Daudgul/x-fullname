import "./App.css";

import React, { useState } from "react";
function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFullName([
      ...fullName,
      {
        full: `${firstName} ${lastName}`,
      },
    ]);
    setFirstName("");
    setLastName("");
  };

  return (
    <div className="App">
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            value={firstName}
            required="True"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            value={lastName}
            required="True"
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      {fullName &&
        fullName.map((item, index) => (
          <p key={index}>Full Name: {item.full}</p>
        ))}
    </div>
  );
}

export default App;
