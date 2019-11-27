import React, {Component} from 'react'
import styled from 'styled-components'
import footer from '../../../public/imgs/footer.png';
import SocialnetworkButton from "./SocialNetworkButton";

export default class Footer extends Component{
    render() {
        return(
            <Container>
                <TextWrapper>
                    Приєднуйтесь до нас у соціальних мережах:
                </TextWrapper>
                <LinksWrapper>
                    <a href={"https://www.instagram.com/explore/tags/%D1%80%D1%8B%D0%B1%D0%B0%D0%BB%D0%BA%D0%B0/"}><SocialnetworkButton type={1} name={"socicon-instagram"}/></a>
                    <a href={"https://www.facebook.com/rubalka.in.Ukraine/"}><SocialnetworkButton type={2} name={"socicon-facebook"}/></a>
                    <a href={"https://twitter.com/hashtag/%D1%80%D0%B8%D0%B1%D0%B0%D0%BB%D0%BA%D0%B0"}><SocialnetworkButton type={3} name={"socicon-twitter"}/></a>
                    <a href={"https://www.youtube.com/results?search_query=%D1%80%D0%B8%D0%B1%D0%B0%D0%BB%D0%BA%D0%B0"}><SocialnetworkButton type={4} name={"socicon-youtube"}/></a>
                </LinksWrapper>
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
          ". . . . ." minmax(min-content, max-content)
          ". . . . ." minmax(min-content, max-content)
          ". . . . ." minmax(min-content, max-content)
          ". . . . ." minmax(min-content, max-content)
          ". . . . ." minmax(min-content, max-content)
          ". . . . ." minmax(min-content, max-content)
          ". . . . ." minmax(min-content, max-content)
          ". . . . ." minmax(min-content, max-content)
          ". l l l ." minmax(min-content, max-content)
          ". n n . ." minmax(min-content, max-content)
          ". . . . ." minmax(500px, max-content) / 1fr 900px 380px 1fr;
    }
    
    @media screen and (min-width: 769px) and (max-width: 1280px){
        grid-template: 
          ". . . . ." minmax(min-content, max-content)
          ". . . . ." minmax(min-content, max-content)
          ". . . . ." minmax(min-content, max-content)
          ". . . . ." minmax(min-content, max-content)
          ". . . . ." minmax(min-content, max-content)
          ". . . . ." minmax(min-content, max-content)
          ". . . . ." minmax(min-content, max-content)
          ". . . . ." minmax(min-content, max-content)
          ". l l l ." minmax(min-content, max-content)
          ". n n . ." minmax(min-content, max-content)
          ". . . . ." minmax(500px, max-content) / 1fr 500px 268px 1fr;
    }
    
    @media screen and (max-width: 768px){
    background-image: none;
        height: auto;
        display: block;
    }



    background-color: #000000;
    background-image: url(${footer});
    background-position: bottom right;
    background-repeat: no-repeat;
    height: 300px;
`;
const LinksWrapper = styled.div`
    > *{
        margin-left: 5px;
    }
    grid-area: n;
    @media screen and (max-width: 768px){
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    }
`;
const TextWrapper = styled.div`
    grid-area: l;
    width:fit-content;
    font-size: 1rem;
    font-weight: bolder;
    color:#ffffff;
    @media screen and (max-width: 768px){
    text-align: center;
    grid-area: unset;
    font-size: .9rem;
    }
`;