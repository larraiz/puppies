import React, { Component } from 'react';
import List from '../list/list';
import * as Axios from 'axios';
import ImageViewer from '../imageViwer/ImageViewer';



class ApplicationBody extends Component {
    constructor(props) {
        super(props);
        this.state = { items: [], src: "" }
    }
    componentDidMount() {
        this.getBreeds();
        this.getRandomPuppy();
    }
    getBreeds = () => {
        Axios.get("https://dog.ceo/api/breeds/list/all").then((response) => {
            console.log(response);
            let breeds = Object.getOwnPropertyNames(response.data.message);
            console.log(breeds);
            this.setState({ items: breeds });
        })
    }
    onBreedSelected = (puppy) => {
        this.getPuppyByBreed(puppy);
    }

    getRandomPuppy = () => {
        this.setState({ loading: true });
        Axios.get("https://dog.ceo/api/breeds/image/random").then((response) => {
            console.log(response);
            if (response.status) {
                console.log(response.message);
            }
            this.setState({ src: response.data.message, loading: false });
        })
    }

    getPuppyByBreed(breed) {
        this.getAxiosResponse(`https://dog.ceo/api/breed/${breed}/images/random`).then((data) => {
            this.setState({ showBreed: true,breed, puppy: data })
        })
    }
    async getAxiosResponse(url) {
        const response = await Axios.get(url);
        return response.data.message;
    }
    render() {
        if (this.state.showBreed) {
            return <div>
                <span style={{ color: "red" }}>{this.state.breed}</span>
                <ImageViewer src={this.state.puppy}></ImageViewer>
                <div>
                    <a href="#" onClick={() => { this.setState({ showBreed: false }) }}>
                        Return to breeds list
                    </a>
                </div>
            </div>
        } else {
            return <div className="body">
                <div className="col50 puppy-container-image">
                    {this.state.loading ?
                        <div>
                            <p>loading image, please wait...</p>
                        </div> :
                        <div>
                            
                            <ImageViewer src={this.state.src}></ImageViewer>
                            <button onClick={this.getRandomPuppy}>View next random puppy</button></div>

                    }

                </div >
                <div className="col50">
                    <h1 style={{color:"#FF502C"}}>Please click on a breed</h1>
                    <List onItemClick={(puppy) => { this.onBreedSelected(puppy) }} items={this.state.items}></List>
                </div>
            </div >
        }
    }
}

export default ApplicationBody;