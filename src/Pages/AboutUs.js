import React, {Component} from 'react'
import styled from "styled-components";

import Img11 from "../../public/imgs/Photo4.jpg"
import Img22 from "../../public/imgs/Photo5.jpg"

class AboutUs extends Component{

    render() {

        return(
            <Container>
                <TextWrapper>
                    <SmallTitle>Про нас</SmallTitle>
                    Рибальство в Україні було відоме віддавна. Це підтверджують археологічні знахідки — глиняні та кам'яні грузила для риболовних сітей, різноманітні гачки тощо, які належать до черняхівської культури (II—V ст.) та наступних епох (VI—IX ст.). Поширенню рибальства сприяла велика кількість річок та інших водоймищ, а також прадавня традиція використання риби у харчуванні.
                    У період феодалізму вилов риби належав до панщизняних повинностей кріпаків. Крім того, у деяких районах України селяни зобов'язані були поставляти своїм поміщикам прядиво для риболовних снастей, підводи для транспортування риби.
                    Джерела свідчать, що вже у XVI ст. в Україні статутом регламентувалися терміни риболовлі, зазначалися види снастей, якими можна було виловлювати рибу.
                    Рибальство — це переважно додаткове заняття, яке було доступне у будь-яку пору року людям різного віку, не вимагало складних знарядь праці та ін. Вільною ловлею риби користувалися, насамперед, привілейовані класи та дрібні підприємці, а також чиновники, які це право купували. Селяни рибу для власних потреб ловили потай, у вільний від сільськогосподарських робіт час. Малі хлопці й підлітки мали дещо більшу свободу щодо вилову риби.
                </TextWrapper>
                <ImagesWrapper>
                    <Img1 src={Img11}/>
                    <Img2 src={Img22}/>
                </ImagesWrapper>
            </Container>
        )
    }
}



export default AboutUs;

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
          "n" minmax(0, max-content) / 300px;
    }
`;

const TextWrapper = styled.div`
    grid-area: n;
    font-size: 1rem;
`;
const ImagesWrapper = styled.div`
    grid-area: l;
    margin-top: 60px;
    display: grid;
    position: relative;
    z-index: 10;
    font-size: 1em;
   
    @media screen and (min-width: 1281px){
        grid-gap: 10px;
        grid-template: 
          "c c c c" minmax(min-content, max-content)
          "c c c c" minmax(min-content, max-content)
          ". . . ." minmax(min-content, max-content)
          "q q q q" minmax(min-content, max-content)
          "q q q q" 10px / 1fr 160px 200px 200px 200px 250px 1fr;
    }
    @media screen and (min-width: 769px) and (max-width: 1280px){
        grid-template: 
          ". c c ." minmax(min-content, max-content)
          ". . . ." minmax(min-content, max-content)
          ". q q ." minmax(500px, max-content) / 1fr 500px 268px 1fr;
    }
    
    @media screen and (max-width: 768px){
        grid-template: 
          "c" minmax(min-content, max-content)
          "." minmax(min-content, max-content)
          "q" minmax(300px, max-content) / 1fr;
    }
`;
const Img1 = styled.img`
  grid-area: c;
  @media screen and (max-width: 768px){
         width: 300px;
    }
`;
const Img2 = styled.img`
  grid-area: q;
  @media screen and (max-width: 768px){
       width: 300px;
    }
`;
const SmallTitle = styled.div`
    margin:20px;
    font-weight: bolder;
    font-size: 1.2rem;
`;
