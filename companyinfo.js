// src/CompanyInfo.js
import React from 'react';
import './companyinfo.css'; // Import the CSS for styles

const CompanyInfo = () => {
    return (
        <div className="company-info">
            <h1>Company Name</h1>
            <p>
                This is a paragraph about the company. Here you can describe the company's mission,
                values, and services.
            </p>
            <a href="/product-listing" className="get-started-button">Get Started</a>
        </div>
    );
};

export default CompanyInfo;
