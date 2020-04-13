import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../helpers/auth';

export default class SignUp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			email: '',
			passord: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};
	handleSubmit = async event => {
		event.preventDefault();
		this.setState({ error: '' });
		try {
			await signup(this.state.email, this.state.password);
		} catch (error) {
			this.setState({ error: error.message });
		}
	};
	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<h1>
						Sign Up to <Link to='/'>Chatty</Link>
					</h1>
					<p>Fill in the form below to create an account</p>
					<div>
						<input
							type='email'
							placeholder='Email'
							name='email'
							onChange={this.handleChange}
							value={this.state.email}
						/>
					</div>
					<div>
						<input
							type='password'
							placeholder='Passward'
							name='password'
							onChange={this.handleChange}
							value={this.state.password}
						/>
					</div>
					<div>
						{this.state.error ? <p>{this.state.error}</p> : null}
						<button type='submit'>Sign Up</button>
					</div>
					<hr />
					<p>
						Already have an account ?{' '}
						<Link to='/login'>Log In</Link>
					</p>
				</form>
			</div>
		);
	}
}
