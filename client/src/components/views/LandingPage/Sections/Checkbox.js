import React from 'react';
import { Checkbox, Collapse } from 'antd';

const { Panel } = Collapse;

const continents = [
        {
            "_id": 1,
            "name": "Africa"
        },
        {
            "_id": 2,
            "name": "Asia"
        },
        {
            "_id": 3,
            "name": "Central America & Carribean"
        },
        {
            "_id": 4,
            "name": "Europe"
        },
        
        {
            "_id": 5,
            "name": "North America"
        },
        
        {
            "_id": 6,
            "name": "Oceania"
        },
        {
            "_id": 7,
            "name": "South America"
        },
        
] ;

const renderCheckBoxLists = () => continents.map((value, index) => (
    <React.Fragment key={index}>
        <Checkbox 
            onChange
            type="checkbox"
            checked
        />
    <span>{value.name}</span>
</React.Fragment>

));

function CheckBox() {
    return (
        <div>
            <Collapse defaultActiveKey={['0']}>
                <Panel header key="1">
                    {renderCheckBoxLists()}
                </Panel>
            </Collapse>
        </div>
    )
}


export default CheckBox
