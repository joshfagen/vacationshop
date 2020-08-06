import React, { useState } from 'react';
import { Checkbox, Collapse } from 'antd';

const { Panel } = Collapse;

const continents = [
        // {
        //     "_id": 0,
        //     "name": "All"
        // },
        {
            "_id": "Africa",
            "name": "Africa"
        },
        {
            "_id": "Asia",
            "name": "Asia"
        },
        {
            "_id": "Central America & Carribean",
            "name": "Central America & Carribean"
        },
        {
            "_id": "Europe",
            "name": "Europe"
        },
        
        {
            "_id": "North America",
            "name": "North America"
        },
        
        {
            "_id": "Oceania",
            "name": "Oceania"
        },
        {
            "_id": "South America",
            "name": "South America"
        },
        
] ;



function CheckBox(props) {
    
    const [checked, setChecked] = useState([]);
    

    const handleToggle = (id) => {
        console.log(id)
        const currentIndex = checked.indexOf(id);
        const newChecked = [...checked];

        if(currentIndex == -1) {
            newChecked.push(id);
        } else {
            newChecked.splice(currentIndex, 1);
     }

        setChecked(newChecked);
        props.handleFilters(newChecked);
    };

    const renderCheckBoxLists = () => continents.map((value, index) => (
        <div style={{margin: '20px 0'}}>
            <React.Fragment key={index}>
                    
                    <div className="continent">
                        <Checkbox 
                        onChange={() => handleToggle(value._id)}
                        type="checkbox"
                        checked={checked.indexOf(value._id) == -1 ? false : true}
                        />
                        <span style={{marginLeft: '10px'}}>{value.name}</span>
                    </div>
            </React.Fragment>
        </div>

        
        ));

    return (
        <div>
            <Collapse defaultActiveKey={['0']}>
                <Panel header="Continents" key="1">
                    <div>
                        {renderCheckBoxLists()}
                    </div>
                </Panel>
            </Collapse>
        </div>
    )
}


export default CheckBox
