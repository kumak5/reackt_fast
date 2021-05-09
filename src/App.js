import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import MyPosts from "./components/Profile/MyPosts";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";


const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            {/*<MyPosts />*/}
            <div class='app-wrapper-content'>
                <Dialogs/>
            </div>
        </div>);
}

export default App;
