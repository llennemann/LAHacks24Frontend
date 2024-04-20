import Map from '../Map';
import TopBar from '../TopBar';
import Sidebar from '../Sidebar';
// import { useState } from 'react';
import Profile from './Profile';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function Home() {
    // call API 
    // const [sidebarData, setSidebarData] = useState(null);
    const sidebarData=[
        {
            "name": "San Diego", 
            "budget": 50
        },
        {
            "name": 'LA',
            "budget": 100
        },
        {"name": "San Diego", 
        "budget": 50}
    ]

    return (
        <div id="home-pg">
            <TopBar/>
            <div id="home-content">
                <Map/>
                <Sidebar data={sidebarData}/>
            </div>
            <Routes>
                <Route path="/profile" element={<Profile />} />
            </Routes>
    </div>
    )
}

export default Home;