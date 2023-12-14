import React, { useState } from 'react';
import Footer from '../components/footer.componet';
import '../style/home.css';

const ReservationLists = () => {
    const [email, setEmail] = useState('');
    const [reservation, setReservation] = useState(null);
    const [error, setError] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

    const fetchReservation = async () => {
        try {
            const response = await fetch(`http://localhost:8080/api/reservations/${email}`);
            if (!response.ok) {
                throw new Error('Reservation not found');
            }
            const data = await response.json();
            setReservation(data);
            setError('');
        } catch (err) {
            setError('Reservation not found, please check your email and try again or make a reservation first');
            setReservation(null);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchReservation();
    };

    const formatDate = (dateTime) => {
        const date = new Date(dateTime);
        return date.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric', 
            hour: '2-digit', 
            minute: '2-digit' 
        });
    };

    const myStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto',
        padding: '20px',
        backgroundColor: '#1e1e1eca',
        fontSize: '18px',
        border: '1px solid gray',
        marginTop: '10%',
        marginBottom: '10%',
        marginRight: '20%',
        marginLeft: '20%'
    };

    const buttonStyle = {
        width: '100%',
        padding: '10px',
        backgroundColor: '#333',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
    };

    return (
        <div style={myStyle}>
            {!isLoggedIn && (
                <div style={{ backgroundColor: '#f0ad4e', padding: '10px', marginBottom: '10px', borderRadius: '4px' }}>
                    If you want to see the menu, please log in to your account!
                </div>
            )}

            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    style={{ margin: '10px 0', width: '100%', padding: '10px' }}
                />
                <button type="submit" style={buttonStyle}>Check Reservation</button>
            </form>
            {reservation && (
                <div style={{ textAlign: 'left', margin: '10px 0' }}>
                    <h2 style={{ color: 'white' }}>Reservation Details</h2>
                    <p><strong>Date and Time:</strong> {formatDate(reservation.dateTime)}</p>
                    <p><strong>Name:</strong> {reservation.firstName} {reservation.lastName}</p>
                    <p><strong>Number of Guests:</strong> {reservation.guestNum}</p>
                </div>
            )}
            {error && <div style={{ color: 'red', margin: '10px 0' }}>{error}</div>}
        </div>
    );
};

export default ReservationLists;
