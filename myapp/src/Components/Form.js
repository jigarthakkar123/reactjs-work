import React,{ Component } from 'react';

class Form extends Component{
	constructor(props){
		super(props);
		this.state={
			name:null,
			country:null,
		};
	}
	
	submitHandler=(event)=>{
		event.preventDefault();
		const name=event.target.name.value;
		const country=event.target.country.value;
		this.setState({ name,country },()=>{
			console.log(this.state);
			event.target.name.value="";
			event.target.country.value="";
		});
	}

	render(){
		return( 
			<div>
				<form onSubmit={this.submitHandler}>
					<div>
						<label htmlFor="">Name:</label>
						<input type="text" name="name" />
					</div>
					<div>
						<label htmlFor="">Country:</label>
						<select name="country">
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
						</select>
					</div>
					<button type="submit">SUBMIT</button>
				</form>
			</div>
		);
	}
}
export default Form;