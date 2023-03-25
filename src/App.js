import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
function App() {
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(`https://test-api-v3.myways.ai/user?email=${email}`);
    try {
      let response = await axios.get(
        `https://test-api-v3.myways.ai/user?email=${email}`
      );
      alert("User Found");
    } catch (error) {
      let data = { email: email, phone: number, name: name };
      console.log(data);
      let res = await axios.post(`https://test-api-v3.myways.ai/user`, data);
      alert("User Created Successfully");
    }
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          required
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Email"
          required
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="Number"
          placeholder="Phone Number"
          required
          onChange={(e) => {
            setNumber(e.target.value);
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
