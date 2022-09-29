import React, { useState } from 'react';
import "./CartDetail.css"
import img from '../../image/test.jpg'

const CartDetail = ({time}) => {
const [breakTime, setBreaktime] = useState(0);

const handleBreakTime = (selectedBreakTime) => {
  setBreaktime(selectedBreakTime)
 localStorage.setItem("break-time", selectedBreakTime)
}

    return (
        <div>
         
            <div className="details-section">
                <div className="detail-person-info-photo-section">
                   <img src={img} alt="" />
                   <h3>Ahmad Musa</h3>
                </div>
                <div className="detail-person-info">
                      <p>
                        57kg
                        weight
                      </p>
                      <p>
                        5.6
                        height
                      </p>
                      <p>
                        27yrs
                        age
                      </p>
                </div>
             </div> 
            <h2>Add A Break</h2>
            <div className="break-time">
                 <button onClick={() => handleBreakTime(5)}>5m</button>
                 <button onClick={() => handleBreakTime(10)}>10m</button>
                 <button onClick={() => handleBreakTime(15)}>15m</button>
                 <button onClick={() => handleBreakTime(20)}>20m</button>
                 
             </div>
            <div>
                <h2>practice details</h2>
                <div className="details-section-practice-time">
                   <p>Practice Time: </p>
                   <p>{time}m</p>
                </div>
                <div className="details-section-break-time">
                    <p>Break Time:</p>
                    <p>{breakTime}m</p>
                </div>
                <button className='btn-activity'> activity</button>
            </div>
        </div>
    );
};

export default CartDetail;