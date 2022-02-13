import React from 'react';

class User extends React.Component{
    constructor(props){
        super();
    }

    render(){
        return(
            <div>
                <h2>Welcome to {this.props.name} Kumar</h2>
            </div>
        );
    }
}

export default User;