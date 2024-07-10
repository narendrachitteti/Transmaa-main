import React, { useState } from 'react';

function Loadingcards() {
  const [activePanel, setActivePanel] = useState(0);

  const panels = [
    {
      imageUrl: 'https://transmaa.com/wp-content/uploads/2024/01/pexels-saqlain-ashraf-clicks-13761855-2048x1365.jpg',
      title: 'Load'
    },
    {
      imageUrl: 'https://transmaa.com/wp-content/uploads/2024/01/Truck-Freight-Transport-Logistics-Stock-Photo-14.jpg',
      title: 'Vehicle Buy & Sell'
    },
    {
      imageUrl: 'https://transmaa.com/wp-content/uploads/2024/01/pexels-engin-akyurt-12377481-2048x1536.jpg',
      title: 'Fuel'
    },
    {
      imageUrl: 'https://images.moneycontrol.com/static-mcnews/2023/07/Insurance-770x433.png',
      title: 'Insurance'
    },
    {
      imageUrl: 'https://www.banking24seven.com/wp-content/uploads/2018/12/finance-department.jpg',
      title: 'Finance'
    }
  ];

  const handleClick = (index) => {
    setActivePanel(index);
  };

  return (
   <>
   
   
   <div className="loadingcardscontainer">
      {panels.map((panel, index) => (
        <div
          key={index}
          className={`panel ${index === activePanel ? 'active' : ''}`}
          style={{ backgroundImage: `url(${panel.imageUrl})` }}
          onClick={() => handleClick(index)}
        >
          <h3>{panel.title}</h3>
        </div>
      ))}
    </div>




{/* <div class="loadcardsmain">
  <div class="loadswcard" id="c1"></div>
  <div class="loadswcard" id="c2"></div>
  <div class="loadswcard" id="c3"></div>
  <div class="loadswcard" id="c4"></div>
  <div class="loadswcard" id="c5"></div>
</div> */}

   </>
  );
}

export default Loadingcards;
