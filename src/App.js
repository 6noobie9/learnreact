import { useState } from "react";

function App() {

  const [textBoxValue, setTextBoxValue] = useState("")
  const [name, setName] = useState("")

  const handleChange = (e) => {
    setTextBoxValue(e.target.value)
  }

  const handleClick = () => {
    setName(textBoxValue)
  }

  return (
    <div>
      <input type="text" value={textBoxValue} placeholder="Enter your name" onChange={handleChange}/>
      <p>Hi {name || 'User'}, How are you today?</p>
      <button onClick={handleClick}>Update</button>
    </div>
  );
}

export default App;
