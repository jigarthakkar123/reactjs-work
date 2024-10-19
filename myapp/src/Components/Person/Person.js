import react,{Component} from 'react';
import Man from '../Man';
import './Person.css';

class Person extends Component{
	constructor(props){
		super(props);
		this.props=props;
		this.state={
			name:"Jigar",
			age:"42"
		};
	}
	onChangeHandler(){
		this.setState({name:"Rahul",age:"40"})
	}
	render(){
		return(
			<div className="PersonBox">
				<h1>
					<label className="PersonLabel">Name</label> : {" "}
					<i>{this.props.name}</i>
					<br/>
					<label className="PersonLabel">Age</label> :
					<i>{this.props.age}</i>
				</h1>
			</div>
		);
	}
}

export default Person;