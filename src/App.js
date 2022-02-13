import {React , useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [name, setName] = useState(null);
  const [tnc, setTnc] = useState(false);
  const [interest, setInterest] = useState(null);

  const getFormData = (event) => {
    console.log(name , interest , tnc);
    event.preventDefault(); //Hold Submit and Refresh
  }

  return (
    <div className="App">
      <h1>Handle Form in React</h1>
      <form action="" onSubmit={getFormData}>
        <input type="text" placeholder='Enter Name....' onChange={(e)=>setName(e.target.value)} /> <br /> <br />
        <select onChange={(e)=>setInterest(e.target.value)}>
          <option value="">Select Option</option>
          <option value="">Marvel</option>
          <option value="">DC</option>
        </select> <br /> <br />
        <input type="checkbox" onChange={(e)=>setTnc(e.target.checked)} /> <span>Accept Terms & Conditions</span> <br /> <br />
        <button type='submit'> Submit </button>
      </form>
    </div>
  );
}

export default App;
