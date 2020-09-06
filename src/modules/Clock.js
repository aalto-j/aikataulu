import React from 'react'

const Clock = ({ time }) => {
    function with_zero(t) {
        return (t < 10 ? '0' : '') + t;
    }

    return (
        <div className="time">
            <div className="cal">
                <p className="date">{time.getDate()}</p>.
                <p className="month">{time.getMonth() + 1}</p>.
                <p className="year">{time.getYear() + 1900}</p>
            </div><div className="clock">
                <p className="hour">{with_zero(time.getHours())}.</p>
                <p className="min">{with_zero(time.getMinutes())}.</p>
                <p className="sec">{with_zero(time.getSeconds())}</p>
            </div>
        </div>
        )
}

export default Clock