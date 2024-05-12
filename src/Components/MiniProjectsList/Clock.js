import React from 'react'
import { useState, useEffect } from 'react';


const Clock = () => {

    const getDay = (date) => {
        const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        return weekday[date.getDay()];
    }
    
    const getDate = (date) => {
        const month = date.toLocaleString('default', { month: 'long' });
        const day = date.getDate();
        const year = date.getFullYear();
    
        return `${month} ${day}, ${year}`;
    }
    
    const getTime = (date) => {
        let hours = date.getHours();
        if(hours < 10){
            hours = `0${hours}`;
        }
        let minutes = date.getMinutes();
        if(minutes < 10){
            minutes = `0${minutes}`;
        }
        let seconds = date.getSeconds();
        return `${hours}:${minutes}:${seconds}`;
    }

    const[date, setDate] = useState(new Date());

	useEffect((()=> {
		setInterval(() => {
			setDate(new Date());
		}, 1000);
	}),[]);

  return (
    <div>
			<div id="day">{getDay(date)}</div>
			<div id="date">{getDate(date)}</div>
			<div id="time">{getTime(date)}</div>
    </div>
  )
}

export default Clock
