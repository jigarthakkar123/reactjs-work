import './App.css';
import React,{ Component } from "react";
import Person from './Components/Person/Person';
import Demo from "./Components/Demo";
import Form from './Components/Form';

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
    this.toggleHandler=this.toggleHandler.bind(this);
  }

  buttonClickHandler=()=>{
    console.log(this.state);
  }
  toggleHandler(){
    this.setState({ isShow : !this.state.isShow });
  }
  removeHandler=(personIndex)=>{
    const personsCopy=this.state.persons;
    personsCopy.splice(personIndex,1);
    this.setState({persons:personsCopy});
  }
  render(){
    let persons;
    if(this.state.isShow){
      persons=this.state.persons.map((p,index)=>{
      return <Person key={index} name={p.name} age={p.age} remove={()=>this.removeHandler(index)}/>;
    });
    }else{
      persons="";
    }
    
    return (
    <div className="App">
      {/* <button onClick={this.toggleHandler}>Toggle</button>
      {persons } */}
      <Form />
    </div>
    );
  }
}

export default App;
