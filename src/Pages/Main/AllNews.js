import React, {Component} from "react";
import styled from "styled-components";


class AllNews extends Component{
    render() {
        return (
            <Container>
                <ContainerTitle>Усі новини</ContainerTitle>

                <NewsRowsContainer>
                    <DateDelimiter>{22}.{11}.{2019}</DateDelimiter>

                    <NewsRow>
                        <NewsRowDate>{"07"}:{"30"}</NewsRowDate>
                        <a href="https://www.segodnya.ua/ua/sport/boxing/lomachenko-s-druzyami-zapustil-v-dnepr-200-tysyach-molodyh-ryb-1358056.html" style={{color: "black", textDecoration: "none", textUnderline: "none"}}>
                            <NewsRowDescription>Ломаченко з друзями запустив у Дніпро 200 тисяч молодих рибин</NewsRowDescription>
                        </a>
                    </NewsRow>
                    <NewsRow>
                        <NewsRowDate>{"06"}:{"07"}</NewsRowDate>
                        <a href="https://www.segodnya.ua/ua/ukraine/sport-rybalka-i-ne-tolko-stali-izvestny-samye-populyarnye-hobbi-ukraincev-1348402.html" style={{color: "black", textDecoration: "none", textUnderline: "none"}}>
                            <NewsRowDescription>Спорт, риболовля і не тільки: стали відомі найпопулярніші хобі українців</NewsRowDescription>
                        </a>
                    </NewsRow>
                    <NewsRow>
                        <NewsRowDate>{"06"}:{"00"}</NewsRowDate>
                        <a href="https://ua.korrespondent.net/tag/38358/"  style={{color: "black", textDecoration: "none", textUnderline: "none"}}>
                            <NewsRowDescription>Подія в Азовському морі: Рятувальники шукають рибалку, човен з яким забрало поривами вітру</NewsRowDescription>
                        </a>
                    </NewsRow>

                    <DateDelimiter>{21}.{11}.{2019}</DateDelimiter>

                    <NewsRow>
                        <NewsRowDate>{"22"}:{"00"}</NewsRowDate>
                        <a href="http://www.huntingukraine.com/index.php?option=com_content&view=article&id=3433:novyj-bjudzhetnyj-bezdrotovyj-eholot-deeper-start&catid=20:novynyrybalok&Itemid=50" style={{color: "black", textDecoration: "none", textUnderline: "none"}}>
                            <NewsRowDescription>НОВИЙ БЮДЖЕТНИЙ БЕЗДРОТОВИЙ ЕХОЛОТ - DEEPER START</NewsRowDescription>
                        </a>
                    </NewsRow>
                    <NewsRow>
                        <NewsRowDate>{"21"}:{"30"}</NewsRowDate>
                        <a href="http://gonefishing.org.ua/novyny/novyny-u-sviti-rybalok/u-nimechchyni-zlovyly-rekordnu-shchuku-dovzhynoyu-120-santymetriv" style={{color: "black", textDecoration: "none", textUnderline: "none"}}>
                            <NewsRowDescription>У НІМЕЧЧИНІ ЗЛОВИЛИ РЕКОРДНУ ЩУКУ ДОВЖИНОЮ 120 САНТИМЕТРІВ!</NewsRowDescription>
                        </a>
                    </NewsRow>
                    <NewsRow>
                        <NewsRowDate>{"17"}:{"33"}</NewsRowDate>
                        <a href="http://gonefishing.org.ua/novyny/novyny-u-sviti-rybalok/lovyv-rybu-zlovyv-minu" style={{color: "black", textDecoration: "none", textUnderline: "none"}}>
                            <NewsRowDescription>Ловив рибу, а зловив міну!</NewsRowDescription>
                        </a>
                    </NewsRow>
                    <NewsRow>
                        <NewsRowDate>{"10"}:{"45"}</NewsRowDate>
                        <a href="https://www.obozrevatel.com/ukr/society/os-tse-chudovisko-ribalki-vilovili-velicheznogo-soma-bilya-cherkas.htm" style={{color: "black", textDecoration: "none", textUnderline: "none"}}>
                            <NewsRowDescription>Ось це чудовисько: рибалки виловили величезного сома біля Черкас</NewsRowDescription>
                        </a>
                    </NewsRow>

                    <DateDelimiter>{20}.{11}.{2019}</DateDelimiter>

                    <NewsRow>
                        <NewsRowDate>{"11"}:{"00"}</NewsRowDate>
                        <a href="https://tsn.ua/tsikavinki/u-norvegiyi-ribalka-vpiymav-ribu-monstra-z-ochima-rozmirom-yak-dvi-cibulini-1412868.html" style={{color: "black", textDecoration: "none", textUnderline: "none"}}>
                            <NewsRowDescription>У Норвегії рибалка зловив рибину з очами, як дві цибулини.</NewsRowDescription>
                        </a>
                    </NewsRow>
                    <NewsRow>
                        <NewsRowDate>{"07"}:{"21"}</NewsRowDate>
                        <a href="https://tsn.ua/tsikavinki/amerikanka-spiymala-ribu-z-dvoma-rotami-v-ozeri-v-yakomu-voditsya-chudovisko-1399311.html" style={{color: "black", textDecoration: "none", textUnderline: "none"}}>
                            <NewsRowDescription>Американка спіймала рибу з двома ротами в озері, в якому водиться чудовисько.</NewsRowDescription>
                        </a>
                    </NewsRow>
                    <NewsRow>
                        <NewsRowDate>{"05"}:{"34"}</NewsRowDate>
                        <a href="https://tsn.ua/ukrayina/odesitka-zapovzyalasya-vigrati-chempionat-ukrayini-sered-ribalok-1253310.html" style={{color: "black", textDecoration: "none", textUnderline: "none"}}>
                            <NewsRowDescription>Одеситка заповзялася виграти чемпіонат України серед рибалок.</NewsRowDescription>
                        </a>
                    </NewsRow><NewsRow>
                    <NewsRowDate>{"03"}:{"22"}</NewsRowDate>
                    <a href="https://tsn.ua/ukrayina/na-sumschini-brakonyer-pidstreliv-ribalku-1159704.html" style={{color: "black", textDecoration: "none", textUnderline: "none"}}>
                        <NewsRowDescription>На Сумщині браконьєр підстрелив рибалку</NewsRowDescription>
                    </a>
                </NewsRow>

                </NewsRowsContainer>
            </Container>
        );
    }
}

export default AllNews;

const Container = styled.div`
    
`;

const ContainerTitle = styled.div`
    font-size: 1.2em;
    font-weight: bolder;
    padding: 10px;
    border-bottom: 1px solid #c3c3c3;
`;

const NewsRowsContainer = styled.div`
    margin-top: 10px;
    font-size: 0.8em;
    padding: 10px;
    background-color: rgba(235,235,235,0.75);
    
    > :last-child{
        border: none;
        margin: 0;
        padding: 0;
    }
`;

const NewsRow = styled.div`
    margin-bottom: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #c3c3c3;
`;

const NewsRowDate = styled.div`
    float: left;
    color: black;
    margin-right: 5px;
    padding-right: 5px;
    cursor: default;
    border-right: 1px solid black;
`;

const NewsRowDescription = styled.div`
    white-space: pre-wrap;
    
    :hover{
        color: #bdbdbd;
    }
`;

const DateDelimiter = styled.div`
    font-size: 1em;
    color: black;
    text-align: center;
    margin: 10px 0;
    cursor: default;
`;