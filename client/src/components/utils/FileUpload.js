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

    const onDelete = (image) => {
        const currentIndex = images.indexOf(image);

        let newImages = images.splice(currentIndex, 1);

        setImages(newImages);
        props.refreshFunction(newImages);
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
                        {images.map((image, index) => (
                            <div onClick={() => onDelete(image)}>
                                <img 
                                    style={{ 
                                        minWidth: '300px', 
                                        width: '300px', 
                                        height: '240px'
                                    }}
                                    src={`http://localhost:5000/${image}`} alt={`locationImg-${index}`}
                                />
                            </div>
                        ))}
                        
                    </div>
                        
        </div>
    )
}

export default FileUpload
