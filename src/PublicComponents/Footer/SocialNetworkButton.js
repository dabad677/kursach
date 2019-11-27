import React, { Component } from "react";
import styled from "styled-components";


const Container = styled.div`
    background: transparent;
    color: #ffffff;
    border: 2px solid ${props => props.color};
    width: 50px;
    height: 50px;
    display: inline-block;
    border-radius: 50%;
    text-align: center;
    font-size: 24px;
    line-height: 50px;
    transition: all .3s ease;
    :hover{
      ${props => {
    switch (props.type) {
        case 1: return "color: #fff; border-color: #e4405f;background: #e4405f;";
        case 2: return "color: #fff;border-color: #3e5b98;background: #3e5b98;";
        case 3: return "color: #fff;border-color: #0088cc;background: #0088cc;";
        case 4: return "color: #fff;border-color: #FF0000;background: #FF0000;";
    }
}};
    }
} 
`;


export default class SocialnetworkButton extends Component {

    render() {
        return (
            <Container color={this.props.color} type={this.props.type}>
                <span className={this.props.name}/>
            </Container>
        );
    }
}