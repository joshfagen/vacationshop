import React, { useState } from 'react'
import { Typography, Button, Form, message, Input, Icon } from 'antd';
import FileUpload from '../../utils/FileUpload';
import Axios from 'axios';

const { Title } = Typography;
const { TextArea } = Input;

const Continents = [
    {name: 'Africa', code: 'AF'},
    {name: 'Asia', code: 'AS'},
    {name: 'Central America & Carribean', code: 'CA'},
    {name: 'Europe', code: 'EU'},
    {name: 'North America', code: 'NA'},
    {name: 'Oceania', code: 'OC'},
    {name: 'South America', code: 'SA'}
];

var africanCountries = [
    {name: 'Algeria', code: 'DZ'},
    {name: 'Angola', code: 'AO'},
    {name: 'Benin', code: 'BNN'},
    {name: 'Botswana', code: 'BW'}, 
    {name: 'Burkina Faso', code: 'BF'}, 
    {name: 'Burundi', code: 'BI'}, 
    {name: 'Cameroon', code: 'CM'}, 
    {name: 'Cape Verde', code: 'CV'}, 
    {name: 'Central African Republic', code: 'CF'}, 
    {name: 'Chad', code: 'TD'}, 
    {name: 'Comoros', code: 'KM'}, 
    {name: 'Congo', code: 'CG'}, 
    {name: 'Congo, The Democratic Republic of the', code: 'CD'}, 
    {name: 'Cote D\'Ivoire', code: 'CI'}, 
    {name: 'Djibouti', code: 'DJ'}, 
    {name: 'Egypt', code: 'EG'}, 
    {name: 'Equatorial Guinea', code: 'GQ'}, 
    {name: 'Eritrea', code: 'ER'}, 
    {name: 'Ethiopia', code: 'ET'}, 
    {name: 'Gabon', code: 'GA'}, 
    {name: 'Gambia', code: 'GM'}, 
    {name: 'Ghana', code: 'GH'}, 
    {name: 'Guinea', code: 'GN'}, 
    {name: 'Guinea-Bissau', code: 'GW'}, 
    {name: 'Kenya', code: 'KE'}, 
    {name: 'Lesotho', code: 'LS'}, 
    {name: 'Liberia', code: 'LR'}, 
    {name: 'Libya', code: 'LY'}, 
    {name: 'Madagascar', code: 'MG'}, 
    {name: 'Malawi', code: 'MW'}, 
    {name: 'Maldives', code: 'MV'}, 
    {name: 'Mali', code: 'ML'}, 
    {name: 'Mauritania', code: 'MR'}, 
    {name: 'Mauritius', code: 'MU'}, 
    {name: 'Mayotte', code: 'YT'},    
    {name: 'Morocco', code: 'MA'}, 
    {name: 'Mozambique', code: 'MZ'}, 
    {name: 'Namibia', code: 'NA'},
    {name: 'Niger', code: 'NE'}, 
    {name: 'Nigeria', code: 'NG'}, 
    {name: 'Reunion', code: 'RE'}, 
    {name: 'Rwanda', code: 'RW'}, 
    {name: 'Saint Helena', code: 'SH'}, 
    {name: 'Senegal', code: 'SN'}, 
    {name: 'Sao Tome and Principe', code: 'ST'}, 
    {name: 'Seychelles', code: 'SC'}, 
    {name: 'Sierra Leone', code: 'SL'}, 
    {name: 'Somalia', code: 'SO'}, 
    {name: 'South Africa', code: 'ZA'}, 
    {name: 'Sudan', code: 'SD'}, 
    {name: 'Swaziland', code: 'SZ'},        
    {name: 'Tanzania, United Republic of', code: 'TZ'}, 
    {name: 'Togo', code: 'TG'}, 
    {name: 'Tunisia', code: 'TN'}, 
    {name: 'Uganda', code: 'UG'}, 
    {name: 'Western Sahara', code: 'EH'}, 
    {name: 'Zambia', code: 'ZM'}, 
    {name: 'Zimbabwe', code: 'ZW'} 

];

