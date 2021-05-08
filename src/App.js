import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import MyPosts from "./components/Profile/MyPosts";
import Nav from "./components/Navbar/Navbar";


const App = () => {
    return (
        <div className='app-wrapper' >
            <Header />
            <Nav/>
            <MyPosts />
        </div>);
}

export default App;
