import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [nameClicked, setNameClicked] = useState("");

  function handleChange(event) {
    setName(event.target.value);
  }
  function handleClick() {
    setNameClicked(name);

    event.preventDefault();
  }
  return (
    <div className="container">
      <h1>Hello {nameClicked}</h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          name={name}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
