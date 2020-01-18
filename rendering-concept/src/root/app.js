import React , {Component} from 'react';
import Guest from '../component/guest';
import User from '../component/user';

class App extends Component{
    state={
        isSelected:false
    }

    userData =()=>{
        this.setState({
            isSelected:true
        })
    }

    GuestData =()=>{
        this.setState({
            isSelected:false
        })
    }
    render (){
       const {isSelected} =this.state;
    //    if(isSelected){
    //     return <User name={"Shilpi"} GuestData={this.GuestData}/>
    //    }
    //    else{
    //      return  <Guest userData={this.userData}/>
    //    }
        return(
            <React.Fragment>
                {/* {
                    isSelected ? 
                    <User name={"Shilpi"} GuestData={this.GuestData}/> :
                    
                    <Guest userData={this.userData}/>
                } */}


                {
                    (()=>{
                        if(isSelected){
                            return <User name={"Shilpi"} GuestData={this.GuestData}/>
                           }
                           else{
                             return  <Guest userData={this.userData}/>
                           }
                    })()
                }
            </React.Fragment>
        )
    }
};
export default App;
