import './App.css';
import Student from './Components/Student';
import { useState } from 'react';
function App() {
  const [name, setName] = useState("Harish")
  

  return (
    <div className="App">
      <Student data={name} />
      <button onClick={()=> setName("Sunil")}>Change Name</button>
    </div>
  );
}

export default App;