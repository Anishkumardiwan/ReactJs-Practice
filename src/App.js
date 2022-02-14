import {React , Component , useState} from 'react';
import logo from './logo.svg';
import './App.css';
import User from './Component/User';

class App extends Component{

  constructor(){
    super();
    this.state = {
      name : "Anish"
    }
    console.log("Constructor");
  }

  componentDidMount(){
    console.log("Component Did Mount");
  }

  render(){
    console.log("Render");
    return(
      <div className='App'>
        <h1>Hello {this.state.data}</h1>
        <User name={this.state.name} />
        <button onClick={()=>this.setState({name:"Rohit"})}>Update Name</button>
      </div>
    );
  }
}

export default App;
