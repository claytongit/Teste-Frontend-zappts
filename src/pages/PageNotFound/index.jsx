import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './style';

export default function PageNotFound(){
    return(
        <Container>
            <h1>PageNotFound</h1>
            <Link to="/" >Voltar</Link>
        </Container>
    );
}