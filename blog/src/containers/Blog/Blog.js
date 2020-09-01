import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import axios from '../../axios';
import classes from './Blog.css';
import Posts from './Posts/Posts';
// import NewPost from './NewPost/NewPost';
import asyncComponent from '../../hoc/asyncComponent';

const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost');
});

class Blog extends Component {

    state = {
        auth: true
    }

    render () {

        return (
            <div className='Blog'>
                <header>
                    <nav>
                        <ul>
                            <li><NavLink 
                                activeClassName="active"
                                activeStyle={{color:'coral', textDecoration: 'underline'}}
                                exact 
                                to='/posts'>Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname:'/new-post',
                                // hash:'#something',
                                // search:'?a=b'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                 
                {/* <Route path='/' exact render={() => <h1>Home</h1>} /> */}
                <Switch>
                    {this.state.auth ? <Route path='/new-post' component={AsyncNewPost} /> : null }
                    <Route path='/posts' component={Posts} />
                    {/* <Redirect from='/' to='posts' /> */}
                    <Route render={ () => <h1>Not found.</h1>} />
                    {/* <Route path='/:id' exact component={FullPost} /> */}
                </Switch>
            </div>
        );
    }
}

export default Blog;