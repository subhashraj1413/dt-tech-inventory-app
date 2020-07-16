import React from "react";
import { useDispatch, useStore } from 'react-redux';
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { addInventory } from 'actions';


// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import Typography from "@material-ui/core/Typography";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import InventoryList from "./Sections/InventoryList.js";
import InventorySelectionBoard from "./Sections/InventorySelectionBoard.js";
import InventoryHeader from "./Sections/InventoryHeader.js";



const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const dispatch = useDispatch()
  const store = useStore();  
  const {inventory: { inventoryListItems} } = store.getState();

  const onDragOver = (ev) => {
    ev.preventDefault();
  };

  const onDrop = (ev) => {
    let id = ev.dataTransfer.getData("id");
    let [selectedItem] = inventoryListItems.filter(item => item.invoiceId === id);    
    dispatch(addInventory(selectedItem));      
 
  };

  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="DT Inventory App"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <Parallax filter image={require("assets/img/landing-bg.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Your Story Starts With Us.</h1>
              <h4>
                Every landing page needs a small description after the big bold
                title, that{"'"}s why we added this text here. Add here all the
                information that can make you or your product create the first
                impression.
              </h4>
            
            
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
         
          <GridContainer>
            
          <GridItem xs={12} sm={12} md={12}>
            <InventoryHeader />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <Typography variant="h6" className={classes.title}>
                Inventory  Items
              </Typography>
              
              <InventoryList/>
               
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
            <Typography variant="h6" className={classes.title}>
              Inventory Selected Items
            </Typography>
                <div onDragOver={(e)=> onDragOver(e)}
                    onDrop={(e)=> onDrop(e)}>                    
                     <InventorySelectionBoard />
              
                </div>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      <Footer />
    </div>
  );
}
