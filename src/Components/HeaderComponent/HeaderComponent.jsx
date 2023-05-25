import React from 'react'
import './HeaderComponent.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import MainBodyComponent from '../BodyComponent/MainBodyComponent'
import CareersHomes from '../Careers/CareersHomes'
import CalculatorComponent from '../CalculatorComponent/CalculatorComponent'

import EmiCalculator from "../ServicesComponents/EmiCalculator";
import InterestRates from "../ServicesComponents/InterestRates";
import LocateBranch from "../ServicesComponents/LocateBranch";
import MutualFunds from "../ServicesComponents/MutualFunds";
import AboutUs from '../AboutUs/AboutUs'
import UserLogin from '../UserLogin/UserLogin'
import ContactUs from '../ContactUS/ContactUs'
import OpenAccs from '../ServicesComponents/OpenAccs'
import LoanCalculator from '../CalculatorComponent/LoanCalculator'
function HeaderComponent() {
  return (
    <BrowserRouter>
        <div>
            <div>
                <nav className='d-flex justify-content-between navColor '>
                    <div>
                        <img src="LogoTrans.png" width={400} className='m-3' alt="" />
                        
                    </div>
                    <div className='d-flex m-5 '>
                        <div className='m-4 mt-5 fs-5 fw-bold'><Link to="/Home" className='text-decoration-none text-dark'>Home</Link> </div>
                        <div className='m-4 mt-5 fs-5 fw-bold'><Link to="/Careers" className='text-decoration-none text-dark'>Careers</Link> </div>
                        <div className='m-4 mt-5 fs-5 fw-bold'><Link to="/Calculator" className='text-decoration-none text-dark'>Calculator</Link> </div>
                        <div className='m-4 mt-5 fs-5 fw-bold'><Link to="/ContactUs" className='text-decoration-none text-dark'>Contact Us</Link>  </div>
                        <div className='m-4 mt-5 fs-5 fw-bold'><Link to="/AboutUs" className='text-decoration-none text-dark'>About Us</Link>  </div>
                        <div className='m-4 mt-5 fs-5 fw-bold'><Link to="/UserLogin" className='text-decoration-none text-dark'>User Login</Link> </div>
                        <div></div>
                    </div>
                </nav>
            </div>
        </div>
        <Routes>
            <Route path='/' element={<MainBodyComponent></MainBodyComponent>}></Route>
            <Route path='/Home' element={<MainBodyComponent></MainBodyComponent>}></Route>
            <Route path='/Careers' element={<CareersHomes></CareersHomes>}></Route>
            <Route path='/Calculator' element={<CalculatorComponent></CalculatorComponent>}></Route>
            <Route path='/ContactUs' element={<ContactUs></ContactUs>}></Route>
            <Route path='/AboutUs' element={<AboutUs></AboutUs>}></Route>
            <Route path='/UserLogin' element={<UserLogin></UserLogin>}></Route>
            <Route path="/OpenAccount" element={<OpenAccs></OpenAccs>}></Route>
            <Route path="/EMICalculator" element={<EmiCalculator></EmiCalculator>}></Route>
            <Route path="/InterestRates" element={<InterestRates></InterestRates>}></Route>
            <Route path="/LocateBranch" element={<LocateBranch></LocateBranch>}></Route>
            <Route path="/MutualFunds" element={<MutualFunds></MutualFunds>}></Route>
            <Route path="/LoanCalculator" element={<LoanCalculator></LoanCalculator>}></Route>
        </Routes>
    </BrowserRouter>
    
  )
}

export default HeaderComponent


