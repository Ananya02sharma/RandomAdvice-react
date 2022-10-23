import React from "react";
import axios from 'axios'
import './App.css';

class App extends React.Component{
    //state contains all of the most important thing according to that specific component 
    //right know it is App 
    state = {advice :''}; // state change variable so we can access it globally
        componentDidMount(){
           this.fetchAdvice();
        }

        //it is a func inside the class so it is a method and it does nt require const
        fetchAdvice=()=>{
            axios.get('https://api.adviceslip.com/advice')//getting api Key
            .then((response)=>{
                const {advice} = response.data.slip; //giving response in the form of advice
                //adding state change to advice
               this.setState({advice :advice});//using advice
            }
            )
            .catch((error)=>{
                console.log(error)
            });
        }
    render(){
        const {advice} = this.state//accesing state here from the above
        return(
            <div className="app">
                <div className="card">
                <h1 >{advice}</h1>
               
                <button className="button" onClick={this.fetchAdvice}>
            <span>Give Me Advice!</span>
                </button>
                </div>
            </div>
            
            

        );
    }

}
{/* <div>
    {Weather}
</div> */}

export default App;