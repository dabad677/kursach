import React, {Component} from "react";
import styled from "styled-components";
import MapComponent from "./MapComponent";



export default class Contacts extends Component{
    render() {
        return(
            <Container>
                <TextWrapper>
                    <Title>ЗВ'ЯЖІТЬСЯ З НАМИ</Title>
                    <SmallTitle>Наші номера телефонів</SmallTitle>
                    <Text href="tel:88005553535">8 800 555 35 35</Text>
                    <br/>
                    <Text href="tel:0800219393">0 800 219 393</Text>
                    <br/>
                    <Text href="tel:+380632345192">063 234 51 92</Text>
                    <br/>
                    <SmallTitle>Наші електронні поштові скриньки</SmallTitle>
                    <Text href="mailto:boom441k@gmail.com">boom441k@gmail.com</Text>
                    <br/>
                    <Text href="mailto:somerandommail@mail.com">somerandommail@mail.com</Text>
                    <br/>
                </TextWrapper>
                <MapWrapper>
                    <MapComponent/>
                </MapWrapper>
            </Container>
        )
    }
}

const Container = styled.div`
    box-shadow: 0 1px 4px 1px black;
    display: grid;
    position: relative;
    z-index: 10;
    font-size: 1em;
   
    @media screen and (min-width: 1281px){
        grid-gap: 10px;
        grid-template: 
          ". n n n l l ." minmax(0, max-content)
          ". n n n l l ." minmax(0, max-content)
          ". n n n l l ." minmax(0, max-content)
          ". . . . . . ." 10px / 1fr 160px 200px 200px 200px 250px 1fr;
    }
    
    @media screen and (min-width: 769px) and (max-width: 1280px){
        font-size: 0.8em;
    
        grid-gap: 10px;
        grid-template: 
          ". n n l l ." 10px
          ". n n l l ." minmax(0, max-content)
          ". n n l l ." minmax(0, max-content)
          ". . . . . ." 10px / 1fr 259px 250px 260px 1fr;
    }
    
    @media screen and (max-width: 768px){
        grid-template: 
          "n . l" minmax(0, max-content) / 160px 1fr 40px;
    }
`;

const TextWrapper = styled.div`
    margin: 20px;
     grid-area: n;
`;
const MapWrapper = styled.div`
     grid-area: l;
`;
const Title = styled.div`
    margin: 20px;
    font-weight: bolder;
    font-size: 1.2rem;
`;
const SmallTitle = styled.div`
    margin:20px;
    font-weight: bolder;
    font-size: 1rem;
`;
const Text = styled.a`
    margin:20px 20px 40px 20px;
    font-size: 0.8rem;
    color:black;
    text-decoration: none;
`;