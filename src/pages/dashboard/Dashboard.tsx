import React from "react";
import { HeroSection, Header, LeftSection } from "../../components";

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = () => {
  
  return (
    <div className="bg-accent w-[100vw]">
      <Header />
      <main className="flex ">
        <HeroSection />
        <LeftSection />
      </main>
    </div>
  );
};

export default Dashboard;
