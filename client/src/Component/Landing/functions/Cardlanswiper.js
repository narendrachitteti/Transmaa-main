import React, { useRef } from "react";

function Cardlanswiper() {
  const stackRef = useRef(null);

  const swap = (e) => {
    const card = stackRef.current.lastElementChild;
    if (!card.contains(e.target)) return; // Check if clicked element is a descendant of the last card
    card.style.animation = "swap 700ms forwards";

    setTimeout(() => {
      card.style.animation = "";
      stackRef.current.prepend(card);
    }, 200);
  };

  //   const reverseChildren = () => {
  //     const stack = stackRef.current;
  //     const children = stack.children;
  //     for (let i = children.length - 1; i >= 0; i--) {
  //       stack.appendChild(children[i]);
  //     }
  //   };

  return (
    <div className="stackswap1" ref={stackRef} onClick={swap}>
      <div className="card">
        <img
          src="https://transmaa.com/wp-content/uploads/2024/01/pexels-saqlain-ashraf-clicks-13761855-2048x1365.jpg"
          alt=""
        />
        <div class="card__content">
    <p class="card__title">Load</p>
   
  </div>
      </div>
      <div className="card">
        <img
          src="https://transmaa.com/wp-content/uploads/2024/01/Truck-Freight-Transport-Logistics-Stock-Photo-14.jpg"
          alt=""
        />
        <div class="card__content">
    <p class="card__title">Vehicle Buy & Sell</p>
   
  </div>
      </div>
      <div className="card">
        <img
          src="https://transmaa.com/wp-content/uploads/2024/01/pexels-engin-akyurt-12377481-2048x1536.jpg"
          alt=""
        />
        <div class="card__content">
    <p class="card__title">Fuel</p>
   
  </div>
      </div>

      <div className="card">
        <img
          src="https://images.moneycontrol.com/static-mcnews/2023/07/Insurance-770x433.png"
          alt=""
        />
        <div class="card__content">
    <p class="card__title">Insurance</p>
   
  </div>
      </div>
      <div className="card">
        <img
          src="https://www.banking24seven.com/wp-content/uploads/2018/12/finance-department.jpg"
          alt=""
        />
        <div class="card__content">
    <p class="card__title">Finance</p>
   
  </div>
      </div>
    </div>
  );
}

export default Cardlanswiper;
