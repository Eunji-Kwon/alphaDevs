import React, { useState, useEffect } from 'react';
import './style.css'; // Make sure to import your CSS file



const AlphaRestaurant = () => {
  const [activeTab, setActiveTab] = useState('Menu');

  const openTab = (tabName) => {
    setActiveTab(tabName);
  };
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const tabContents = {
    Menu: (
      <ul>
        <li>
          <span>Italian</span>
          <br />
          ndbcksevsjbvwvhlwsv
        </li>
        {/* Other menu items */}
      </ul>
    ),
    services: (
      <ul>
        <li>
          <span>Birthday Party</span>
          <br />
          csbvbkjsbkvbkbskvksjbvdfksbv
        </li>
        {/* Other services */}
      </ul>
    ),
    reservation: (
      <ul>
        <li>
          <span>Candle Light Dinner</span>
          <br />
          dcskbvb kshvh iohobv
        </li>
        {/* Other reservation options */}
      </ul>
    ),
  };

    // Detect scrolling and show/hide button
  useEffect(() => {
    const handleScroll = () => {
      const scrollButton = document.getElementById('myBtn');
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        scrollButton.style.display = 'block';
      } else {
        scrollButton.style.display = 'none';
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Your header and navigation content */}
      <div id="about">
        <div className="container">
          <div className="row">
            <div className="about-col-1">
              <img src='home/chef-food-service-us-foods-getty.jpeg' alt="About Us" />
            </div>
            <div className="about-col-2">
              <h1 className="sub-title">AlphaRestaurant</h1>
                <p>Welcome to our Italian restaurant, where every dish embodies Italy's culinary essence from diverse regions. 
                Indulge in our authentic pasta, wood-fired pizzas, and tender meats crafted with fresh ingredients and expertise. 
                Pair your meal with our wide selection of Italian wines for a complete gastronomic experience. 
                Relax in our welcoming ambiance as our attentive team ensures a memorable dining experience. 
                We're thrilled to have you here to savor the flavors of Italy. Buon Appetito!
                </p>
            </div>
            
            <div className='page_2_img1_welcome'>
                <img src='home\CoupleAtRestaurant_Lead.jpg' alt="#" />
            </div>
            <div className='welcome_text'>
              <h1>Benvenuti al nostro Ristorante Italiano!<br></br>Welcome to our restaurant</h1>
                  <p>Welcome to our Italian restaurant, where every dish embodies Italy's culinary essence from diverse regions. 
                  Indulge in our authentic pasta, wood-fired pizzas, and tender meats crafted with fresh ingredients and expertise. 
                  Pair your meal with our wide selection of Italian wines for a complete gastronomic experience. 
                  Relax in our welcoming ambiance as our attentive team ensures a memorable dining experience. 
                  We're thrilled to have you here to savor the flavors of Italy. Buon Appetito!
              </p>
            </div>

            <div className='page_2_img2_menu'>
              <img src='home\restaurant-background-01.jpg' alt ="#"/>
            </div>
            <div className='menu_text'>
              <h1>Benvenuti al nostro Ristorante Italiano!<br></br>Welcome to our restaurant</h1>
                  <p>Welcome to our Italian restaurant, where every dish embodies Italy's culinary essence from diverse regions. 
                  Indulge in our authentic pasta, wood-fired pizzas, and tender meats crafted with fresh ingredients and expertise. 
                  Pair your meal with our wide selection of Italian wines for a complete gastronomic experience. 
                  Relax in our welcoming ambiance as our attentive team ensures a memorable dining experience. 
                  We're thrilled to have you here to savor the flavors of Italy. Buon Appetito!
              </p>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={scrollToTop}
        id="myBtn"
        title="Go to top"
        style={{ display: 'none' }} // Initially hide the button //upward arrow
      > &uarr; 
        
      </button>
      <div className ="copyright">
          <img src='logo\logo_without_bg.png' alt="" />
          <p>Copyright @ Dhruv</p>
      </div>
    </div>
  );
};



export default AlphaRestaurant;
