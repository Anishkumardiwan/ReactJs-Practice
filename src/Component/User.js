import React from 'react';

class User extends React.Component{
    constructor(props){
        super();
    }

    componentWillUnmount(){
        console.log("Component Will Unmount");
    }

    render(){
        return(
            <div>
                <h2>Welcome to Our Site Anish Kumar</h2>
            </div>
        );
    }
}

export default User;