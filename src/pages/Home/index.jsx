import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './style';

export default function Home(){

    function logOut(){
        localStorage.removeItem('token');
    }

    return(
        <Container>
            <h1>Page Home</h1>
            <Link to="/" onClick={logOut} >Sair</Link>
        </Container>
    );
}