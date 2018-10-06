import React, { Component } from "react";

import Col from "../components/Col";
import Container from "../components/Container";
import Image from "../components/Image/Image";
import Row from "../components/Row/Row"

import images from "../images.json";

import "../style.css";

let score = 0, maxScore = 0;

class Home extends Component {
    // Setting this.state.images to the images json array
    state = {
        images,
        score,
        maxScore
    };
    
    clickImage = (id) => {
        let index;
        for (let i = 0; i < 12; i++){
            if (this.state.images[i].id ===  id){
                index = i;
                break;
            }
        }
        if (!this.state.images[index].clicked){
            images[index].clicked = true;
            this.setState({
                images: this.reorderImages(images),
                score: this.state.score + 1,
                maxScore: this.state.maxScore
            });
        }
        else {
            for (let i = 0; i < images.length; i++){
                images[i].clicked = false;
            }
            const currentScore = this.state.score;
            this.setState({
                images: images,
                score: 0,
                maxScore: currentScore > this.state.maxScore ? currentScore : this.state.maxScore
            });
        }
    }

    reorderImages = (imageArray) => {
        const reorderedImages = [];
        while (imageArray.length !== 0){
            const imageToReorder = Math.floor(Math.random() * imageArray.length);
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
                        <h1> 
                            Score : {this.state.score} 
                            <br/>
                            Max Score : {this.state.maxScore} 
                        </h1>
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
