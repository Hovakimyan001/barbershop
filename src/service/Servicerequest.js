import { useRef } from "react";
import CountUp from "react-countup";
import {
  GiFullMotorcycleHelmet,
  GiCowboyBoot,
  GiClockwork,
} from "react-icons/gi";
import { BsSpeedometer } from "react-icons/bs";
import { PiLightbulbFill } from "react-icons/pi";
export default function Servicerequest() {
  const countUpRef = useRef();

  const counterlist = [
    {
      id: Math.random(),
      number: 283,
      text: "Members of our club",
      icon: <GiFullMotorcycleHelmet />,
    },
    {
      id: Math.random(),
      number: 158,
      text: "Members of our bar",
      icon: <GiCowboyBoot />,
    },
    {
      id: Math.random(),
      number: 982,
      text: "Repairs in workshop",
      icon: <GiClockwork />,
    },
    {
      id: Math.random(),
      number: 221,
      text: "Speed of motors",
      icon: <BsSpeedometer />,
    },
    {
      id: Math.random(),
      number: 113,
      text: "Awards for our work",
      icon: <PiLightbulbFill />,
    },
  ];
  return (
    <div className="service-request">
      <div className="price-cont">
       
      </div> <div className="priceer">
        <div className="price-counter-cont">
          {counterlist.map((item) => (
            <CountUp start={0} end={item.number} delay={0} key={item.id}>
              {({ countUpRef }) => (
                <div className="counter-item">
                  {item.icon}
                  <h2 ref={countUpRef} />
                  <span>{item.text}</span>
                </div>
              )}
            </CountUp>
          ))}
        </div>
        </div>
    </div>
  );
}
