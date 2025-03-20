import React, { useState } from "react";
import "./Timesheet.css";

export default function TimeSheetCalculator() {
    const [hours, setHours] = useState({
        Monday: 0,
        Tuesday: 0,
        Wednesday: 0,
        Thursday: 0,
        Friday: 0,
        Saturday: 0,
        Sunday: 0,
    });

    const handleChange = (day, value) => {
        setHours({ ...setHours, [day]: Number(value) });
    };

    const totalHours = Object.values(hours).reduce((sum, h) => sum + h, 0);

    return (
        <div className="container">
            <h2>TimeSheet Calculator</h2>
            <table>
                <thread>
                    <tr>
                        <th>Day</th>
                        <th>Hours Worked</th>
                    </tr>
                </thread>
                <tbody>
                    {Object.keys(hours).map((day) => (
                        <tr key={day}>
                            <td>{day}</td>
                            <td>
                                <input
                                  type="number"
                                  min="0"
                                  max="24"
                                  value={hours[day]}
                                  onChange={(e) => handleChange(day, e.target.value)}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h3>Total Hours: {totalHours}</h3>
        </div>
    );
}