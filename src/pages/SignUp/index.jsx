import React from 'react';

import { SignUpContainer, ContainerSlider, SliderDiv, Form, TextForm } from './styled';

import Slider from '../../components/Slider';
import Register from '../../components/Register';

export default function SignUp(){
    return(
        <SignUpContainer>
            <ContainerSlider>
                <SliderDiv>
                    <Slider />
                </SliderDiv>
            </ContainerSlider>
            <Form>
                <TextForm>Invision</TextForm>
                <Register />
            </Form>
        </SignUpContainer>
    );
}