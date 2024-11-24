import React, { useEffect, useState } from "react";
import ActionAreaCard from "../Card/Card";
import { Tabs, Tab } from "@mui/material";
import axios from "axios";

function TabSection({ dataUrl, tabsUrl }) {
  const [allTabs, setAllTabs] = useState([{ key: "all", label: "All" }]);
  const [currentTab, setCurrentTab] = useState(0);
  const [filters, setFilters] = useState({});

  function handleChange(e, newVal) {
    if (newVal !== 0) {
        // console.log(allTabs[newVal])
      setFilters({ genre: allTabs[newVal] });
    } else {
        setFilters({});
    }
    setCurrentTab(newVal);
  }
  const fetchTabsData = async () => {
    try {
      const res = await axios.get(tabsUrl);
      // console.log("resdata", res.data.data);
      setAllTabs([{ key: "all", label: "All" }, ...res.data.data]);
    } catch (error) {
      console.error("Error fetching card data:", error);
    }
  };
  // console.log(currentTab);
  useEffect(() => {
    fetchTabsData();
  }, []);

  return (
    <div>
      <div className="section">
        <div className="top">
          <h2>Songs</h2>
        </div>
        <Tabs
          indicatorColor="secondary"
          style={{ marginBottom: 20 }}
          value={currentTab}
          onChange={handleChange}
        >
          {allTabs.map((tab) => (
            <Tab style={{ color: "white" }} key={tab.key} label={tab.label} />
          ))}
        </Tabs>
        <div>
          <ActionAreaCard
            cardType="song"
            dataUrl={dataUrl}
            isSlidable={true}
            filters={filters}
          />
        </div>
      </div>
    </div>
  );
}

export default TabSection;
