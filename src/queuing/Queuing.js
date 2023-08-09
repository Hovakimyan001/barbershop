import { useRef } from 'react';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
export default function Queuing() {
    const [value, onChange] = useState(new Date());
    const forDays = [8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7];
    const [showDate, setShowDate] = useState(false);
    const [apo, setApo] = useState(false);
    const [validname, setValidName] = useState('');
    const [validemail, setValidEmail] = useState('');
    const nameRef = useRef();
    const emailRef = useRef();
    return (
        <div className="queuing-container">
            <div className="queuing-pic"></div>
            <h2 className="title">Queuing</h2>
            <div className="queuing-time">
                <h3>Fill the fields</h3>
            </div>
            <Calendar onChange={onChange} value={value} onClickDay={() => {
                setShowDate(true);
            }} />
            <div className="reserve-date" style={{ display: showDate ? 'flex' : 'none' }}>
                {forDays.map((item, i) => {
                    return <div className='date-item'>
                        <div className="reserved-time">
                            <span>{item}:00am - {item + 1}:00am</span>
                            <p>1 Space Available</p>
                        </div>
                        <button onClick={(e) => {
                            setApo(true)
                        }}>Book Apointment</button>
                    </div>
                })}
            </div>
            <div className="apointment-overlay" style={{ transform: apo ? 'translateY(0)' : 'translateY(-100vh)' }}>
                <div className="apointment">
                    <h2>REQUEST AN APPOINTMENT</h2>
                    <p>
                        Please confirm that you would like to request the following appointment:
                    </p>
                    <div className="date-info">{JSON.stringify(value)}</div>
                    <h2>Your Information:</h2>
                    <p>Please enter your name and email address:</p>
                    <form>
                        <input type="text" placeholder='Name...' value={validname} onChange={(e) => setValidName(e.target.value)} ref={nameRef}/>
                        <input type="email" placeholder='Email...' value={validemail} onChange={(e) => setValidEmail(e.target.value)} ref={emailRef}/>
                    </form>
                    <div className="date-buttons">
                        <button onClick={() => {
                            if (validname.match(/^[A-Z][a-z]+$/) && validemail.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
                                setValidEmail('');
                                setValidName('');
                                setTimeout(() => {
                                    setApo(false);
                                }, 1000);
                            }
                            nameRef.current.style.borderColor = !validname.match(/^[A-Z][a-z]+$/) ? 'red' : 'white';
                            emailRef.current.style.borderColor = !validemail.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/) ? 'red' : 'white';
                        }}>Request Apointment</button>
                        <button onClick={() => setApo(false)}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )
}