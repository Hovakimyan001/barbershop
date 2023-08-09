import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";
export default function Queuing() {
  const [date, setDate] = useState(new Date());
  const forDays = [8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7];
  const [showDate, setShowDate] = useState(false);
  const [apo,setApo] = useState(false)
  return (
    <div className="queuing-container">
      <div className="queuing-pic"></div>
      <h2 className="title">Queuing</h2>
      <div className="queuing-time">
        <h3>Fill the Fileds</h3>
      </div>
      <div className="calendar-container">
        <Calendar
          onChange={setDate}
          value={date}
          onClickDay={() => {
            setShowDate(true);
          }}
        />
      </div>

      <div
        className="reserve-date"
        style={{ display: showDate ? "flex" : "none" }}
      >
        {forDays.map((item, i) => {
          return (
            <div className="date-item" onClick={() =>[
              setApo(true)
            ]}>
              <div className="reserved-time">
                <span>
                  {item}:00am - {item + 1}:00am{" "}
                </span>
                <p>1 SPACE AVAILABLE</p>
              </div>
              <button>Book Apointment</button>
            </div>
          );
        })}
      </div>
      <div className="apointment-overlay" style={{ display: apo ? "flex" : "none" }}>
        <div className="apoitment">
          <h2>REQUEST AN APPOINTMENT</h2>
          <p>
            Please confirm that you would like to request the following
            appointment:
          </p>
          <div className="date-info">{JSON.stringify(date)}</div>
          <h2>Your Information:</h2>
          <p>Please enter your name and email address:</p>
          <form>
          <input type="text" placeholder="Name"/>
          <input type="email" placeholder="email adress..." />
          </form>
          <div className="date-buttons">
            <button>Request Apointment</button>
            <button onClick={() =>{
              setApo(false)
            }}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
}