var asianCountries = [
    {name: 'Afghanistan', code: 'AF'},
    {name: 'Bahrain', code: 'BH'},
    {name: 'Bangladesh', code: 'BD'}, 
    {name: 'Bhutan', code: 'BT'}, 
    {name: 'Brunei Darussalam', code: 'BN'}, 
    {name: 'Cambodia', code: 'KH'}, 
    {name: 'China', code: 'CN'}, 
    {name: 'Hong Kong', code: 'HK'}, 
    {name: 'India', code: 'IN'}, 
    {name: 'Indonesia', code: 'ID'}, 
    {name: 'Iran, Islamic Republic Of', code: 'IR'}, 
    {name: 'Iraq', code: 'IQ'}, 
    {name: 'Israel', code: 'IL'}, 
    {name: 'Japan', code: 'JP'}, 
    {name: 'Jordan', code: 'JO'}, 
    {name: 'Kazakhstan', code: 'KZ'},
    {name: 'Kuwait', code: 'KW'}, 
    {name: 'Kyrgyzstan', code: 'KG'}, 
    {name: 'Laos ', code: 'LA'}, 
    {name: 'Lebanon', code: 'LB'}, 
    {name: 'Macao', code: 'MO'}, 
    {name: 'Malaysia', code: 'MY'}, 
    {name: 'Mongolia', code: 'MN'}, 
    {name: 'Myanmar', code: 'MM'}, 
    {name: 'Nepal', code: 'NP'}, 
    {name: 'North Korea', code: 'KP'},
    {name: 'Oman', code: 'OM'}, 
    {name: 'Pakistan', code: 'PK'}, 
    {name: 'Palestine', code: 'PS'}, 
    {name: 'Philippines', code: 'PH'}, 
    {name: 'Qatar', code: 'QA'}, 
    {name: 'Saudi Arabia', code: 'SA'}, 
    {name: 'Singapore', code: 'SG'}, 
    {name: 'South Korea', code: 'KR'}, 
    {name: 'Sri Lanka', code: 'LK'}, 
    {name: 'Syrian Arab Republic', code: 'SY'}, 
    {name: 'Taiwan', code: 'TW'}, 
    {name: 'Tajikistan', code: 'TJ'}, 
    {name: 'Thailand', code: 'TH'}, 
    {name: 'Timor-Leste', code: 'TL'}, 
    {name: 'Turkey', code: 'TR'}, 
    {name: 'Turkmenistan', code: 'TM'}, 
    {name: 'United Arab Emirates', code: 'AE'}, 
    {name: 'Uzbekistan', code: 'UZ'}, 
    {name: 'Vietnam', code: 'VN'},
    {name: 'Yemen', code: 'YE'},  
];

const centralCountries = [
    {name: 'Anguilla', code: 'AI'},
    {name: 'Antigua and Barbuda', code: 'AG'}, 
    {name: 'Aruba', code: 'AW'}, 
    {name: 'Bahamas', code: 'BS'}, 
    {name: 'Barbados', code: 'BB'}, 
    {name: 'Belize', code: 'BZ'}, 
    {name: 'Bermuda', code: 'BM'}, 
    {name: 'Cayman Islands', code: 'KY'}, 
    {name: 'Costa Rica', code: 'CR'}, 
    {name: 'Cuba', code: 'CU'}, 
    {name: 'Dominica', code: 'DM'}, 
    {name: 'Dominican Republic', code: 'DO'}, 
    {name: 'El Salvador', code: 'SV'}, 
    {name: 'Grenada', code: 'GD'}, 
    {name: 'Guadeloupe', code: 'GP'}, 
    {name: 'Guatemala', code: 'GT'}, 
    {name: 'Haiti', code: 'HT'}, 
    {name: 'Honduras', code: 'HN'}, 
    {name: 'Jamaica', code: 'JM'}, 
    {name: 'Martinique', code: 'MQ'}, 
    {name: 'Montserrat', code: 'MS'}, 
    {name: 'Netherlands Antilles', code: 'AN'}, 
    {name: 'Nicaragua', code: 'NI'}, 
    {name: 'Panama', code: 'PA'}, 
    {name: 'Puerto Rico', code: 'PR'}, 
    {name: 'Saint Kitts and Nevis', code: 'KN'}, 
    {name: 'Saint Lucia', code: 'LC'}, 
    {name: 'Saint Vincent and the Grenadines', code: 'VC'}, 
    {name: 'Trinidad and Tobago', code: 'TT'}, 
    {name: 'Turks and Caicos Islands', code: 'TC'}, 
    {name: 'Virgin Islands, British', code: 'VG'}, 
    {name: 'Virgin Islands, U.S.', code: 'VI'}, 
     
];

