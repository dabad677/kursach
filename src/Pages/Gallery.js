import React, {Component} from 'react'
import styled from "styled-components";

import Img11 from "../../public/imgs/Photo11.jpg"
import Img22 from "../../public/imgs/Photo22.jpg"
import Img33 from "../../public/imgs/Photo33.jpg"
import Img44 from "../../public/imgs/Photo44.jpg"
import Img55 from "../../public/imgs/Photo55.jpg"
import Img66 from "../../public/imgs/Photo66.jpg"
import Img77 from "../../public/imgs/Photo77.jpg"
import Img88 from "../../public/imgs/Photo88.jpg"
import Img99 from "../../public/imgs/Photo99.jpg"


const data = [{
    id: 1,
    name: "Island",
    image: Img11
}, {
    id: 2,
    name: "Forest",
    image: Img22
}, {
    id: 3,
    name: "Whale",
    image: Img33
}, {
    id: 4,
    name: "Mountain",
    image: Img44
}, {
    id: 5,
    name: "Boat",
    image: Img55
}, {
    id: 6,
    name: "Flowers",
    image: Img66
}, {
    id: 7,
    name: "Flowers",
    image: Img77
}, {
    id: 8,
    name: "Flowers",
    image: Img88
}, {
    id: 9,
    name: "Flowers",
    image: Img99
}];
export default class Gallery extends React.Component {
    render() {
        // Create tile for each item in data array
        // Pass data to each tile and assign a key
        return (
            <Tiles data={data}/>
        );
    }
}
class Tiles extends React.Component {
    render() {
        // Create tile for each item in data array
        // Pass data to each tile and assign a key
        return (
            <Tilles>
                {this.props.data.map((data) => {
                    return <Tile data={data} key={data.id} />
                })}
            </Tilles>
        );
    }
}

class Tile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            mouseOver: false
        };
        // Bind properties to class instance
        this._clickHandler = this._clickHandler.bind(this);
        this._mouseEnter = this._mouseEnter.bind(this);
        this._mouseLeave = this._mouseLeave.bind(this);
    }
    // Event handlers to modify state values
    _mouseEnter(e) {
        e.preventDefault();
        if (this.state.mouseOver === false) {
            console.log(this.props.data.name);
            this.setState({
                mouseOver: true
            })
        }
    }
    _mouseLeave(e) {
        e.preventDefault();
        if (this.state.mouseOver === true) {
            this.setState({
                mouseOver: false
            })
        }
    }
    _clickHandler(e) {
        e.preventDefault();
        if (this.state.open === false) {
            this.setState({
                open: true
            });
        } else {
            this.setState({
                open: false
            });
        }
    }

    render() {
        // Modify styles based on state values
        let tileStyle = {};
        let headerStyle = {};
        let zoom = {};
        // When tile clicked
        if (this.state.open) {
            tileStyle = {
                width: '62vw',
                height: '62vw',
                position: 'absolute',
                top: '50%',
                left: '50%',
                margin: '0',
                marginTop: '-31vw',
                marginLeft: '-31vw',
                boxShadow: '0 0 40px 5px rgba(0, 0, 0, 0.3)',
                transform: 'none'
            };
        } else {
            tileStyle = {
                width: '18vw',
                height: '18vw'
            };
        }

        return (
            <Tille>
                <img
                    onMouseEnter={this._mouseEnter}
                    onMouseLeave={this._mouseLeave}
                    onClick={this._clickHandler}
                    src={this.props.data.image}
                    alt={this.props.data.name}
                    style={tileStyle}
                />
            </Tille>
        );
    }
}
const Tilles = styled.div`
    padding: 6vh 16vw;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    position: relative;
`;
const Tille =styled.div`
    margin: 15px;
    cursor: pointer;
    overflow: hidden;
    width: 18vw;
    height: 18vw;
    img {
        width: 100%;
        transition: transform 500ms ease;
    &:hover {
            transform: scale(1.1);
        }
    }
`;