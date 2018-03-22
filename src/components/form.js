import React, { Component } from 'react';

class Form extends Component {
    constructor(props){
        super(props);

        this.state = {
            form:  {
                email: '',
                password: ''
            }
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleInputChange(event){
        const {name,value} = event.target;
        console.log('Target: ', event.target);
        console.log('Name: ', event.target.name);
        console.log('Value: ', event.target.value);

        this.setState({
            form: {
                ...this.state.form, 
                [name]: value
            }
        });
    }

    handleFormSubmit(event){
        event.preventDefault();
        console.log('Submitting Form!', this.state);
    }

    render(){

        const formStyle ={
            fontSize: '24px'
        }

        const {email, password} = this.state.form;

        return (
            <form onSubmit={this.handleFormSubmit}>
                <div>
                    <label>Email</label>
                    <br/>
                    <input name="email" style={formStyle} type="text" value={email} onChange={this.handleInputChange}/>
                </div>
                <div>
                    <label>Password</label>
                    <br/>
                    <input name="password" style={formStyle} type="text" value={password} onChange={this.handleInputChange}/>
                </div>
                <button>Login</button>
            </form>    
        )
    }
}

export default Form;