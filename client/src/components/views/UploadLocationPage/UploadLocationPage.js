import React, {useState} from 'react'

function UploadLocationPage() {
    
    const [locationValue, setLocationValue] = useState('');

    const [descriptionValue, setDescriptionValue] = useState('');
    const onLocationChange = (event) => {

        setLocationValue(event.currentTarget.value);   
        
    };

    const onDescriptionChange = (event) => {
        setDescriptionValue(event.currentTarget.value);
    };

    return (
        <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem'}}>
                <h2>Upload Location</h2>
            </div>

            <form onSubmit>
                { /* Drop Zone */}

                <br />
                <br />
                
                <label>Location Name </label>
                <input 
                    onChange={onLocationChange}
                    value={locationValue}
                    placeholder="Enter Location"
                />

                <br />
                <br />
                
                <label>Description </label>
                <textarea
                    onChange={onDescriptionChange}
                    value={descriptionValue}
                    placeholder="short description of the location"
                />

                <br />
                <br />
                
                <label>Price ($) </label>
                <input 
                    onChange
                    value
                    type="number"
                />

                <select>
                    
                    <option key="" value="">
                    
                    </option>

                </select>

                <br />
                <br />

                <button 
                    onClick
                >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default UploadLocationPage
