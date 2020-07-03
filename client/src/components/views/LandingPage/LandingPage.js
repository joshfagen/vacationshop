import React, { useEffect, useState } from 'react'
import { FaCode } from "react-icons/fa";
import Axios from 'axios';


function LandingPage() {

    const [locations, setLocations] = useState([]);

    useEffect(() => {
       
        Axios.post('/api/location/getLocations')
            .then(response => {
                if(response.data.success) {
                    setLocations(response.data.locations);
                    console.log(response.data.locations);
                } else {
                    alert('failed to load locations');
                }
            });
    }, [])
    
    return (
        <>
        <div className="app">
            <FaCode style={{ fontSize: '4rem' }} /><br />
            <span style={{ fontSize: '2rem' }}>Let's Start Coding!</span>
        </div>
        <div style={{ float:'right' }}>Thanks For Using This Boiler Plate by John Ahn</div>
        </>
    )
}

export default LandingPage
