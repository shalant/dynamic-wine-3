import React, { useState, useEffect, componentDidMount } from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';
// components
import Signup from './components/sign-up';
import LoginForm from './components/login-form';
import Navbar from './components/navbar';
import Home from './components/home';
import AddArticle from './components/AddArticle';
import Articles from './components/Articles';
import Article from './components/Article';
import EditArticle from './components/EditArticle';

function App(props) {
  //from nimblewebdeveloper
  const [loggedIn, setLoggedIn] = useState(0);
  const [username, setUsername] = useState('');  


    // this.state = {
    //   loggedIn: false,
    //   username: null,
    // };

    // this.getUser = this.getUser.bind(this);
    // this.componentDidMount = this.componentDidMount.bind(this);
    // this.updateUser = this.updateUser.bind(this);
  

  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios
      .get('/articles')
      .then(res => setPosts(res.data))
      .catch(error => console.log(error));
  })

//   componentDidMount(() => {
//     this.getUser();
//   });

useEffect(() => {
  
}, [])


const updateUser = userObject => {
  setUsername(userObject)
}
  // const updateUser = ((userObject) => {
  //   this.setState(userObject);
  // });

  const getUser = (() => {
    axios
      .get('/api/user/')
      .then((response) => {
        console.log('Get user response: ');
        console.log(response.data);
        if (response.data.user) {
          console.log(
            'Get User: There is a user saved in the server session: '
          );

          this.setState({
            loggedIn: true,
            username: response.data.user.username,
          });
        } else {
          console.log('Get user: no user');
          this.setState({
            loggedIn: false,
            username: null,
          });
        }
      })
      .catch((err) => console.log('err', err));
  });

    return (
      <div className='App'>
        <Navbar {/*updateUser={this.updateUser} loggedIn={this.state.loggedIn} */} />
        {/* greet user if logged in: */}
        {this.state.loggedIn && <p>Join the party, {this.state.username}!</p>}
        {/* Routes to different components */}
        <Route exact path='/' component={Home} />
        <Route
          path='/login'
          render={() => <LoginForm updateUser={this.updateUser} />}
        />
        <Route path='/signup' render={() => <Signup />} />
        <Route exact path='/' render={() => <Articles posts={posts} />} />
      <Route 
        path='/article/:id' 
        render={props => <Article {...props} posts={posts} />} 
      />
       <Route 
        path='/update/:id' 
        render={props => <EditArticle {...props} posts={posts} />} 
      />
        <Route path='/add-article' component={AddArticle} />

      </div>
    );
}

export default App;
