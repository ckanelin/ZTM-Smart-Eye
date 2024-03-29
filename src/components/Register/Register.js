import React, {Component} from 'react';

class Register extends Component{

	constructor(props){
		super(props);
		this.state = {
			name: '',
			email:'',
			password: ''
		}
	}

	onChangeName = (event) =>{
		this.setState({name: event.target.value});
	}

	onChangeEmail = (event) =>{
		this.setState({email: event.target.value});
	}

	onChangePassword = (event) =>{
		this.setState({password: event.target.value});
	}

	onSubmit = () =>{
		fetch('https://tranquil-reaches-15265.herokuapp.com/register',{
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				name: this.state.name,
				email: this.state.email,
				password: this.state.password
			})
		})
		.then(response => response.json())
		.then(user => {
			if(user.id){
				this.props.onUpdateUser(user);
				this.props.onChangeRoute('home');
			}
		});

		
	}

	render(){

		return(
			<article className="br2 ba dark-gray b--black-10 mv4 w-100 w-60-m w-40-l  center">
				<main className="pa4 black-80 shadow-5">
				  <div className="measure center">
				    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
				      <legend className="f3 fw6 ph0 mh0">Register</legend>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
				        <input 
				        	onChange = {this.onChangeName}
				        	className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				        	type="name" 
				        	name="name"  
				        	id="name"
			        	/>
				      </div>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
				        <input 
				        	onChange = {this.onChangeEmail}
				        	className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				        	type="email" 
				        	name="email-address"  
				        	id="email-address"
			        	/>
				      </div>
				      <div className="mv3">
				        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
				        <input 
				        	onChange = {this.onChangePassword}
				        	className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				        	type="password" 
				        	name="password"  
				        	id="password"
			        	/>
				      </div>
				    </fieldset>
				    <div className="">
				      <input 
				      	onClick={this.onSubmit}
				      	className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
				      	type="submit" 
				      	value="Register"/>
				    </div>
				  </div>
				</main>
			</article>
		);
	}
}

export default Register;