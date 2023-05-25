import React from "react";
import "./BodyComponent.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function BodyComponent() {
  return (

    

<div className="container bodyHeight">
      <div className="">
        <div className="d-flex justify-content-between ">
          <div className="me-5 card">
            <div>
              <h1 className="card-header"> Updates And Informations </h1>
              <div className="container">
                <p className="fs-5 p-2">
                  - Our bank has implemented advanced security measures to
                  protect your accounts and personal information. <br />
                  - We now offer a mobile app with easy-to-use features for
                  managing your accounts on-the-go. <br />
                  - Our customer service team has expanded its hours to provide
                  support whenever you need it. <br />
                  - We have increased the number of ATMs in our network for your
                  convenience. <br />
                  - Our bank has lowered interest rates on loans for qualifying
                  customers. <br />
                  - We have launched a new rewards program for debit and credit
                  card users. <br />
                  - Our online banking platform has been updated to provide a
                  more seamless experience. <br />
                  - We have added new investment options to help you grow your
                  wealth. <br />
                  - Our bank has partnered with additional merchants to offer
                  exclusive discounts and deals to our customers. <br />- We now
                  offer overdraft protection to help you avoid costly fees.
                </p>
              </div>
            </div>
          </div>
          <div className="ms-5 card">
            <div>
              <h1 className = "card-header">Services</h1>
            </div>
            <div>
              <p className="fs-5 ms-4 "><Link to="/OpenAccount" className="text-dark text-decoration-underline">Open Account</Link> </p>
              <p className="fs-5 ms-4 "><Link to="/EMICalculator" className="text-dark text-decoration-underline">EMI Calculator</Link> </p>
              <p className="fs-5 ms-4 "><Link to="/InterestRates" className="text-dark text-decoration-underline">Interest Rates</Link> </p>
              <p className="fs-5 ms-4 "><Link to="/LocateBranch" className="text-dark text-decoration-underline">Locate Branch</Link> </p>
              <p className="fs-5 ms-4 "><Link to="/MutualFunds" className="text-dark text-decoration-underline">Mutual Funds</Link> </p>
            </div>
          </div>
        </div>
      </div>
    
    </div>



    
  );
}

export default BodyComponent;
