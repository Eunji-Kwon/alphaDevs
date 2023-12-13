import React, { Component } from "react";
import Footer from '../components/footer.componet';
import '../style/home.css';
import '../style/commonStyles.css';

export default class AboutUs extends Component{
    render(){

        return (
        <div>
        <div className="common-style-container-about">
        <h1>About Alpha Restaurant</h1>

        <p>Welcome to Alpha Restaurant's advanced Reservation Management System, designed to make your dining reservation process seamless and enjoyable. Whether you're planning a special dinner or a casual meal, we're ready to serve you!</p>

        <h2>Our Mission</h2>
        <p>At Alpha Restaurant, our mission is to provide you with a user-friendly platform that simplifies the dining reservation experience. We aim to offer a seamless process from selecting your preferred dining date and time to enjoying your meal at our restaurant.</p>

        <h2>Key Features</h2>
        <ul>
            <li>Intuitive Table Selection: Easily choose your preferred dining area and table from our diverse seating options, each offering a unique dining experience.</li>
            <li>Flexible Reservation Dates: Select your desired dining date and time effortlessly with our user-friendly reservation system.</li>
            <li>Accurate Details: Our system provides clear information on availability, ensuring you can plan your visit without any surprises.</li>
            <li>Responsive Design: Access our reservation platform on any device, ensuring a consistent and smooth experience.</li>
        </ul>

        <h2>Meet the Team</h2>
        <p>Behind the scenes, our dedicated team at Alpha Restaurant is committed to delivering the best possible dining and reservation experience for our guests.</p>

        <div className="team-members">
            <div className="team-member">
                <h3>Eunji Kwon</h3>
                <p>Founder & CEO</p>
            </div>

            <div className="team-member">
                <h3>Arash Karimi</h3>
                <p>Lead Developer</p>
            </div>

            <div className="team-member">
                <h3>Dhruv Suthar</h3>
                <p>UX/UI Designer</p>
            </div>

            <div className="team-member">
                <h3>Shaunak Kumar Patel</h3>
                <p>System Developer</p>
            </div>

            <div className="team-member">
                <h3>Vincent Gabriel Ontal</h3>
                <p>UX/UI Designer</p>
            </div>
        </div>

        <p>Thank you for choosing Alpha Restaurant's Reservation System. We look forward to welcoming you and ensuring a memorable dining experience!</p>
            </div>
                  <Footer />
      </div>
        )
    }
}