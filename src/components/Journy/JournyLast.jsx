import { useEffect, useRef, useState } from "react";
import './JLast.scss'
import { gsap } from "gsap";
import { Draggable, MotionPathPlugin } from "gsap/all";

import { DateTimePicker } from "@mui/lab";
import { TextField } from "@mui/material";

gsap.registerPlugin(Draggable, MotionPathPlugin);

export default function JournyLast({location}) {

  const [date, setDate] = useState();
  const [muiDatePicker, setMuiDatePicker] = useState(false);

  const rootRef = useRef(null);
  const arrow = useRef(null);
  const arrowLine = useRef(null);
  const timeLine = useRef(null);

  const handleApperance = () => {
    const arrowElm = arrow.current;
    const lineElm = arrowLine.current;

    const timegasp = gsap.timeline({ duration: 1 });

    timeLine.current = timegasp
    .fromTo(arrowElm, { rotate: 59, translateY: 90, translateX: 0, opacity: 0, duration: 1 },
      { translateY: 0, opacity: 1, rotate: 50, delay: 0}
    )
    .fromTo(lineElm, { width: 0, opacity: 0},
      {opacity: 1, width: 150, delay: 0.2, duration: 1}
    )
    
    timegasp.then(() => {setMuiDatePicker(true)})
  };

  const handleDisapled = () => {
    timeLine.current.reverse();
    setMuiDatePicker(false);
  };

  const handleDatepicker = () => {

  }
  
  useEffect(() => {
    Draggable.create(rootRef.current, {
      bounds: document.body,
      onDragEnd: function (e) {
        if (this.hitTest(".line")) {
          console.log('Animated area')
          handleApperance();
        } else {
          handleDisapled();
        }
      },
    });
  }, []);

  return (
    <div className="location-container">
      <div className='dragable-location' ref={rootRef}
        
      >
        {location.location}

        <div className="arrow-box">
          <div className="arrow-body" ref={arrowLine}></div>
          <div className="arrow" ref={arrow}></div>
        </div>

        <div style={{opacity: '0', position: 'absolute'}}>
          <DateTimePicker
            value={date}
            renderInput={(props) => <TextField {...props}/>}
            open={muiDatePicker}
            onChange={handleDatepicker}

          />
        </div>
      </div>

    </div>
  )
}

