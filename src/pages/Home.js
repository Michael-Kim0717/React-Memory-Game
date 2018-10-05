import React, { Component } from "react";
import Wrapper from "../components/Wrapper";
import Image from "../components/Image/Image";
import images from "../images.json";

class Home extends Component {
    // Setting this.state.images to the images json array
    state = {
        images
    };

    /* removeFriend = id => {
        // Filter this.state.friends for friends with an id not equal to the id being removed
        const friends = this.state.friends.filter(friend => friend.id !== id);
        // Set this.state.friends equal to the new friends array
        this.setState({ friends });
    }; */

    printID = (id) => {
        console.log(id);
    }

    // Map over this.state.images and render a Image component for each image object
    render() {
        return (
            <Wrapper>
                {this.state.images.map (image => (
                    <Image
                        id={image.id}
                        key={image.id}
                        name={image.clicked}
                        image={image.image}
                        onclick={this.printID}
                    />
                ))}
            </Wrapper>
        );
    }
}

export default Home;
