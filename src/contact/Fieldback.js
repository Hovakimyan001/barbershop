import React from 'react'

export default function Fieldback() {
    return (
        <div className='form-field'>
            <div className="field-side">
                <div className="label-side">
                <label>
                    <input type="text" placeholder='name' />
                </label>
                <label>
                    <input type="text" placeholder='surname' />
                </label>
                <label>
                    <input type="email" placeholder='email' />
                </label>
                </div>
                <div className="text-side">
                    <textarea cols="30" rows="10" placeholder='Enter your text here...'></textarea>
                </div>
            </div>
            <button>Send</button>
        </div>
    )
}
