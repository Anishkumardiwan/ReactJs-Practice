import React from 'react';
import {MyContext} from '../App';
class Student extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <h3>Student Component</h3>
                <MyContext.Consumer>
                    {data => <h4>{data}</h4>}
                </MyContext.Consumer>
            </>
        );
    }
}

export default Student;