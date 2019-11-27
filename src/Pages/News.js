import React, {Component} from "react";
import styled from "styled-components";
import AllNews from "./Main/AllNews";

export default class NotFoundPage extends Component{
    render() {
        return(
            <Container>
                <AllNewsWrapper>
                    <AllNews/>
                </AllNewsWrapper>
            </Container>
        )
    }
}

const Container = styled.div`
    position: relative;
    display: grid;
    grid-gap: 20px;
    z-index: 0;
    
    @media screen and (min-width: 1281px){
        grid-template: 
          ". n n ." minmax(min-content, max-content)
          ". n n ." minmax(min-content, max-content)
          ". n n ." minmax(500px, max-content) / 1fr 900px 380px 1fr;
    }
    
    @media screen and (min-width: 769px) and (max-width: 1280px){
        grid-template: 
           ". n n ." minmax(min-content, max-content)
          ". n n ." minmax(min-content, max-content)
          ". n n ." minmax(500px, max-content) / 1fr 500px 268px 1fr;
    }
    
    @media screen and (max-width: 768px){
        grid-template: 
          "." minmax(min-content, max-content)
          "n" minmax(min-content, max-content)
          "." minmax(300px, max-content) / 1fr;
    }
`;
    const AllNewsWrapper = styled.div`
    margin: 20px;
    grid-area: n;
`;