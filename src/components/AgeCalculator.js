import React, { useState } from 'react';
import './AgeCalculator.css';

function AgeCalculator() {
    const [birthdate, setBirthdate] = useState('');
    const [age, setAge] = useState(null);

    const calculateAge = () => {
        const birthDate = new Date(birthdate);
        const currentDate = new Date();

        if (!isNaN(birthDate.getTime())) {
            const yearsDiff = currentDate.getFullYear() - birthDate.getFullYear();
            const monthsDiff = currentDate.getMonth() - birthDate.getMonth();
            const daysDiff = currentDate.getDate() - birthDate.getDate();

            if (monthsDiff < 0 || (monthsDiff === 0 && daysDiff < 0)) {
                setAge({
                    years: yearsDiff - 1,
                    months: 12 - Math.abs(monthsDiff),
                    days: daysDiff < 0 ? 30 + daysDiff : daysDiff,
                });
            } else {
                setAge({
                    years: yearsDiff,
                    months: monthsDiff,
                    days: daysDiff,
                });
            }
        } else {
            setAge(null);
        }
    };

    return (
        <div>
            <h1>Age Calculator</h1>
            <div className="container">
                <label>Enter your birthdate: </label>
                <input type="date" value={birthdate} onChange={(e) => setBirthdate(e.target.value)} />
                <button onClick={calculateAge}>Calculate Age</button>
            </div>
            {age !== null && (
                <div className="calcAge">
                    <p>Your age is:</p>
                    <p>{age.years} years</p>
                    <p>{age.months} months</p>
                    <p>{age.days} days</p>
                </div>
            )}
        </div>
    );
}

export default AgeCalculator;