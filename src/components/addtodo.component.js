import React, { useState } from "react";
//import './RoomReservation.css';

const RoomReservation = () => {
    const [numRooms, setNumRooms] = useState(1);
    const [showRoomSelection, setShowRoomSelection] = useState(false);

    const roomTypes = [
        { type: 'Standard', price: 100 },
        { type: 'Deluxe', price: 150 },
        { type: 'Suite', price: 300 },
    ];

    const [selectedRooms, setSelectedRooms] = useState([
        {
            type: roomTypes[0].type,
        },
    ]);

    const handleRoomTypeChange = (index, value) => {
        const updatedRooms = [...selectedRooms];

        if (!updatedRooms[index]) {
            updatedRooms[index] = { type: value };
        } else {
            updatedRooms[index].type = value;
        }

        setSelectedRooms(updatedRooms);
    };

    const renderRoomSelector = (index) => {
        const roomOptions = roomTypes.map((room, optionIndex) => (
            <option key={optionIndex} value={room.type}>
                {room.type}
            </option>
        ));

        return (
            <select onChange={(e) => handleRoomTypeChange(index, e.target.value)}>
                {roomOptions}
            </select>
        );
    };

    const renderRoomSelection = () => {
        const roomSelections = [];

        for (let i = 0; i < numRooms; i++) {
            roomSelections.push(
                <div key={i} className="room-selection">
                    <p>Room {i + 1}</p>
                    <label>
                        Room Type:
                        {renderRoomSelector(i)}
                    </label>
                </div>
            );
        }
        return roomSelections;
    };

    const calculateTotal = () => {
        let total = 0;

        selectedRooms.forEach((room, index) => {
            const selectedRoom = roomTypes.find((type) => type.type === room.type);

            if (selectedRoom) {
                total += selectedRoom.price;
            } else {
                console.error('Room type not selected for room ${index + 1}');
            }
        });

        // Add taxes (HST i.e., 13%)
        const taxes = total * 0.13;
        const grandTotal = total + taxes;

        return { total: total.toFixed(2), taxes: taxes.toFixed(2), grandTotal: grandTotal.toFixed(2) };
    };

    return (
        <div>
            <h1>Book a Room</h1>
            <p>Select the number of rooms:</p>
            <input
                type="number"
                value={numRooms}
                onChange={(e) => setNumRooms(parseInt(e.target.value, 10))}
            />

            <button onClick={() => setShowRoomSelection(true)}>Select Rooms</button>

            {showRoomSelection && (
                <div>
                    <h2>Room Selection</h2>
                    {renderRoomSelection()}

                    <h2>Room Types and Prices</h2>
                    <ul>
                        {roomTypes.map((room, index) => (
                            <li key={index}>
                                {room.type} - ${room.price} per night
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {showRoomSelection && (
                <div>
                    <h2>Total Cost Breakdown</h2>
                    <p>Total: ${calculateTotal().total}</p>
                    <p>Taxes (HST 13%): ${calculateTotal().taxes}</p>
                    <p>Grand Total: ${calculateTotal().grandTotal}</p>
                </div>
            )}
        </div>
    );
};

export default RoomReservation;