import React from 'react';
import {Container, Image} from  'react-bootstrap';
// import SmiteBackground from '/Users/kellypowers/coding/react/smite-app/smite-app-front/src/images/SmiteBackground.png'


// // let backg = <Image src={SmiteBackground} fluid></Image>

// let sectionStyle = {
//     backgroundImage: `url(${SmiteBackground})`,
//     backgroundPosition:'center', 
//     backgroundRepeat: 'no-repeat',
//     backgroundSize: 'cover' 
    
// }

export const Layout = (props) => (
    <Container>
        {props.children}
    </Container>
)