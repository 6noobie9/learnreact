import { useState } from "react";

function App() {

  const [name, setName] = useState("Zaid");

  const handleChange = (e) => {
    setName(e.target.value)
  }

  return (
    <div>
      <input type="text" placeholder="Enter your name" onChange={handleChange}/>
      <p>Hi {name}, How are you today?</p>
    </div>
  );
}

export default App;