const europeanCountries = [
    {name: 'Åland Islands', code: 'AX'}, 
    {name: 'Albania', code: 'AL'},
    {name: 'Andorra', code: 'AD'},
    {name: 'Armenia', code: 'AM'},
    {name: 'Austria', code: 'AT'},
    {name: 'Azerbaijan', code: 'AZ'}, 
    {name: 'Belarus', code: 'BY'}, 
    {name: 'Belgium', code: 'BE'}, 
    {name: 'Bosnia and Herzegovina', code: 'BA'}, 
    {name: 'Bulgaria', code: 'BG'}, 
    {name: 'Croatia', code: 'HR'}, 
    {name: 'Cyprus', code: 'CY'}, 
    {name: 'Czech Republic', code: 'CZ'}, 
    {name: 'Denmark', code: 'DK'}, 
    {name: 'Estonia', code: 'EE'}, 
    {name: 'Faroe Islands', code: 'FO'}, 
    {name: 'Finland', code: 'FI'}, 
    {name: 'France', code: 'FR'}, 
    {name: 'Georgia', code: 'GE'}, 
    {name: 'Germany', code: 'DE'}, 
    {name: 'Gibraltar', code: 'GI'}, 
    {name: 'Greece', code: 'GR'}, 
    {name: 'Guernsey', code: 'GG'}, 
    {name: 'Holy See (Vatican City State)', code: 'VA'}, 
    {name: 'Hungary', code: 'HU'}, 
    {name: 'Iceland', code: 'IS'}, 
    {name: 'Ireland', code: 'IE'}, 
    {name: 'Isle of Man', code: 'IM'}, 
    {name: 'Italy', code: 'IT'}, 
    {name: 'Jersey', code: 'JE'}, 
    {name: 'Latvia', code: 'LV'}, 
    {name: 'Liechtenstein', code: 'LI'}, 
    {name: 'Lithuania', code: 'LT'}, 
    {name: 'Luxembourg', code: 'LU'}, 
    {name: 'Macedonia, The Former Yugoslav Republic of', code: 'MK'}, 
    {name: 'Malta', code: 'MT'}, 
    {name: 'Moldova, Republic of', code: 'MD'}, 
    {name: 'Monaco', code: 'MC'}, 
    {name: 'Netherlands', code: 'NL'}, 
    {name: 'Norway', code: 'NO'}, 
    {name: 'Poland', code: 'PL'}, 
    {name: 'Portugal', code: 'PT'}, 
    {name: 'Romania', code: 'RO'}, 
    {name: 'Russian Federation', code: 'RU'}, 
    {name: 'San Marino', code: 'SM'}, 
    {name: 'Serbia and Montenegro', code: 'CS'}, 
    {name: 'Slovakia', code: 'SK'}, 
    {name: 'Slovenia', code: 'SI'}, 
    {name: 'Spain', code: 'ES'}, 
    {name: 'Svalbard and Jan Mayen', code: 'SJ'}, 
    {name: 'Sweden', code: 'SE'}, 
    {name: 'Switzerland', code: 'CH'},  
    {name: 'Ukraine', code: 'UA'}, 
    {name: 'United Kingdom', code: 'GB'},                    

];

const namericanCountries = [
    {name: 'United States', code: 'US'}, 
    {name: 'Canada', code: 'CA'}, 
    {name: 'Greenland', code: 'GL'}, 
    {name: 'Mexico', code: 'MX'}, 
    {name: 'Saint Pierre and Miquelon', code: 'PM'}, 
];

const oceanianCountries = [
    {name: 'Antarctica', code: 'AQ'}, 
    {name: 'American Samoa', code: 'AS'}, 
    {name: 'Australia', code: 'AU'}, 
    {name: 'Christmas Island', code: 'CX'}, 
    {name: 'Cocos (Keeling) Islands', code: 'CC'}, 
    {name: 'Cook Islands', code: 'CK'}, 
    {name: 'Fiji', code: 'FJ'}, 
    {name: 'French Polynesia', code: 'PF'}, 
    {name: 'Guam', code: 'GU'}, 
    {name: 'Kiribati', code: 'KI'}, 
    {name: 'Marshall Islands', code: 'MH'}, 
    {name: 'Micronesia, Federated States of', code: 'FM'}, 
    {name: 'Nauru', code: 'NR'}, 
    {name: 'New Caledonia', code: 'NC'}, 
    {name: 'New Zealand', code: 'NZ'},
    {name: 'Niue', code: 'NU'}, 
    {name: 'Norfolk Island', code: 'NF'}, 
    {name: 'Northern Mariana Islands', code: 'MP'},
    {name: 'Palau', code: 'PW'},  
    {name: 'Papua New Guinea', code: 'PG'}, 
    {name: 'Pitcairn', code: 'PN'}, 
    {name: 'Samoa', code: 'WS'}, 
    {name: 'Solomon Islands', code: 'SB'}, 
    {name: 'Tokelau', code: 'TK'}, 
    {name: 'Tonga', code: 'TO'}, 
    {name: 'Tuvalu', code: 'TV'}, 
    {name: 'United States Minor Outlying Islands', code: 'UM'}, 
    {name: 'Vanuatu', code: 'VU'}, 
    {name: 'Wallis and Futuna', code: 'WF'},
    ];

