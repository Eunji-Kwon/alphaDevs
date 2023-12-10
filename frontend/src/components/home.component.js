import React, { useState } from 'react';
import '../style/home.css'; 

const AlphaRestaurant = () => {
  const [activeTab, setActiveTab] = useState('Menu');

  const openTab = (tabName) => {
    setActiveTab(tabName);
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

  return (
    <div>
      {/* Your header and navigation content */}
      <div id="about">
        <div className="container">
          <div className="row">
            <div className="about-col-1">
              {/* <img src='frontend\public\home\chef-food-service-us-foods-getty.jpeg' alt="About Us" /> */}
              <img  src={process.env.PUBLIC_URL + 'home/chef-food-service-us-foods-getty.jpeg'}   className="home-img"
         alt="About Us Img"        />
            </div>

            <div className="about-col-2">
              <h1 className="sub-title">About Us</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut quis nostrum incidunt et dolores laborum
                minima corporis quos cumque sed, iure voluptate vel, odio, dicta voluptates? Facere doloremque quo
                suscipit voluptatum inventore asperiores iusto eum quos perferendis delectus ducimus, saepe cumque illo
                tenetur odio dignissimos a ipsam placeat expedita porro!
              </p>

              <div className="tab-titles">
                <p
                  className={`tab-links ${activeTab === 'Menu' ? 'active-link' : ''}`}
                  onClick={() => openTab('Menu')}
                >
                  Menu
                </p>
                {/* Other tab links */}
              </div>

              <div className={`tab-contents ${activeTab === 'Menu' ? 'active-tab' : ''}`}>
                {tabContents[activeTab]}
                {/* Other tab contents */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlphaRestaurant;
