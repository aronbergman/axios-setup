import React, {Component} from 'react';

import './FullPost.css';
import axios from "axios";

class FullPost extends Component {
    state = {
        loadedPost: null
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.id) {
            if (!this.state.loadedPost || (this.state.loadedPost && this.props.id !== this.state.loadedPost.id)) {
                axios.get(`/posts/${this.props.id}`)
                    .then(
                        res => {
                            this.setState({loadedPost: res.data});
                        }
                    )
            }
        }
    }

    deletePostHandler = () => {
        axios.delete(`/posts/${this.props.id}`)
            .then(res => {
                console.log(res)
            })
    };

    render() {
        let post = <p>Please select a Post!</p>;

        if (this.props.id) {
            post = <p>Loading!</p>;
        }

        if (this.state.loadedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button className="Delete"
                                onClick={this.deletePostHandler}>Delete
                        </button>
                    </div>
                </div>

            );
        }

        return post;
    }
}

export default FullPost;