import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import {BrowserRouter, Route} from "react-router-dom";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={ () =>
                        <Dialogs messages={props.state.dialogsPage.messages}
                                 dialogs={props.state.dialogsPage.dialogs}/>} />
                    <Route path='/profile' render={ () =>
                        <Profile posts={props.state.profilePage.posts}/>} />
                    <Route path='/news' component={News}/>
                </div>
            </div>

        </BrowserRouter>
    )
}

export default App;
