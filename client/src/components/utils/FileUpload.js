import React, { useState } from 'react'
import DropZone from 'react-dropzone';
import { Icon } from 'antd';
import Axios from 'axios';

function FileUpload(props) {

    const [images, setImages] = useState([]);

    const onDrop = (files) => {
        
        let formData = new FormData();
        
        const config = {
            header: {'content-type' : 'multipart/form-data'}
        };
        
        formData.append('file', files[0]);

        Axios.post('/api/location/uploadImage', formData, config)
        .then(response => {
            if(response.data.success) {
                setImages([...images, response.data.image]);
                props.refreshFunction([...images, response.data.image]);

            } else {
                alert('failed to save image to server');
            }   
        });
    };

    return (
        <div style={{ 
            display: 'flex',
            justifyContent: 'space-between'
        }}>
            <DropZone
                onDrop={onDrop}
                multiple={false}
                maxSize={800000000}
            >
                {({getRootProps, getInputProps}) => (
                    <div style={{
                       width: '300px',
                       height: '240px',
                       border: '1px solid lightgray',
                       display: 'flex',
                       alignItems: 'center',
                       justifyContent: 'center'
                    }}
                        {...getRootProps()}
                    >
                        <input {...getInputProps()} />
                        <Icon 
                            type="plus"
                            style={{fontSize: '3rem'}}
                        />
                    </div>
                )}
            </DropZone>
                    <div style={{
                        display: 'flex',
                        width: '350px',
                        height: '240px',
                        overflowX: 'scroll'
                    }}>
                    </div>
                        <div onClick>
                            <img />
                        </div>
        </div>
    )
}

export default FileUpload
