import React from 'react';
import User from './Component/User';
export const MyContext = React.createContext();
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Anish"
    };
  }

  render() {
    return (
      <MyContext.Provider value={this.state.name}>
        <User />
      </MyContext.Provider>
    );
  }
}

export default App;