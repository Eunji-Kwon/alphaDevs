import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React, { Component } from "react";

export default class ReservationLists extends Component {
    constructor(props) {
        super(props);
        this.onChangeDateTime = this.onChangeDateTime.bind(this);
        this.onChangeGuestNum = this.onChangeGuestNum.bind(this);
        this.onChangeFname = this.onChangeFname.bind(this);
        this.onChangeLname = this.onChangeLname.bind(this);
        this.onChangeContact = this.onChangeContact.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            dateTime: '',
            guestNum: '',
            firstName: '',
            lastName: '',
            contact: ''
        };
    }

    onChangeDateTime(date) {
        this.setState({ dateTime: date });
    }

    onChangeGuestNum(e) {
        this.setState({ guestNum: e.target.value });
    }

    onChangeFname(e) {
        this.setState({ firstName: e.target.value });
    }

    onChangeLname(e) {
        this.setState({ lastName: e.target.value });
    }

    onChangeContact(e) {
        this.setState({ contact: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        console.log(this.state.dateTime);
        console.log(this.state.guestNum);
        console.log(this.state.firstName);
        console.log(this.state.lastName);
        console.log(this.state.contact);

        const reservationData = {
            dateTime: this.state.dateTime,
            guestNum: this.state.guestNum,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            contact: this.state.contact
        };

        axios.post('http://localhost:8080/api/reservations/create_re', reservationData)
            .then(res => {
                console.log(res.data);
                // Additional logic after successful submission
            })
            .catch(err => {
                console.error("Error:", err);
                // Handle error scenarios
            });

        this.setState({
            dateTime: '',
            guestNum: '',
            firstName: '',
            lastName: '',
            contact: ''
        });
    }

    render() {
        const myStyle = {
            backgroundColor: '#1e1e1eca',
            fontSize: '18px',
            border: '1px solid gray',
            padding: '10px'
        };

        return (
            <div className="container justify-content-center" style={myStyle}>
                <div className="col-lg-12 p-5 text-white">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group m-5">
                            <label htmlFor="dateTimePicker">Date & Time</label>
                            <br />
                            <DatePicker
                                id="dateTimePicker"
                                selected={this.state.dateTime}
                                onChange={this.onChangeDateTime}
                                showTimeSelect
                                timeFormat="HH:mm"
                                timeIntervals={15}
                                timeCaption="Time"
                                dateFormat="MMMM d, yyyy h:mm aa"
                                minDate={new Date()}
                            />
                        </div>

                        <div className="form-group m-5">
                            <label htmlFor="guestNumInput">The numbers of Guests</label>
                            <input type="text" className="form-control" id="guestNumInput" value={this.state.guestNum} onChange={this.onChangeGuestNum} />
                        </div>

                        <div className="form-group m-5">
                            <label htmlFor="firstNameInput">First Name</label>
                            <input type="text" className="form-control" id="firstNameInput" value={this.state.firstName} onChange={this.onChangeFname} />
                        </div>

                        <div className="form-group m-5">
                            <label htmlFor="lastNameInput">Last Name</label>
                            <input type="text" className="form-control" id="lastNameInput" value={this.state.lastName} onChange={this.onChangeLname} />
                        </div>

                        <div className="form-group m-5">
                            <label htmlFor="contactInput">Email</label>
                            <input type="text" className="form-control" id="contactInput" value={this.state.contact} onChange={this.onChangeContact} />
                        </div>

                        <button type="submit" className="btn btn-primary">Make a reservation</button>
                    </form>
                </div>
            </div>
        );
    }
}
