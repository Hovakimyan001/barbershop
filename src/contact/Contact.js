import React from 'react'
import Map from '../Map'
import Fieldback from './Fieldback'

export default function Contact() {
    return (
        <div className='contact-container'>
            <div className="title" style={{paddingTop : '110px'}}>Contacts</div>
            <Fieldback />
            <Map />
        </div>
    )
}
