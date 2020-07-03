import React, { useEffect, useState } from 'react'
import { Icon } from 'antd';
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
        <div style={{ width: '75%', margin: '3rem auto' }}>
            <div style={{ textAlign: 'center' }}>
                <h2>Let's Travel The World! <Icon type="rocket"></Icon><Icon type="global"></Icon></h2>
            </div>

        
        { locations.length == 0 ? 
            <div style={{ display: 'flex', height: '300px', justifyContent: 'center', alignItems: 'center'}}>
                <h2><a href="/location/upload">Add a Location!</a></h2>
            
            </div>:
            <div>
            
            </div>
        
        }

        </div>
    )
}

export default LandingPage
