import React from 'react';
import { connect } from 'react-redux';


import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';


import styles from "assets/jss/material-kit-react/views/landingPageSections/inventoryListStyle.js";

const useStyles = makeStyles(styles);



const InventorySelectionBoard = ({inventorySelectedList, dispatch}) => {
  const classes = useStyles();

  const handleRemoveInventoryItems = inventoryId => {     

    dispatch({ type: 'REMOVE_INVENTORY', id: inventoryId })
  }

  return (
    <div className={classes.section}>
     
     <GridContainer justify="center">
     <GridItem xs={12} sm={12} md={12}>     
        
          <List>
            { inventorySelectedList && inventorySelectedList.map((item, i) => {
            
              return (
                <ListItem key={i} draggable={item.draggable} 
                className={classes.selectedListItem}               
                >
                  <ListItemAvatar>
                    <Avatar>
                      <AccountBalanceWalletIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    className={classes.listItemText}
                    primary={item.name}
                    secondary={`AED ${item.price}` || null}
                  />
                  <ListItemSecondaryAction onClick={()=> { handleRemoveInventoryItems(item.invoiceId)}}>
                    <IconButton edge="end" aria-label="delete" className={classes.icon}>
                      <HighlightOffIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              )
            })}
        

          </List>
          
        </GridItem>
      </GridContainer>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    inventorySelectedList: state.inventory.inventoryAddedItems,    
  }
 };
 const mapDispatchToProps = (dispatch) => {
   
  return {
    dispatch
  }
 }
 
 export default connect(
   mapStateToProps,
   mapDispatchToProps
 )(InventorySelectionBoard);
