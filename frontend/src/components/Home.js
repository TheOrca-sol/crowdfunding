import React from 'react';
import { Switch } from 'antd';
import InvestmentInfo from './GuestHome/InvestmentInfo.js';
import DynamicCardScroll from './GuestHome/DynamicCardScroll.js'; // Adjust the path as necessary
import InvestmentStrategySection from './GuestHome/InvestmentStrategySection.js'; // Adjust the path as needed
import ProjectsSection from './GuestHome/ProjectsSection.js';
import TeamSection from './GuestHome/TeamSection.js';
import CompanyInfoSection from './GuestHome/CompanyInfoSection.js'
import { Footer } from 'antd/es/layout/layout';
import FAQSection from './GuestHome/FAQSection.js';
import Footer2 from './footer.js';
import ManagementMenu from './UserHome/ManagementMenu'; // Adjust the path as necessary
import UserProjectsSection from './UserHome/UserProjectsSection.js';
const Home = ({ isLoggedIn, handleToggle }) => {
  return (
    <div align="center">
      <Switch
        checkedChildren="Logged In"
        unCheckedChildren="Logged Out"
        checked={isLoggedIn}
        onChange={handleToggle}
      />
      {isLoggedIn ? (
        <>
        <ManagementMenu />
        <UserProjectsSection />
        </>
      ) : (
        <>
          <InvestmentInfo />
          <DynamicCardScroll />
          <InvestmentStrategySection />
          <ProjectsSection />
          <TeamSection />
          <CompanyInfoSection />
          <FAQSection />
          <Footer2 />
          <Footer style={{ textAlign: 'center' }}>Real Estate Crowdfunding ©2021 Created by Group 3</Footer>
        </>
      )}
    </div>
  );
};

export default Home;
