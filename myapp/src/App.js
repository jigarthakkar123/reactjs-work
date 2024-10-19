import './App.css';
import React,{ Component } from "react";
import Person from './Components/Person/Person';
import Demo from "./Components/Demo";

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      persons:[
        {
          name:"Jigar",
          age:"42",
        },
        {
          name:"Rahul",
          age:"38",
        },
        {
          name:"Sunil",
          age:"28",
        },
      ],
      isShow:true,
    };
  }

  buttonClickHandler=()=>{
    console.log(this.state);
  }
  toggleHandler(){
    this.setState({ isShow : !this.state.isShow });
  }
  render(){
    let persons;
    persons=this.state.persons.map((p,index)=>{
      return <Person key={index} name={p.name} age={p.age} />;
    });
    return (
    <div className="App">
      <button onClick={this.toggleHandler}>Toggle</button>
      {this.state.isShow === true ? persons : ""}
    </div>
    );
  }
}

export default App;
