import React, {Component} from 'react';
import styled from 'styled-components';
import BurgerImg from '../../../public/imgs/iconfinder_Menu_4473024.svg';
import {Link} from "react-router-dom";

export default class NavBar extends Component{
    constructor(props){
        super(props);

        this.state = {
            opened: false
        };

        this.toggleOpen = this.toggleOpen.bind(this);
    }

    toggleOpen(){
        this.setState({opened: !this.state.opened});
    }

    renderDropdowns(data){
        return data.map((el) => {
            return <NavDropdownTitle to={el.link} key={el.index}>{el.title}</NavDropdownTitle>
            }
        )
    }

    render() {
        return(
            <NavBarContainer id={"navbar"}>

                <NavBarToggle src={BurgerImg} onClick={this.toggleOpen}/>

                <NavBarDropdownWrapper opened={this.state.opened}>

                    {this.renderDropdowns(this.props.navLinks)}
                </NavBarDropdownWrapper>

            </NavBarContainer>
        )
    }
}

const NavBarContainer = styled.div`
    background-color: transparent; 
`;

const NavBarToggle = styled.img`
    display: none;
    cursor: pointer;
    
    @media screen and (max-width: 768px){
        display: inline-block;
        width: 100%;
        height: 100%;
    }
`;

const NavBarDropdownWrapper = styled.div`
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    position: ${props => props.active ? "relative" : "none"};
    
    @media screen and (max-width: 768px){
        display: ${props => props.opened ? "block" : "none"};
        position: absolute;
        top: 40px;
        left: 0;
        width: 100%;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        background-color: white;
    }
`;

const NavDropdownTitle = styled(Link)`
    padding: 5px;
    cursor: pointer;
    position: relative;
    font-weight: bolder;
    font-size: 1rem;
    color:black;
    text-decoration: none;
    transition: all .3s ease;
    :hover{
        box-shadow: inset 0px 0px 4px 1px black;
        color: black;
        text-decoration: none;
    }
`;
