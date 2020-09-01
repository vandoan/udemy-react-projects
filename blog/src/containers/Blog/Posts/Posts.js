import React, { Component } from 'react';
import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import { Route, Link } from 'react-router-dom';
import FullPost from '../FullPost/FullPost';

class Posts extends Component {

    state = {
        posts: []
    }

    componentDidMount () {
        axios.get('/posts')
        .then(response => {
            const posts = response.data.slice(0,4);
            const updatedPosts = posts.map(post => {
                return {
                    ...post,
                    author: 'Max'
                }
            })
            this.setState({posts: updatedPosts})
            // console.log(response);
        })
        .catch(error => {
            console.log(error);
            // this.setState({error: true});
        }); 
    }

    postSelectedHandler = (id) => {
        // this.setState({selectedPostId: id});
        this.props.history.push('/posts/' + id);
    }

    render () {
        let posts = <p style={{textAign: 'center'}}>Something went wrong.</p>
            
        if(!this.state.error) {
            posts = this.state.posts.map(post => {
                return (
                    <Link key={'/posts/' + post.id} to={'/posts/' + post.id}>
                        <Post 
                            author={post.author}
                            clicked={() => this.postSelectedHandler(post.id)}
                            title={post.title} />
                    </Link>
                )
            })
        }

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route path={'/posts/:id'} exact component={FullPost} />
            </div>
        )
    }
}

export default Posts;