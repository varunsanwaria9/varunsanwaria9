import React,{useState} from "react";
import "../styles/Work.css";

export default function Work() {

    const [dates,setDates] = useState([
        ['June 2021','Started working as an Intern in Virtusa'],
        ['March 2022','Completed the internship in Virtusa'], 
        ['May 2022','Started working as a full time employee in Virtusa']
    ])

    const [currentData,setCurrentData] = useState('')

    const changeData = (value) => setCurrentData(value)

    return(
        <div className="main-body">
            <div className="work-main-body">
                <div className="work-main-header">
                    <p>WORK</p>
                </div>
                <div className="work-main-data">
                    <div className="work-main-data-circle" onClick={() => changeData('')}></div>
                    <div className="work-main-data-line"></div>
                    {dates.map(date => <div key={date[0]}>
                        <div className="d-flex-row">
                            <div className="work-main-data-circle" onClick={() => changeData(date[1])}></div>
                            <div className="work-main-data-line"></div>
                        </div>
                        <p className="work-main-data-text">{date[0]}</p>
                    </div>)}
                    <div className="work-main-data-circle" onClick={() => changeData('')}></div>
                </div>
                <div className="work-main-text">
                    {currentData}
                </div>
            </div>
        </div>        
)}