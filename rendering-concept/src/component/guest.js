import React,{Component} from 'react';

class Guest extends Component{
    constructor(props){
        super(props);
    }
    // userData=()=>{
    //     alert() 
    //     this.props.userData()
    // }
    render(){
        console.log("++_", this.props.name)
        return(
            <React.Fragment>
                <h1>Welcome Guest</h1>
                {this.props.name}
                <button onClick={ this.props.userData}>Loggg in</button>
                <button>Sign Up</button>
            </React.Fragment>
        )
    }
}
export default Guest;