const samericanCountries = [
    {name: 'Argentina', code: 'AR'}, 
    {name: 'Bolivia', code: 'BO'}, 
    {name: 'Brazil', code: 'BR'}, 
    {name: 'Chile', code: 'CL'}, 
    {name: 'Colombia', code: 'CO'}, 
    {name: 'Ecuador', code: 'EC'},
    {name: 'Falkland Islands (Malvinas)', code: 'FK'}, 
    {name: 'French Guiana', code: 'GF'}, 
    {name: 'Guyana', code: 'GY'}, 
    {name: 'Paraguay', code: 'PY'}, 
    {name: 'Peru', code: 'PE'}, 
    {name: 'South Georgia and the South Sandwich Islands', code: 'GS'}, 
    {name: 'Suriname', code: 'SU'},
    {name: 'Uruguay', code: 'UY'}, 
    {name: 'Venezuela', code: 'VE'},
];

function UploadLocationPage(props) {
    
    const [locationValue, setLocationValue] = useState('');
    const [descriptionValue, setDescriptionValue] = useState('');
    const [priceValue, setPriceValue] = useState(0);
    const [continentValue, setContinentValue] = useState('Africa');
    const [Countries, setCountries] = useState(africanCountries);
    const [countryValue, setCountryValue] = useState('');
    const [images, setImages] = useState([]);

    const onLocationChange = (event) => {

        setLocationValue(event.currentTarget.value);   
        
    };

    const onDescriptionChange = (event) => {
        setDescriptionValue(event.currentTarget.value);
    };

    const onPriceChange = (event) => {
        setPriceValue(event.currentTarget.value);
    }

    const onContinentChange = (event) => {
        console.log(event.currentTarget.value);
        if(event.currentTarget.value == 'Africa') {
            setCountries(africanCountries);
        } else if (event.currentTarget.value== 'Asia') {
            setCountries(asianCountries);
        } else if(event.currentTarget.value == 'Central America & Carribean') {
            setCountries(centralCountries);
        } else if(event.currentTarget.value == 'Europe') {
            setCountries(europeanCountries);
        } else if(event.currentTarget.value == 'North America') {
            setCountries(namericanCountries);
        } else if(event.currentTarget.value == 'Oceania') {
            setCountries(oceanianCountries);
        } else {
            setCountries(samericanCountries);
        }

        setContinentValue(event.currentTarget.value);
        
    };

    const onCountryChange = (event) => {
        setCountryValue(event.currentTarget.value);
    };

    

    const updateImages = (newImages) => {
        setImages(newImages);   
    }


// switch(continentValue) {
//     case 'Africa':
//         Countries.push(); 
        
//         break;

//     case 'AS':
//         break;
    
//     case 'CA':
//         break;
    
//     case 'EU':
//         break;

//     case 'NA':
//         break;

//     case 'OC':
//         break;

//     case 'SA':
//         break;
// };

    const onSubmit = (event) => {
        event.preventDefault();

        if(!locationValue 
            || !descriptionValue
            || !priceValue 
            || !countryValue
            || !continentValue
            || !images) {
                return alert('All fields must be filled!');
            }

        const variables = {
            creator: props.user.userData._id,
            name: locationValue,
            description: descriptionValue,
            price: priceValue,
            images: images,
            continent: continentValue,
            country: countryValue,
        }

        Axios.post('/api/location/uploadLocation', variables)
            .then( (response) => {
                if(response.data.success) {
                    alert('Location added!');
                    props.history.push('/');

                } else {
                    alert('Failed to add location');
                
                }
            });
    }

    return (
        <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem'}}>
                <Title level={2}>Upload Location</Title>
            </div>

            <Form onSubmit={onSubmit}>

                { /* Drop Zone */}
                <FileUpload refreshFunction={updateImages}/>
                <br />
                <br />
                
                <label>Location Name</label>
                <Input 
                    onChange={onLocationChange}
                    value={locationValue}
                    placeholder="Enter Location"
                />

                <br />
                <br />
                
                <label>Description</label>
                <TextArea
                    onChange={onDescriptionChange}
                    value={descriptionValue}
                    placeholder="short description of the location"
                />

                <br />
                <br />
                
                <label>Price ($)</label>
                <Input 
                    onChange={onPriceChange}
                    value={priceValue}
                    type="number"
                />
                <br />
                <br />
                <div style={{float: 'left'}}>
                    <label>Continent</label>
                    <br />
                    <select onChange={onContinentChange}>
                        {Continents.map(item => (
                            <option key={item.code} value={item.name}>{item.name}</option>
                        ))}
                    </select>
                </div>
                <div id="country" style={{float: 'right'}}>
                    <label>Country</label>
                    <br />
                    <select onChange={onCountryChange}>
                        {Countries.map(item => (
                            <option key={item.code} value={item.name}>{item.name}</option>
                        ))}
                    </select>
                </div>
                <br />
                <br />
                <br />

                <Button
                    onClick={onSubmit}
                >
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default UploadLocationPage
