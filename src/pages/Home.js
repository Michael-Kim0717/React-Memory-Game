import React, { Component } from "react";

import Col from "../components/Col";
import Container from "../components/Container";
import Image from "../components/Image/Image";
import Row from "../components/Row/Row"

import images from "../images.json";

import "../style.css";

/* let clickedArray = [false, false, false, false, false, false, false, false, false, false, false, false]; */

class Home extends Component {
    // Setting this.state.images to the images json array
    state = {
        images
    };
    
    clickImage = (id) => {
        if (!this.state.images[id].clicked){
            images[id].clicked = true;
            this.setState(this.reorderImages(images));
        }
        else {
            for (let i = 0; i < images.length; i++){
                images[i].clicked = false;
            }
            const imageArray = images;
            console.log(imageArray);
            this.setState(imageArray);
        }
    }

    reorderImages = (imageArray) => {
        const reorderedImages = [];
        while (imageArray.length !== 0){
            const imageToReorder = Math.floor(Math.random() * imageArray.length);
            console.log(imageToReorder);
            reorderedImages.push(imageArray[imageToReorder]);
            imageArray.splice(imageToReorder, 1);
        }

        for (let i = 0; i < 12; i++){
            this.state.images.push(reorderedImages[i]);
        }
        
        return this.state.images;
    }

    // Map over this.state.images and render a Image component for each image object
    render() {
        return (
            <Container>
                <Row>
                    <Col size="md-12">
                        <h1> Welcome To The Animal Memory Game! </h1>
                    </Col>
                    <Col size="md-12">
                        <h3> The Rules : </h3>
                        <h4> 
                            Click an image to gain one point. <br/>
                            Clicking another unique image will get you another point. <br/>
                            If you click an image that you already clicked within this round, it's Game Over! <br/>
                            Keep track of what images you clicked on already! 
                        </h4>
                    </Col>
                </Row>
                <Row>
                    {this.state.images.map (image => (
                        <Col size="md-3">
                            <Image
                                id={image.id}
                                name={image.clicked}
                                image={image.image}
                                clickImage={this.clickImage}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        );
    }
}

export default Home;
