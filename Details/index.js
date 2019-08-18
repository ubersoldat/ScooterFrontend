import React, {Component} from 'react';
import {
    Container, 
    Typetitle, 
    TypeDescription, 
    TypeImage, 
    RequestButton,
    RequestButtonText
} from './styles';

import patinete2 from '../assets/images/patinete2.png';

export default class Details extends React.Component{
    render(){
        return<Container>
            <Typetitle>Popular</Typetitle>
            <TypeDescription>viajes gratis dia a dia</TypeDescription>

            <TypeImage source={patinete2}/>
            <Typetitle>Scooter Basico</Typetitle>
            <TypeDescription>R$6,00</TypeDescription>

            <RequestButton onPress={() => {}}>
                <RequestButtonText>Confirmar detalles</RequestButtonText>
            </RequestButton>
        </Container>;
    }
}
