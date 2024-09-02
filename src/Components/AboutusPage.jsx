import React, { useEffect } from "react";
import HOC from "./HOC";
import AboutOurTeam from "./AboutOurTeam";
import "../Assets/Css/AboutUs.css";
import AboutusSec from "./AboutusSec";
import AboutOurInfrastructure from "./AboutOurInfrastructure";
import AboutMissionVissionStory from "./AboutMissionVissionStory";
import ClientLogorun from "./ClientLogorun";
import AboutUsMain from "./AboutUsMain";


function AboutusPage() {
  return (
    <>
      <AboutUsMain />
      <AboutusSec />
      <AboutOurInfrastructure />
      <AboutOurTeam />
      <AboutMissionVissionStory />
      <ClientLogorun />
    </>
  );
}

export default HOC(AboutusPage);
