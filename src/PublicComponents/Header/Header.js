import React, {Component} from 'react'
import styled from "styled-components";
import NavBar from "./NavBar";
import {Link} from "react-router-dom";
import LogoImg from "../../../public/imgs/logo-patagonia.png"

class Header extends Component{
    constructor(props) {
        super(props);
        this.state = {
            navLinks: [{title:"Про нас",link:"/aboutus"},
                {title:"Галерея",link:"/gallery"},
                {title:"Новини",link:"/news"},
                {title:"Контакти",link:"/contacts"}]
        }
    }
    componentDidMount() {

    }

    render() {

        return(
            <Container>
                <Llink to={"/"}><img src={LogoImg}/></Llink>
                <NavMenuWrapper>
                    <NavBar navLinks={this.state.navLinks}/>
                </NavMenuWrapper>
            </Container>
        )
    }
}



export default Header;

const Container = styled.div`
    background: #093028;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #237A57, #093028);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #237A57, #093028); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    box-shadow: 0 1px 4px 1px black;
    display: grid;
    position: relative;
    z-index: 10;
    font-size: 1em;
   
    @media screen and (min-width: 1281px){
        grid-gap: 10px;
        grid-template: 
          ". l l . . . ." minmax(0, max-content)
          ". l l . . . ." minmax(0, max-content)
          ". l l n n . ." minmax(0, max-content)
          ". . . . . . ." 10px / 1fr 160px 200px 200px 200px 250px 1fr;
    }
    
    @media screen and (min-width: 769px) and (max-width: 1280px){
        font-size: 0.8em;
    
        grid-gap: 10px;
        grid-template: 
          ". . . . ." 10px
          "l l . . ." minmax(0, max-content)
          "l l n n n" minmax(0, max-content)
          ". . . . ." 10px / 1fr 259px 250px 260px 1fr;
    }
    
    @media screen and (max-width: 768px){
        max-width: 360px;
        grid-template: 
          "l . n" minmax(0, max-content) / 160px 100px 40px;
    }
`;

const NavMenuWrapper = styled.div`
    grid-area: n;
`;
const Llink = styled(Link)`
   grid-area: l;
`;
