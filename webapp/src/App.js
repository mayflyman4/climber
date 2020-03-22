import React from 'react';
import './App.css';
// import logo from './logo.svg';
// import {Tech} from "./api/Tech";
import Sidebar from './component/SideBar/Sidebar';
import MainContent from './component/MainContent/MainContent';


// const items = [
//     { name: 'home', label: 'Home' },
//     { name: 'billing', label: 'Billing' },
//     { name: 'settings', label: 'Settings' },
//   ]

export function App() {
    return (
        <div className="app">
            {/* sidebar component */}
            <Sidebar />

            {/* main page component */}
            <MainContent />

            {/* <div className="logo"><img src={logo} height="150px" alt="logo"/></div>  */}

            {/* <h2 className="title">climber</h2>*/}
            {/* <div>
                This project is generated with <b><a
                href="https://github.com/shpota/goxygen">goxygen</a></b>.
                <p/>The following list of technologies comes from
                a REST API call to the Go-based back end. Find
                and change the corresponding code
                in <code>webapp/src/api/Tech.js
                </code> and <code>server/web/app.go</code>.
                <Tech/>
            </div> */}

        </div>
    );
}
