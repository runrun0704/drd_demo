import React from 'react';


class ContactForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            password:'',
            hasNameError:false,
            hasPasswordError:false
        }
    }
    handleNameChange(event){
        const inputValueName = event.target.value;
        const isEmptyName = inputValueName==='';
        this.setState({
            name:inputValueName,
            hasNameError:isEmptyName
        })
    }

    handlePasswordChange(event){
        const inputValuePassword = event.target.value;
        const isEmptyPassword = inputValuePassword==='';
        this.setState({
            password:inputValuePassword,
            hasPasswordError:isEmptyPassword
        })
    }

    render(){
        let nameErrorText;
        if (this.state.hasNameError){
            nameErrorText=(
                <p>入力してください</p>
            )
        }
        let passwordErrorText;
        if (this.state.hasPasswordError){
            passwordErrorText=(
                <p>入力してください</p>
            )
        }
        return(
            <div>
                {nameErrorText}
                <input 
                    value={this.state.name} 
                    onChange={(event)=>{this.handleNameChange(event)}}
                />
                {passwordErrorText}
                <input 
                    value={this.state.password}
                    onChange={(event)=>{this.handlePasswordChange(event)}}
                />
            </div>
        );
    }
}

export default ContactForm;