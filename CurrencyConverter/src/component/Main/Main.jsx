import React from "react";
import './Main.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsLeftRight } from "@fortawesome/free-solid-svg-icons";


const Base_Url = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/jpy.json";



function DashBoard() {
  return (
    <div className="Containor">
      <h2>Currency Converter</h2>

      <form>
        <div className="Amount">
          <p>Enter Amount</p>
          <input value="100" type="text" />
        </div>

        <div className="DropDown">
          <div className="from">
            <p>From</p>
            <div className="select-containor">
              <img src="https://flagsapi.com/US/flat/64.png" alt="" />
              <select name="from">
                <option value="USD">USD</option>
                <option value="INR">INR</option>
                <option value="AUD">AUD</option>
                <option value="EUR">EUR</option>
              </select>
            </div>
          </div>
          < FontAwesomeIcon icon={faArrowsLeftRight} id="icon"/>
          <div className="To">
            <p>To</p>
            <div className="select-containor">
              <img src="https://flagsapi.com/IN/flat/64.png" alt="" />
              <select name="to">
                <option value="USD">USD</option>
                <option value="INR">INR</option>
                <option value="AUD">AUD</option>
                <option value="EUR">EUR</option>
              </select>
            </div>
          </div>
        </div>

        <div className="msg">1 USD = 80 INR</div>
        <button>Get Exchange Rate</button>
      </form>
    </div>
  );
}

export default DashBoard;
