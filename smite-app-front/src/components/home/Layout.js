import React from 'react';
import {Container, Image} from  'react-bootstrap';


export const Layout = (props) => (
    <Container>
        {props.children}
    </Container>
)