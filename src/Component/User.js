import React, {Component , useState , useEffect , useRef} from 'react';
import Student from './Student';
class User extends Component{
  constructor(props){
    super();
  }

  render(){
    return(
      <>
      <h1>User {this.props.name}</h1>
      <Student />
      </>
    );
  }
}

export default User;
