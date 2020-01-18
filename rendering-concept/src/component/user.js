import React ,{Component} from 'react';

class User extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <React.Fragment>
                <h1>Welcome {this.props.name}</h1>
                <button onClick={this.props.GuestData}>Log Out</button>
            </React.Fragment>
        )
    }
};
export default User;