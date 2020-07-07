import React, { useState, useEffect} from 'react';
import { Icon, Col, Card, Row} from 'antd';
import { FaCode } from "react-icons/fa";
import  ImageSlider from "../../utils/ImageSlider";
import Axios from 'axios';


function LandingPage() {
    const { Info } = Card;
    var [locations, setLocations] = useState([]);
    const [skip, setSkip] = useState(0);
    const [limit, setLimit] = useState(6);
    const [locationsShown, setLocationsShown] = useState(0);

    useEffect(() => {
       const variables = {
        skip: skip,
        limit: limit,
       };

       getLocations(variables);
        
    }, []);

    const getLocations = (variables) => {
        Axios.post('/api/location/getLocations', variables)
            .then(response => {
                if(response.data.success) {
                    console.log(response.data.locations);
                    setLocations([...locations, ...response.data.locations]);
                    setLocationsShown(response.data.locationsShown);
                } else {
                    alert('failed to load locations');
                }
            });
    };

    const onLoadMore = () => {
        let Skip = skip + limit;

        const variables = {
            skip: Skip,
            limit: limit
        };

        getLocations(variables);
        setSkip(Skip);
    };

    const renderCards = locations.map((location, index) => {
        console.log(location);
        return <Col lg={8} md={12} xs={24}>
            <Card
                hoverable={true}
                cover={<ImageSlider images={location.images}/>}
            >
            <h2>{location.name.toUpperCase()}</h2>
            <p>${location.price}</p>
            <h3>{location.description.toUpperCase()}</h3>
            </Card>
            
        
        </Col>
    });
    
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
                <div style={{ display: 'flex', height: '100px', justifyContent: 'center', alignItems: 'center'}}>
                    <h2><a href="/location/upload">Add a Location!</a></h2>
            
                </div>
                <div>
                    <Row type="flex" gutter={[16, 16]}>
                        
                        {renderCards}
                    </Row>
                </div>
            
                <br />
                <br />
                {locationsShown >= limit && 
                    <div style={{ display: 'flex', justifyContent: 'center'}}>
                        <button onClick={onLoadMore}>Load More</button>
                    </div>
                }
                
            </div>
        
        }

                
        </div>
    )
}

export default LandingPage
