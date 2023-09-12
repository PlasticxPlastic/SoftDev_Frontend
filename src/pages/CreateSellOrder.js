import React, { useState } from "react";
import "./CreateSellOrder.css";

function CreateSellOrder() {
  const [orderName, setOrderName] = useState("");
  const [numberOfHero, setNumberOfHero] = useState(0);
  const [numberOfSkin, setNumberOfSkin] = useState(0);
  const [rank, setRank] = useState("");
  const [winrate, setWinrate] = useState("0-10"); // Set the default value

  const handleConfirmClick = () => {
    // Handle the confirm button click event
    // You can use the state values (orderName, numberOfHero, numberOfSkin, rank, winrate) here.
  };

  return (
    <div className="create-sell-order">
      <div className="image-upload">
        {/* Image upload box */}
        {/* Add your image upload functionality here */}
        <div className="upload-box">
          {/* Styling for the box */}
        </div>
        <input type="file" accept="image/*" /> {/* Actual file input */}
      </div>
      <div className="order-info">
        {/* Order information */}
        <div className="order-name">
          <label>Order Name</label>
          <div className="input-container">
            <input
              type="text"
              value={orderName}
              onChange={(e) => setOrderName(e.target.value)}
            />
          </div>
        </div>
        <div className="order-details">
          {/* Align dropdowns and text box in a single line */}
          <div className="detail">
            <label>Number of Hero</label>
            <div className="input-container">
              <select
                value={numberOfHero}
                onChange={(e) => setNumberOfHero(e.target.value)}
              >
                {/* Populate the dropdown with the desired options */}
                {/* Example: */}
                <option value="0-10">0-10</option>
                {/* Add the rest of the options */}
              </select>
            </div>
          </div>
          <div className="detail">
            <label>Number of Skin</label>
            <div className="input-container">
              <select
                value={numberOfSkin}
                onChange={(e) => setNumberOfSkin(e.target.value)}
              >
                {/* Populate the dropdown with the desired options */}
                {/* Example: */}
                <option value="0-10">0-10</option>
                {/* Add the rest of the options */}
              </select>
            </div>
          </div>
          <div className="detail">
            <label>Rank</label>
            <div className="input-container">
              <select value={rank} onChange={(e) => setRank(e.target.value)}>
                {/* Populate the dropdown with the desired options */}
                {/* Example: */}
                <option value="Bronze">Bronze</option>
                {/* Add the rest of the options */}
              </select>
            </div>
          </div>
          <div className="detail">
            <label>Winrate</label>
            <div className="input-container">
              <select
                value={winrate}
                onChange={(e) => setWinrate(e.target.value)}
              >
                {/* Populate the dropdown with the desired options */}
                <option value="0-10">0-10</option>
                <option value="11-20">11-20</option>
                <option value="21-30">21-30</option>
                <option value="31-40">31-40</option>
                <option value="41-50">41-50</option>
                <option value="51-60">51-60</option>
                <option value="61-70">61-70</option>
                <option value="71-80">71-80</option>
                <option value="81-90">81-90</option>
                <option value="91-100">91-100</option>
              </select>
            </div>
          </div>
        </div>
        <button className="confirm-button" onClick={handleConfirmClick}>
          Confirm
        </button>
      </div>
    </div>
  );
}

export default CreateSellOrder;
