import React from 'react'
import './Timer.css'
function Timer() {

    const [day, setDay] = React.useState(0)
    const [houre, setHoure] = React.useState(0)
    const [minuts, setMinuts] = React.useState(0)
    const [second, setSecond] = React.useState(0)

    const dedLine = 'January, 1,'+(new Date().getFullYear()+1)

    const updateTime = ()=>{
        const newYearDate = Date.parse(dedLine)
        const remainingTime = newYearDate - Date.now()
        setDay(Math.floor(remainingTime/1000/60/60/24))
        setHoure(Math.floor((remainingTime/1000/60/60)%24))
        setMinuts(Math.floor((remainingTime/1000/60)%60))
        setSecond(Math.floor((remainingTime/1000)%60))
    }

    React.useEffect(()=>{
    const interval = setInterval(()=>{
        updateTime();
    },1000)
    return () => clearInterval(interval) 
    },[])

  return (
    <div className='timer'>
      <h1>Happy New Year</h1>
      <div className='mainDiv'>
        <div className='subDiv'>
            <p>{day}</p>
            <h6>Days</h6>
        </div>
        <div className='subDiv'>
            <p>{houre}</p>
            <h6>Hours</h6>
        </div>
        <div className='subDiv'>
            <p>{minuts}</p>
            <h6>Minuts</h6>
        </div>
        <div className='subDiv'>
            <p>{second}</p>
            <h6>Second</h6>
        </div>
      </div>
    </div>
  )
}

export default Timer
