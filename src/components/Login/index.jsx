import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { ContainerLogin, Form, Forgot, ButtonSignIn, Or, ButtonGoogle, LinkCreate, Input } from './style';

import { ValidationEmail, ValidationPass } from '../../utils/inputValidtion';

import users from '../../user.json';

export default function Login(){

    const [ inputValidationEmail, setInputValidationEmail ] = useState(false);
    const [ inputErroEmail, setInputErroEmail ] = useState('');

    const [ inputValidationPass, setInputValidationPass ] = useState(false);
    const [ inputErroPass, setInputErroPass ] = useState('');

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const history = useHistory();

    function handleSubmit(event){
        event.preventDefault();

        ValidationEmail(email, setInputValidationEmail, setInputErroEmail);
        ValidationPass(password, setInputValidationPass, setInputErroPass);

        if(email !== users[0].user){
            alert('Usuario invalido!');
        }else if(password !== users[0].password){
            alert('Senha invalida!');
    
        }else{
            console.log('validado');
            const token = users[0].token;

            localStorage.setItem('token', token);

            history.push('/home');
        }
    }

    return(
        <ContainerLogin>

            <h2>Welcome to Invision</h2>

            <Form onSubmit={ handleSubmit }>
                <label htmlFor="email">Users name or Email <span>{inputErroEmail}</span></label>     

                {
                    inputValidationEmail ?
                    <Input 
                        validation
                        type="text" 
                        name="email" 
                        id="email" 
                        value={ email }
                        onChange={ event => setEmail(event.target.value) }
                    />
                    :
                    <Input 
                        type="text" 
                        name="email" 
                        id="email" 
                        value={ email }
                        onChange={ event => setEmail(event.target.value) }
                    />
                }

                <label htmlFor="password">Password <span>{inputErroPass}</span></label>
                
                {
                    inputValidationPass ?
                    <Input
                        validation
                        type="password" 
                        name="password" 
                        id="password" 
                        placeholder="Max. 8 caracteres"
                        value={ password }
                        onChange={ event => setPassword(event.target.value) }
                    />
                    :
                    <Input
                        type="password" 
                        name="password" 
                        id="password" 
                        placeholder="Max. 8 caracteres"
                        value={ password }
                        onChange={ event => setPassword(event.target.value) }
                    />
                }

                <Forgot href="/#">Forgot password?</Forgot>

                <ButtonSignIn type="submit">Sign in</ButtonSignIn>

                <Or>
                    <hr /><span>Or</span><hr />
                </Or>

                <ButtonGoogle href="https://accounts.google.com/" target="_blank" rel="noopener noreferrer">
                    <img src="../../assets/gLogo.png" alt="Imagem ilustrativa" />
                    <p>Sign in with Google</p>
                </ButtonGoogle>

                <LinkCreate>New <b>Invision?</b> <Link to="/signup" >Create Account</Link></LinkCreate>

            </Form>

        </ContainerLogin>
    );
}