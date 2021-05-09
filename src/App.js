import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import MyPosts from "./components/Profile/MyPosts";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import {BrowserRouter, Route} from "react-router-dom";


const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' component={Dialogs}/>
                    <Route path='/profile' component={MyPosts}/>
                    <Route path='/news' component={News}/>
                </div>
            </div>

        </BrowserRouter>
    )
}

export default App;
