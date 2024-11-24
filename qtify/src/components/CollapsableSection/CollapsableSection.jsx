import React, { useState } from "react";
import Button from "../Button/Button";
import ActionAreaCard from "../Card/Card";


const CollapsableSection = ({ title, isCollapsed, dataUrl }) => {
  const [collapse, setCollapse] = useState(isCollapsed);

  function toggleCollapse() {
    setCollapse((state) => !state);
  }

  return (
    <div className="section">
      <div className="top">
        <h2>{title}</h2>
        <Button onClick={toggleCollapse}>
          {collapse ? "Show All" : "Collapse"}
        </Button>
      </div>

      <ActionAreaCard dataUrl={dataUrl} isSlidable={collapse} />
    </div>
  );
};

export default CollapsableSection;
