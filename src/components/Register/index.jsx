import React,{ useState } from 'react';
import { Link } from 'react-router-dom';

import { ContainerRegister, Form, Input, ButtonSignIn, Or, ButtonGoogle, LinkCreate } from './style';

export default function Register(){

    const [ inputValidationName, setInputValidationName ] = useState('');

    const [ inputValidationUser, setInputValidationUser ] = useState('');

    const [ inputValidationPass, setInputValidationPass ] = useState('');

    const [ fullName, setFullName ] = useState('');
    const [ user, setUser ] = useState('');
    const [ password, setPassword ] = useState('');

    function handleSubmit(event){
        event.preventDefault();

        if(fullName === ""){
            setInputValidationName('Campo obrigatório*');
            return false;
        }

        if(user === ""){
            setInputValidationUser('Campo obrigatório*');
            return false;
        }

        if(password === ""){
            setInputValidationPass('Campo obrigatório*');
            return false;
        }

        if(password.length > 8){
            setInputValidationPass('Tamanho máximo de 8 caracteres*');
            return false;
        }

        setInputValidationName('');

        setInputValidationUser('');

        setInputValidationPass('');
    }

    return(
        <ContainerRegister>

            <h2>Getting Started</h2>

            <Form onSubmit={ handleSubmit }>

                <label htmlFor="fullName">Full Name <span className="textValidation" >{inputValidationName}</span></label>
                
                {
                    inputValidationName ?
                    <Input 
                        validation
                        type="text" 
                        name="fullName" 
                        id="fullName" 
                        value={ fullName }
                        onChange={ event => setFullName(event.target.value) }
                    />
                    :
                    <Input 
                        type="text" 
                        name="fullName" 
                        id="fullName" 
                        value={ fullName }
                        onChange={ event => setFullName(event.target.value) }
                    />
                }

                <label htmlFor="user">User name or Email <span className="textValidation" >{inputValidationUser}</span></label>
                
                {
                    inputValidationUser ?
                    <Input 
                        validation
                        type="text" 
                        name="user" 
                        id="user" 
                        value={ user }
                        onChange={ event => setUser(event.target.value) }
                    />
                    :
                    <Input 
                        type="text" 
                        name="user" 
                        id="user" 
                        value={ user }
                        onChange={ event => setUser(event.target.value) }
                    />
                }

                <label htmlFor="password">Create Password <span className="textValidation" >{inputValidationPass}</span></label>
                
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

                <ButtonSignIn type="submit">Sign up</ButtonSignIn>

                <Or>
                    <hr /><span>Or</span><hr />
                </Or>

                <ButtonGoogle href="https://accounts.google.com/" target="_blank" rel="noopener noreferrer" >
                    <img src="../../assets/gLogo.png" alt="Imagem ilustrativa" />
                    <p>Sign in with Google</p>
                </ButtonGoogle>

                <LinkCreate>By sirgning up, you agree to <b>Invision?</b></LinkCreate>
                <LinkCreate><a href="https://xd.adobe.com/view/733508c5-4bfb-4dee-62c1-b3188a9bba84-0504/" >Terms of Conditions</a>ond<a href="https://xd.adobe.com/view/733508c5-4bfb-4dee-62c1-b3188a9bba84-0504/" >Privacy Policy</a></LinkCreate>
                <LinkCreate style={{marginTop: "30px"}} >Already on <b>Invision?</b><Link to="/" >Log in</Link></LinkCreate>

            </Form>

        </ContainerRegister>
    );
}