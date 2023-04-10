import classes from "./SideNav.module.css";
import NavigationList from "../NavigationList/NavigationList";

import React from "react";
const SAP_FIORI = "INSURANCE";
const SAP_IA = "FINANCE";
const SAP_ABAP = "SECURITIES LICENSING";
const EXTRAS = "EXTRAS";
const SideNav = () => {
  return (
    <div className={classes.sidenav}>
      <NavigationList projectTag={SAP_FIORI} params={["Stories", "Revenues"]} />
      <NavigationList projectTag={SAP_IA} params={["Stories", "Revenues"]} />
      <NavigationList projectTag={SAP_ABAP} params={["Stories", "Revenues"]} />
      <NavigationList projectTag={EXTRAS} params={["Innovations"]} />
    </div>
  );
};

export default SideNav;
