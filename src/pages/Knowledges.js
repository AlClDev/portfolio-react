import React from "react";
import Experiences from "../components/knowledges/Experiences";
import Softwares from "../components/knowledges/Softwares";
import Languages from "../components/knowledges/Languages";
import OtherSkills from "../components/knowledges/OtherSkills";
import Navigation from "../components/Navigation";

const Knowledges = () => {
  return (
    <div className="knowledges">
      <Navigation />
      <div className="knowledgesContent">
        <Languages />
        <OtherSkills />
        <Softwares />
        <Experiences />
      </div>
    </div>
  );
};

export default Knowledges;
