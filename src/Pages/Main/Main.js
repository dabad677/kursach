import React, {Component} from 'react';
import styled from "styled-components";

import {Carousel} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";
import Photo1 from "../../../public/imgs/Photo1.png";
import Photo2 from "../../../public/imgs/Photo2.png";
import Photo3 from "../../../public/imgs/Photo3.png";
import Photo111 from "../../../public/imgs/Photo111.png";
import Photo112 from "../../../public/imgs/Photo112.png";
import AllNews from "./AllNews";

class Main extends Component{
    componentDidMount() {
    }

    render() {
        return(
            <Container>
                <NewsSliderWrapper>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className={"d-block w-100"}
                                src={Photo1}/>
                            <Carousel.Caption>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className={"d-block w-100"}
                                src={Photo2}/>
                            <Carousel.Caption>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className={"d-block w-100"}
                                src={Photo3}/>
                            <Carousel.Caption>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                        <img
                            className={"d-block w-100"}
                            src={Photo111}/>
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                        className={"d-block w-100"}
                        src={Photo112}/>
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>

                    </Carousel>
                </NewsSliderWrapper>


                <AllNewsWrapper>
                    <AllNews/>
                </AllNewsWrapper>
            </Container>
        )
    }
}


export default (Main);

const Container = styled.div`
    position: relative;
    display: grid;
    grid-gap: 20px;
    z-index: 0;
    
    @media screen and (min-width: 1281px){
        grid-template: 
          ". s s ." minmax(min-content, max-content)
          ". n n ." minmax(min-content, max-content)
          ". n n ." minmax(500px, max-content) / 1fr 900px 380px 1fr;
    }
    
    @media screen and (min-width: 769px) and (max-width: 1280px){
        grid-template: 
          ". s s ." minmax(min-content, max-content)
          ". n n ." minmax(min-content, max-content)
          ". n n ." minmax(500px, max-content) / 1fr 500px 268px 1fr;
    }
    
    @media screen and (max-width: 768px){
        grid-template: 
          "s" minmax(min-content, max-content)
          "n" minmax(min-content, max-content)
          "n" minmax(300px, max-content) / 1fr;
    }
`;

const NewsSliderWrapper = styled.div`
    box-shadow: 2px 2px 5px 2px black;
    grid-area: s;
`;

const AllNewsWrapper = styled.div`
    grid-area: n;
`;

const CustomCaption = styled.div`
    width: 100%;
    height: 50%;
    font-size: 1em;
    padding: 10px 10%;
    background: linear-gradient(90deg, rgba(0,0,0,0) 1%, rgba(0,0,0,0.30) 15%, rgba(0,0,0,0.75) 50%, rgba(0,0,0,0.30) 85%, rgba(0,0,0,0));     
    white-space: pre-wrap;   
    cursor: default;
`;