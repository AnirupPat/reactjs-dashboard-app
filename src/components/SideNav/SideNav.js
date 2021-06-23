import classes from "./SideNav.module.css";
import NavigationList from "../NavigationList/NavigationList";

import React from "react";
const SAP_FIORI = "SAP FIORI";
const SAP_IA = "INTELLIGENT AUTOMATION";
const SAP_ABAP = "SAP ABAP";
const SideNav = () => {
  return (
    <div className={classes.sidenav}>
      <NavigationList projectTag={SAP_FIORI} params={["Stories", "Revenues"]} />
      <NavigationList projectTag={SAP_IA} params={["Stories", "Revenues"]} />
      <NavigationList projectTag={SAP_ABAP} params={["Stories", "Revenues"]} />
    </div>
  );
};

export default SideNav;
