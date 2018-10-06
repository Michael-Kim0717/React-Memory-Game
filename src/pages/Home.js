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
    
    // When the user clicks on an image, it prompts this function.
    // Find the index of the image clicked
    // Check if the image has been previously clicked
    //      If it has not been clicked previously,
    //          Reorder the images
    //          Increment the score
    //      Else
    //          Reset the image array to all have their "clicked" property to false
    //          Reorder images
    //          Reset the score
    //          Set maxScore if the score is > current maxScore
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
                images: this.reorderImages(images),
                score: 0,
                maxScore: currentScore > this.state.maxScore ? currentScore : this.state.maxScore
            });
        }
    }

    // Reorder images is called when an image is clicked
    // Splice out a random image until the image array is empty
    // Reinclude the images into the initial array and return it
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
            <div>
                <div className="container-fluid">
                    <Col size="md-12" id="title">
                        <h1 id="welcomeText"> Welcome To The Animal Memory Game! </h1>
                    </Col>
                </div>
                <Container>
                    <Row>
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
                        <div className="container" id="imageContainer">
                            <h1> 
                                Score : {this.state.score} 
                                <br/>
                                Max Score : {this.state.maxScore} 
                            </h1>
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
                        </div>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Home;
