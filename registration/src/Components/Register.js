import React from 'react';

function Register(props){
	return(
		<div className="container card p-3 mt-2 register-container">
			<h1 className="text-center">Registration Form</h1>
			<form onSubmit={props.submit}>
				<div>
					<label htmlFor="name">Name</label>
					<input type="text" name="name" className="form-control"></input>
				</div>
				<div>
					<label htmlFor="email">Email</label>
					<input type="text" name="email" className="form-control"></input>
				</div>
				<div>
					<label htmlFor="password">Password</label>
					<input type="password" name="password" className="form-control"></input>
				</div>
				<button type="submit" className="btn btn-primary">Register</button>
			</form>
		</div>
	);
}

export default Register;