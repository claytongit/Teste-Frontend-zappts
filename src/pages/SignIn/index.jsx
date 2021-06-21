import React from 'react';

import { Signin, ContainerSlider, SliderDiv, Form, TextForm } from './styles';

import Slider from '../../components/Slider';
import Login from '../../components/Login';

export default function SignIn(){
    return(
        <Signin>
            <ContainerSlider>
                <SliderDiv>
                    <Slider />
                </SliderDiv>
            </ContainerSlider>
            <Form>
                <TextForm>Invision</TextForm>
                <Login />
            </Form>
        </Signin>
    );
}